import * as net from 'net'
import { Peer } from './Peer'

type Callback = (socket: net.Socket) => void;

export class Connections {
  private static instance: Connections
  private connections = []
  private onAddListeners: Callback[] = []

  static init(peer?: Peer) {
    if (!Connections.instance) {
      Connections.instance = new Connections()
    }
    return Connections.instance
  }

  add(socket: net.Socket) {
    Connections.instance.connections.push(socket)
    Connections.instance.onAddListeners.forEach(listener => listener(socket))
  }

  get() {
    return [...Connections.instance.connections]
  }

  onAddListener(callback) {
    Connections.instance.onAddListeners.push(callback)
  }
}