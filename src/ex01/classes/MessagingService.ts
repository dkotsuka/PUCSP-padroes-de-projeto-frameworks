export class MessagingService {
  static connect(queue: string, onMessage: (message) => void) {
    setTimeout(() => {
      onMessage(
        `{
        "host": "http://localhost/",
        "port": 3000,
        "username": "message",
        "password": "password",
        "dbname": "database"
      }`)
    }, 10000)
  }
}