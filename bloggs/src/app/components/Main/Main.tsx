

import Blogs from "@/app/components/Main/Blogs/Blogs";
import s from "./Main.module.css"
import {Route, Routes} from "react-router-dom";
import Posts from "@/app/components/Main/Posts/Posts";
import React from "react";


const Main =()=>{
    return (
    <main className={s.page}>
            <Routes>
                <Route path="/blogs" Component={Blogs}/>
                <Route path="/posts" Component={Posts}/>
            </Routes>
    </main>
    )
}

export default Main;
