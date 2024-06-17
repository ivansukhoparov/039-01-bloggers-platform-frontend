import {addMainFooter} from "./footer.js";
import {addMainNav} from "./nav.js";
import {addMainHeader} from "./header.js";

const SPRINT_NUMBER = 1
const HW_NUMBER = 1

const mainNavItems = [
    ["Home", "index.html"],
    ["FAQ", "help.html"],
    ["Videos", "videos.html"],

]

const renderComponents = ()=>{
    addMainHeader(SPRINT_NUMBER,HW_NUMBER)
    addMainNav(mainNavItems)
    addMainFooter()
}

renderComponents()