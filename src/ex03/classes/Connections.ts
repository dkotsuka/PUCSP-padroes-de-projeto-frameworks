import * as net from 'net'
import { Peer } from './Peer'

type Callback = (socket: net.Socket) => void;

export class Connections {
  private static instance: Connections
  private connections = {}
  private onAddListeners: Callback[] = []
  private server: net.Server

  static init() {
    if (!Connections.instance) {
      Connections.instance = new Connections()
    }
    return Connections.instance
  }

  add(socket: net.Socket) {
    const { address, port }: any = socket.address()
    if (address && port) {
      Connections.instance.connections[`${address}:${port}`] = socket
      Connections.instance.onAddListeners.forEach(listener => listener(socket))
    }
  }

  getAll() {
    return Object.assign({}, this.connections)
  }

  getOne(address: string): net.Socket {
    return this.connections[address]
  }

  setServer(server: net.Server) {
    this.server = server
  }

  getServer() {
    return this.server
  }

  getAddresses() {
    return Object.keys(this.connections)
  }

  onAddListener(callback) {
    Connections.instance.onAddListeners.push(callback)
  }

  static getStringAddress(socket: net.Socket) {
    const { address, port }: any = socket.address()
    return `${address}:${port}`
  }
}