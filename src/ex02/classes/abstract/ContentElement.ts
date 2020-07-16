import { Element, ElementAttributes } from "./Element";

export interface ContentElementAttributes<T> {
  id?: string
  class?: string
}

export abstract class ContentElement<T> extends Element<T> {
  content: string = ""

  constructor(content?: string) {
    super()
    this.content = content
  }

  public addContent(content: string) {
    this.content.concat(content)
    return this
  }

  public toHTML() {
    return `<${this.elementType}${this.parseAttrs()}>${this.content}</${this.elementType}>`
  }
}