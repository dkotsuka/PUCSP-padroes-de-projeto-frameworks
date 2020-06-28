class ConnectionConfig {
  private config = {
    host: null,
    port: null,
    user: null,
    password: null,
    database: null
  }

  setPort(port: number) {
    this.config.port = port
  }

  setHost(host: string) {
    this.config.host = host
  }

  setCredentials(user: string, password: string) {
    this.config.user = user
    this.config.password = password
    return this
  }

  setDatabase(database: string) {
    this.config.database = database
    return this
  }

  get() {
    return this.config
  }
}

export const connectionConfig = new ConnectionConfig