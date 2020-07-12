import { Connection, DBConnection } from "./Database";
import { Config } from "./Config";

export class DBProvider {
  private connection: Connection

  connect() {
    const config = Config.getInstance().getConfig()
    this.connection = (new DBConnection).configure(config).test().connect()
  }

  execute(query: string) {
    return this.connection.execute(query)
  }
}