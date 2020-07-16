import { ContainerElement, ContainerElementAttributes } from "../abstract/ContainerElement";
import { Element } from "../abstract/Element";

// ======== ITALIC ELEMENT =========

interface italicAttributes { }

class Italic extends ContainerElement<italicAttributes> {
  attributes = {};
  elementType = "i";
}

export function italic(el?: Element<any>) {
  return new Italic(el)
}

// ======== BOLD ELEMENT =========

interface boldAttributes { }

class Bold extends ContainerElement<boldAttributes> {
  attributes = {};
  elementType = "b"
}

export function bold(el?: Element<any>) {
  return new Bold(el)
}

// ======== ANCHOR ELEMENT =========

interface anchorAttributes {
  href?: string
}

class Anchor extends ContainerElement<anchorAttributes> {
  attributes = {}
  elementType = "a"
}

export function a(el?: Element<any>) {
  return new Anchor(el)
}