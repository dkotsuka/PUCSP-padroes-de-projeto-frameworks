import { ContentElement, ContentElementAttributes } from "../abstract/ContentElement";

// ======== SPAN ELEMENT =========

interface spanAttributes { }

class Span extends ContentElement<spanAttributes> {
  attributes = {};
  elementType = "span";
}

export function span(content?: string) {
  return new Span(content)
}

// ======== PARAGRAPH ELEMENT =========

interface paragraphAttributes { }

class Paragraph extends ContentElement<paragraphAttributes> {
  attributes = {};
  elementType = "p";
}

export function p(content?: string) {
  return new Paragraph(content)
}