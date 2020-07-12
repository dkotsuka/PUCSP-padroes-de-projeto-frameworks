import { ConfigArgs } from "./interfaces"

export class DBConnection {
  private host: string

  configure({ host, port }: ConfigArgs) {
    console.log(`[DB][CONFIGURE]`)
    this.host = `${host}:${port}`
    return this
  }

  test() {
    console.log(`[DB][TEST CONNECTION]`)
    return this
  }

  connect() {
    console.log(`[DB][GET CONNECTION]`)
    return new Connection()
  }
}

export class Connection {
  execute(query: string) {
    console.log(`[DB-EXECUTE][${query}]`)
    return [`Query result for "${query}".`]
  }
}

