'use client'
import Main from "@/app/components/Main/Main";
import {BrowserRouter} from "react-router-dom";
import Header from "@/app/components/Header/Header";


export default function Home() {
  return (
      <BrowserRouter>
          <Header/>
          <Main/>
      </BrowserRouter>
  )
}
