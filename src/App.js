import Global from "./styles/global";
import Header from "./components/header";
import Resume from "./components/resume";
import Form from "./components/form";
import React from "react";

export default function App() {
    return(
        <>
            <Header/>
            <Resume/>
            <Form/>
            <Global/>
        </>
    )
}