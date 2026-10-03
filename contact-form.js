// Contact form: client-side validation, spam checks, and Formspree submission
(() => {
    const form = document.getElementById('contact-form');
    if (!form) return;

    const submitBtn = document.getElementById('submit-btn');
    const formStatus = document.getElementById('form-status');

    // Configuration constants
    const COOLDOWN_TIME = 60000;      // 60 seconds between submissions
    const MIN_SUBMIT_TIME = 3000;     // Minimum 3 seconds before form can be submitted
    const MAX_URL_COUNT = 3;          // Maximum URLs allowed in message
    const MIN_MESSAGE_LENGTH = 10;    // Minimum message character length

    const formLoadTime = Date.now();  // Track when form loaded

    // Form field references for aria-invalid handling
    const formFields = {
        name: form.querySelector('#name'),
        email: form.querySelector('#email'),
        message: form.querySelector('#message')
    };

    const clearFieldErrors = () => {
        Object.values(formFields).forEach((field) => {
            if (field) field.removeAttribute('aria-invalid');
        });
    };

    // Mark the field invalid and move focus to it so keyboard and screen reader users land on the problem
    const setFieldError = (fieldName) => {
        if (formFields[fieldName]) {
            formFields[fieldName].setAttribute('aria-invalid', 'true');
            formFields[fieldName].focus();
        }
    };

    const showError = (message) => {
        formStatus.textContent = message;
        formStatus.className = 'form-status error';
        formStatus.setAttribute('role', 'alert');
    };

    const showInfo = (message) => {
        formStatus.textContent = message;
        formStatus.className = 'form-status info';
        formStatus.setAttribute('role', 'status');
    };

    const showSuccess = (message) => {
        formStatus.textContent = message;
        formStatus.className = 'form-status success';
        formStatus.setAttribute('role', 'status');
    };

    const clearStatus = () => {
        formStatus.textContent = '';
        formStatus.className = 'form-status';
        formStatus.setAttribute('role', 'status');
    };

    const isInCooldown = () => {
        try {
            const lastSubmit = localStorage.getItem('lastFormSubmit');
            if (!lastSubmit) return false;
            const timeSince = Date.now() - parseInt(lastSubmit, 10);
            return timeSince < COOLDOWN_TIME;
        } catch (err) {
            return false;
        }
    };

    const getRemainingCooldown = () => {
        try {
            const lastSubmit = localStorage.getItem('lastFormSubmit');
            if (!lastSubmit) return 0;
            const timeSince = Date.now() - parseInt(lastSubmit, 10);
            return Math.ceil((COOLDOWN_TIME - timeSince) / 1000);
        } catch (err) {
            return 0;
        }
    };

    // Check cooldown on page load
    if (isInCooldown()) {
        const remaining = getRemainingCooldown();
        submitBtn.disabled = true;
        showInfo(`Please wait ${remaining} seconds before submitting again.`);

        setTimeout(() => {
            submitBtn.disabled = false;
            clearStatus();
        }, remaining * 1000);
    }

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        clearFieldErrors();

        if (isInCooldown()) {
            const cooldownRemaining = getRemainingCooldown();
            showError(`Please wait ${cooldownRemaining} seconds before submitting again.`);
            return;
        }

        const timeSinceLoad = Date.now() - formLoadTime;
        if (timeSinceLoad < MIN_SUBMIT_TIME) {
            showError('Please take a moment to review your message.');
            return;
        }

        // The _gotcha honeypot is checked by Formspree on the server, which discards
        // submissions that fill it. It is not checked here: a silent client-side drop
        // would give a real visitor whose autofill touched it no feedback at all.

        const message = form.querySelector('[name="message"]').value;

        const urlPattern = /(https?:\/\/[^\s]+)/g;
        const urlMatches = message.match(urlPattern);
        if (urlMatches && urlMatches.length > MAX_URL_COUNT) {
            setFieldError('message');
            showError('Your message contains too many links. Please reduce the number of links.');
            return;
        }

        if (message.trim().length < MIN_MESSAGE_LENGTH) {
            setFieldError('message');
            showError('Please provide a more detailed message.');
            return;
        }

        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending...';
        submitBtn.setAttribute('aria-busy', 'true');
        showInfo('Sending your message...');

        try {
            if (typeof grecaptcha !== 'undefined' && window.RECAPTCHA_SITE_KEY) {
                try {
                    const token = await grecaptcha.execute(window.RECAPTCHA_SITE_KEY, {action: 'submit'});
                    let recaptchaInput = form.querySelector('input[name="g-recaptcha-response"]');
                    if (!recaptchaInput) {
                        recaptchaInput = document.createElement('input');
                        recaptchaInput.type = 'hidden';
                        recaptchaInput.name = 'g-recaptcha-response';
                        form.appendChild(recaptchaInput);
                    }
                    recaptchaInput.value = token;
                } catch (err) {
                    // reCAPTCHA not available
                }
            }

            const response = await fetch(form.action, {
                method: 'POST',
                body: new FormData(form),
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                // Start the cooldown only once the message has actually been sent
                try {
                    localStorage.setItem('lastFormSubmit', Date.now().toString());
                } catch (err) {
                    // localStorage not available
                }

                showSuccess('Thank you! Your message has been sent successfully.');
                form.reset();
                clearFieldErrors();
                submitBtn.textContent = 'Message Sent';
                submitBtn.removeAttribute('aria-busy');

                setTimeout(() => {
                    submitBtn.disabled = false;
                    submitBtn.textContent = 'Send Message';
                    clearStatus();
                }, COOLDOWN_TIME);
            } else {
                // Formspree returns errors as {"errors": [{"message": ...}, ...]}
                const data = await response.json().catch(() => null);
                const errorMessage = data && Array.isArray(data.errors)
                    ? data.errors.map((item) => item.message).filter(Boolean).join(' ')
                    : '';
                showError(errorMessage || 'Oops! There was a problem sending your message. Please try again.');
                submitBtn.disabled = false;
                submitBtn.textContent = 'Send Message';
                submitBtn.removeAttribute('aria-busy');
            }
        } catch (error) {
            showError('Network error. Please check your connection and try again.');
            submitBtn.disabled = false;
            submitBtn.textContent = 'Send Message';
            submitBtn.removeAttribute('aria-busy');
        }
    });
})();
