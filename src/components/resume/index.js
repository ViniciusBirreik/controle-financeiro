import * as C from "./styles";
import ResumeItem from "../resumeItem";
import React from "react";
import { FaRegArrowAltCircleUp, FaRegArrowAltCircleDown, FaDollarSign } from "react-icons/fa"

export default function Resume() {
    return(
        <C.container>
            <ResumeItem title="entradas" Icon={FaRegArrowAltCircleUp} value="1000"/>
            <ResumeItem title="saidas" Icon={FaRegArrowAltCircleDown} value="1000"/>
            <ResumeItem title="total" Icon={FaDollarSign} value="1000"/>
        </C.container>
    )
}