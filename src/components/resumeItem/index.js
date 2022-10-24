import React from "react";
import * as C from "./styles";

export default function ResumeItem({title, Icon}) {
    return(
        <C.constainer>
            <C.header>
                <C.headerTitle>{title}</C.headerTitle>
                <Icon/>
            </C.header>
            <C.total>1000</C.total>
        </C.constainer>
    )
}