export interface Payload {
  command: string
  args: string
}

const search = { "command": "search", "keywords": "music mp3", "destination": "100.22.11.25: 8888" }

const upload = { "command": "upload", "filename": "music.mp3", "content": "[byte array]" }

const execute = { "command": "execute", "script": "music.sh" }

const neighbors = { "command": "neighbors", "depth": 2, "destination": "90.12.50.21: 8975" }