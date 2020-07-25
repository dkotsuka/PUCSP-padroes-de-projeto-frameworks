import * as net from 'net'

export interface Payload {
  command: string
}

export abstract class Resolver {
  protected next: Resolver

  abstract resolve(payload: Payload, result: Object, origin: net.Socket)

  execute(payload: Payload, result: Object, origin: net.Socket) {
    this.resolve(payload, result, origin)
    this.executeNext(payload, result, origin)
  }

  setNext(next: Resolver) {
    this.next = next
    return this.next
  }

  executeNext(payload: Payload, result: Object, origin: net.Socket) {
    if (this.next)
      this.next.execute(payload, result, origin)
  }
}