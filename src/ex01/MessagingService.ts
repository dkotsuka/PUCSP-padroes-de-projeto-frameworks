export class MessagingService {
  static connect(queue: string, onMessage: (queue, message) => void) {
    setTimeout(() => {
      onMessage(queue, "message")
    }, 10000)
  }
}