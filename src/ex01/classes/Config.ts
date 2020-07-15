import { ConfigArgs } from "./interfaces"

export class Config {
  private static instance: Config
  private config: ConfigArgs

  private constructor() { }

  public static getInstance(): Config {
    if (!Config.instance) {
      console.log("[CONFIG] new config object.")
      Config.instance = new Config()
      Config.instance.setDefaults()
    }
    return Config.instance
  }

  public setDefaults() {
    console.log("[CONFIG] set defaults.")
    this.config = {
      host: null,
      port: null,
      username: null,
      password: null,
      dbname: null
    }
  }

  public setValues(values: ConfigArgs) {
    console.log("[CONFIG] update values.")
    Object.assign(this.config, values)
  }

  public getConfig() {
    return this.config
  }

}