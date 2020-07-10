import { ConfigArgs } from "./interfaces"

export class Config {
  private static instance
  private config = {
    host: null,
    port: null,
    username: null,
    password: null,
    dbname: null
  }

  private constructor() { }

  static getInstance() {
    if (!Config.instance) {
      Config.instance = new Config()
    }
    return Config.instance
  }

  setValues(args: ConfigArgs) {
    Object.assign(this.config, args)
    return this
  }

  getConfig() {
    return this.config
  }

}