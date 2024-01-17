import s from "./NavItem.module.css"
import {NavLink} from "react-router-dom";

export default function NavItem(props:any) {
    return (
        <NavLink to={props.link} className={s.item}>{props.name}</NavLink>
    )
}
