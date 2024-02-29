module.exports = {
  apps: [
    {
      name: '2018-0215',
      port: '3001',
      exec_mode: 'cluster',
      instances: 'max',
      script: './.output/server/index.mjs'
    }
  ]
}
