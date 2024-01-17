import s from "./NavMenu.module.css"
import NavItem from "@/app/components/Header/NavMenu/NavItem/NavItem";

export default function NavMenu(props:any) {
    return (
        <nav className={s.nav}>
            <NavItem link={"/blogs"} name={"Blogs"}/>
            <NavItem link={"/posts"} name={"Posts"}/>
        </nav>
    )
}
