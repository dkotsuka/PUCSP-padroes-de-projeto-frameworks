export type Handler<Payload, Result> = (payload: Payload) => Result

export class ResolverChain<Payload, Result> {
  private handlers: Handler<Payload, Result>[] = []

  setHandler(handler: Handler<Payload, Result>) {
    this.handlers.push(handler)
  }

  execute(payload: Payload) {
    let handled = null
    for (const handler of this.handlers) {
      handled = handler(payload)

      if (handled) break
    }
    return handled
  }
}
