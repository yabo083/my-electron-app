module.exports = {
  publishers: [
    {
      name: '@electron-forge/publisher-github',
      config: {
        repository: {
          owner: 'yabo083',
          name: 'my-electron-app'
        },
        prerelease: false,
        draft: true
      }
    }
  ]
}