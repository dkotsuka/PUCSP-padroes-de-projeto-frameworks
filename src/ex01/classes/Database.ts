import { ConfigArgs } from "./interfaces"

export class DBConnection {
  private host: string

  configure({ host, port }: ConfigArgs) {
    this.host = `${host}:${port}`
    return this
  }

  test() {
    console.log(`Testing ${this.host}: ok`)
    return this
  }

  connect() {
    return new Connection()
  }
}

class Connection {
  execute(query: string) {
    return [`Query result for "${query}".`]
  }
}

