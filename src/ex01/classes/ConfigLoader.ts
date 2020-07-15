import { ConfigArgs } from "./interfaces"
import { readFile } from "fs"


export class ConfigLoader {

  load(origin: "JSON" | "ENV"): Promise<ConfigArgs> {
    if (origin == "JSON") {
      return this.jsonConfigLoader()
    }

    return this.envConfigLoader()
  }


  private jsonConfigLoader(): Promise<ConfigArgs> {
    return new Promise((resolve, reject) => {
      readFile("src/ex01/classes/config.json", 'utf8', (error, data) => {
        if (error) {
          return reject(error)
        }
        return resolve(JSON.parse(data))
      })
    })
  }

  private envConfigLoader(): Promise<ConfigArgs> {
    return Promise.resolve(Object.assign({}, {
      host: process.env.HOST,
      port: parseInt(process.env.PORT),
      dbname: process.env.DBNAME,
      username: process.env.USERNAME,
      password: process.env.PASSWORD
    }))
  }
}