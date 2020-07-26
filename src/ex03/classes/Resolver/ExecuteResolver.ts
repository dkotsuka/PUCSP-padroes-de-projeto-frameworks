import * as net from 'net'
import { Resolver, Payload } from "./AbstractResolver";
import { Connections } from "../Connections";

interface ExecutePayload extends Payload {
  script: string
}

export class ExecuteResolver extends Resolver {

  resolve(payload: ExecutePayload, result: Object, origin: net.Socket) {
    if (payload.command == "execute") {
      console.log(`Execute script ${payload.script}`)
    }
    this.executeNext(payload, result, origin)
  }
}