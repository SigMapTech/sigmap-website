module.exports = {
  ci: {
    collect: {
      staticDistDir: './',
      url: ['http://localhost/index.html', 'http://localhost/2048/privacy-policy.html'],
      numberOfRuns: 1
    },
    assert: {
      assertions: {
        'categories:performance': ['warn', { minScore: 0.8 }],
        'categories:accessibility': ['error', { minScore: 0.9 }],
        'categories:best-practices': ['warn', { minScore: 0.8 }],
        'categories:seo': ['warn', { minScore: 0.8 }]
      }
    },
    upload: {
      target: 'temporary-public-storage'
    }
  }
};
