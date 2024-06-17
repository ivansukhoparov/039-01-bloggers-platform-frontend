import {addMainFooter} from "./components/footer";
import {addMainNav} from "./components/nav";
import {addMainHeader} from "./components/header";

const SPRINT_NUMBER = 1
const HW_NUMBER = 1

const mainNavItems = [
    ["Home", "index.html"],
    ["Videos", "videos.html"]
]

const renderComponents = ()=>{
    addMainHeader()
    addMainNav()
    addMainFooter()
}

renderComponents()