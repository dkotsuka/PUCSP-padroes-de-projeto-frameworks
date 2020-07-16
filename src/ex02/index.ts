import { italic, bold, a } from "./classes/concrete/container-elements";
import { span, p } from "./classes/concrete/content-elements";

//<i><b><span class="banana">My awesome content!</span></b></i>
const element1 = italic(bold(span("My awesome content!").addAttribute({ class: "banana" }))).toHTML()
console.log(element1)

const element2 = a(span("My awesome content!").addAttribute({ class: "banana" })).addAttribute({ href: "url" }).toHTML()
console.log(element2)

a().addAttribute({ href: "url" })