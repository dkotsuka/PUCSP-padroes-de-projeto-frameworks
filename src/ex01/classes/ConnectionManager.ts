import { Config } from "./Config";
import { ConfigLoader } from "./ConfigLoader";
import { ConfigArgs } from "./interfaces";
import { DBProvider } from "./DBProvider";

class ConnectionManager {

  private dbProvider: DBProvider

  constructor() {
    this.dbProvider = new DBProvider()
  }

  onChangeConfig(config: string) {
    const args: ConfigArgs = JSON.parse(config)
    this.setConfigValues(args)
  }

  async loadConfigFrom(origin: "JSON" | "ENV") {
    const args = await (new ConfigLoader()).load(origin)
    this.setConfigValues(args)
  }

  setConfigValues(configArgs: ConfigArgs) {
    Config.getInstance().setValues(configArgs)
    this.dbProvider.connect()
  }

  execute(query: string) {
    return this.dbProvider.execute(query)
  }

  getConfig() {
    return Config.getInstance().getConfig()
  }

}

export const connectionManager = new ConnectionManager()
