import * as net from 'net'
import { Resolver, Payload } from "./AbstractResolver";
import { Connections } from "../Connections";

interface UploadPayload extends Payload {
  filename: string
  content: Buffer
}

export class UploadResolver extends Resolver {

  execute(payload: UploadPayload, result: Object, origin: net.Socket) {
    if (payload.command == "upload") {

    }
    this.executeNext(payload, result, origin)
  }
}