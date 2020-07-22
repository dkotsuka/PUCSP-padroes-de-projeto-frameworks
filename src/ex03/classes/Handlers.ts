import * as net from "net"
import { Payload } from "./interfaces";
import { Handler } from "./ResolverChain";


export const searchHandler: Handler<Payload, boolean> = (payload: Payload, socket: net.Socket) => {
  let result
  if (payload?.command != "search")
    return false

  if (payload?.args.includes("mp3"))
    result = "Diga não à pirataria."

  result = `Resultado da busca para: ${payload.args}.`
  socket.write(JSON.stringify({ command: "result", args: result }))

  return true
}

export const uploadHandler: Handler<Payload, boolean> = (payload: Payload, socket: net.Socket) => {
  if (payload?.command != "upload")
    return false

  let result = `Resultado do upload do arquivo: ${payload.args}.`
  socket.write(JSON.stringify({ command: "result", args: result }))

  return true
}

export const executeHandler: Handler<Payload, boolean> = (payload: Payload, socket: net.Socket) => {
  if (payload?.command != "execute")
    return false

  let result = `Script executado: ${payload.args}.`
  socket.write(JSON.stringify({ command: "result", args: result }))

  return true
}

export const neighborsHandler: Handler<Payload, boolean> = (payload: Payload, socket: net.Socket) => {
  if (payload?.command != "neighbors")
    return false

  let result = `Neighbors for depth of ${payload.args} of this instance.`
  socket.write(JSON.stringify({ command: "result", args: result }))

  return true
}