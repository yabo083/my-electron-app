module.exports = {
  publishers: [
    {
      name: '@electron-forge/publisher-github',
      config: {
        repository: {
          owner: 'yabo083',
          name: 'github-repo-name'
        },
        prerelease: false,
        draft: true
      }
    }
  ]
}