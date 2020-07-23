import * as net from 'net'

export interface Payload {
  command: string
}

export abstract class Resolver {
  protected next: Resolver

  abstract execute(payload: Payload, result: Object, origin: net.Socket)

  setNext(next: Resolver) {
    this.next = next
    return this.next
  }

  executeNext(payload: Payload, result: Object, origin: net.Socket) {
    if (this.next)
      this.next.execute(payload, result, origin)
  }
}