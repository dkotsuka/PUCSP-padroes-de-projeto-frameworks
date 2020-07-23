import * as net from 'net'
import { Resolver, Payload } from "./AbstractResolver";
import { Connections } from "../Connections";

interface ExecutePayload extends Payload {
  script: string
}

export class ExecuteResolver extends Resolver {

  execute(payload: ExecutePayload, result: Object, origin: net.Socket) {
    if (payload.command == "execute") {

    }
    this.executeNext(payload, result, origin)
  }
}