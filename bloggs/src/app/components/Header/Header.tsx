import s from "./Header.module.css"
import NavMenu from "@/app/components/Header/NavMenu/NavMenu";


export default function Header() {
    return (
        <div className={s.header}>
            <h1 className={""}>Bloggers platform</h1>
            <NavMenu />
        </div>
    )
}
