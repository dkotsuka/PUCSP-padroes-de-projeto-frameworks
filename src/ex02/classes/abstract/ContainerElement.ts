import { Element, ElementAttributes } from "./Element";

export interface ContainerElementAttributes<T> { }

export abstract class ContainerElement<T> extends Element<T> {

  private children: Element<ContainerElementAttributes<T>>[] = []

  constructor(child?: Element<ContainerElementAttributes<T>>) {
    super()
    child && this.children.push(child)
  }

  public addElement(element: Element<ContainerElementAttributes<T>>) {
    this.children.push(element)
    return this
  }

  public toHTML() {
    return `<${this.elementType}${this.parseAttrs()}>${this.renderChild()}</${this.elementType}>`
  }

  protected renderChild() {
    return this.children.map(child => child.toHTML()).join("")
  }
}