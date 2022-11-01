import * as C from "./styles";
import ResumeItem from "../resumeItem";
import React from "react";
import { FaRegArrowAltCircleUp, FaRegArrowAltCircleDown, FaDollarSign } from "react-icons/fa"

    export default function Resume({income, expense, total}) {
    return(
        <C.container>
            <ResumeItem title="entradas" Icon={FaRegArrowAltCircleUp} value={income}/>
            <ResumeItem title="saidas" Icon={FaRegArrowAltCircleDown} value={expense}/>
            <ResumeItem title="total" Icon={FaDollarSign} value={total}/>
        </C.container>
    )
}