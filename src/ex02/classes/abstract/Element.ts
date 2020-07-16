// negrito(italico(span(“meu texto estiloso!”)))
// negrito().addElement(italico).addElement(span().addContent(“meu texto estiloso!”))

export interface ElementAttributes<T> {

}

export abstract class Element<T> {

  protected abstract attributes: T

  protected abstract elementType: string

  public abstract toHTML(): string

  public addAttribute(attributes: T) {
    this.attributes = { ...this.attributes, ...attributes }
    return this
  }

  protected parseAttrs() {
    const keys = Object.keys(this.attributes)
    const attributes = keys.map(key => `${key}="${this.attributes[key]}"`).join(" ")
    return !Boolean(attributes.length) ? "" : " " + attributes
  }
}