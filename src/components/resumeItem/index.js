import React from "react";
import * as C from "./styles";

export default function ResumeItem({title, Icon, value}) {
    return(
        <C.constainer>
            <C.header>
                <C.headerTitle>{title}</C.headerTitle>
                <Icon/>
            </C.header>
            <C.total>{value}</C.total>
        </C.constainer>
    )
}