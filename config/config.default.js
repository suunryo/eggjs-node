exports.keys = 'mykeys'

exports.mysql = {
  client: {
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: '123456',
    database: 'test',
  },
  app: true, // 是否加载到 app 上，默认开启
  agent: false, // 是否加载到 agent 上，默认关闭
}

exports.middleware = ['reqLog']