import * as net from 'net'
import { Resolver, Payload } from "./AbstractResolver";
import { Connections } from "../Connections";

interface UploadPayload extends Payload {
  filename: string
  content: Buffer
}

export class UploadResolver extends Resolver {

  resolve(payload: UploadPayload, result: Object, origin: net.Socket) {
    if (payload.command == "upload") {
      Connections.init().getAddresses().forEach(addr => {
        Connections.init().getOne(addr).write(JSON.stringify({
          request: `File ${payload.filename} upload request.`
        }))
      })
      console.log("[UPLOAD] Sending file to peers.")
    }
  }
}