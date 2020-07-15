class MessagingService {
  onMessageListener = []
  connect(onMessage: (message) => void) {
    this.onMessageListener.push(onMessage)
  }

  messageTest() {
    this.onMessageListener.forEach(fn => fn(`{
      "host": "http://localhost/",
      "port": 3000,
      "username": "message",
      "password": "password",
      "dbname": "database"
    }`))
  }
}

export const messagingService = new MessagingService()