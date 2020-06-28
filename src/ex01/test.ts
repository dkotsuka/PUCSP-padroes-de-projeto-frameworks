import { connectionConfig } from "./connection.config";

test('adds 1 + 2 to equal 3', () => {
  connectionConfig.setHost("http://localhost")
  connectionConfig.setPort(3000)
  expect(connectionConfig.get())
    .toEqual({
      host: "http://localhost",
      port: 3000,
      user: null,
      password: null,
      database: null
    });
});