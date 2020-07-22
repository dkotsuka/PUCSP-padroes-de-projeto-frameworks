import * as net from "net"

export type Handler<Payload, Result> = (payload: Payload, socket: net.Socket) => Result

export class ResolverChain<Payload, Result> {
  private handlers: Handler<Payload, Result>[] = []

  setHandler(handler: Handler<Payload, Result>) {
    this.handlers.push(handler)
  }

  execute(payload: Payload, socket: net.Socket) {
    let handled = null
    for (const handler of this.handlers) {
      handled = handler(payload, socket)

      if (handled) break
    }
    return handled
  }
}
