import { ConfigArgs } from "./interfaces"
import { readFile } from "fs"

export class Config {
  private static instance: Config
  private config = {
    host: null,
    port: null,
    username: null,
    password: null,
    dbname: null
  }

  private constructor() { }

  static getInstance(): Config {
    if (!Config.instance) {
      Config.instance = new Config()
    }
    return Config.instance
  }

  fromEnv() {
    this.config.host = process.env.HOST
    this.config.port = process.env.PORT
    this.config.dbname = process.env.DBNAME
    this.config.username = process.env.USERNAME
    this.config.password = process.env.PASSWORD
    console.log(`[CONFIG][VALUE UPDATE]`)
    return this
  }

  fromArgs(args: ConfigArgs) {
    Object.assign(this.config, args)
    console.log(`[CONFIG][VALUE UPDATE]`)
    return this
  }

  fromJSON(): Promise<Config> {
    return new Promise((resolve, reject) => {
      readFile("src/ex01/classes/config.json", 'utf8', (error, data) => {
        if (error) {
          console.log(`[CONFIG][${error.message}]`)
          return reject(error)
        }
        const args: ConfigArgs = JSON.parse(data)
        Object.assign(this.config, args)
        console.log(`[CONFIG][VALUE UPDATE]`)
        return resolve(Config.getInstance())
      })
    })
  }

  getConfig() {
    return this.config
  }

}