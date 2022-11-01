import * as C from "./styles"
import React, { useState } from "react"

export default function Form() {
    const [desc, setDesc] = useState('')
    const [amount, setAmount] = useState('')
    const [expense, setExpense] = useState(false)

    const handleSave = () => {
        if(!desc || !amount) {
            alert('Informe um valor.');
            return;
        }else if(amount < 1) {
            alert('O valor precisa ser positivo');
            return;
        }
    };

    return(
        <>
            <C.container>
                <C.inputContent>
                    <C.label>Desrição</C.label>
                    <C.input value={desc} onChange={(e) => setDesc(e.target.value)}></C.input>
                </C.inputContent>
                <C.inputContent>
                    <C.label>Valor</C.label>
                    <C.input value={amount} onChange={(e) => setAmount(e.target.value)}></C.input>
                </C.inputContent>
                <C.radiosGroup>
                    <C.input type="radio" id="rIncome" defaultChecked name="group1" onChange={() => setExpense(!expense)}></C.input>
                    <C.label htmlFor="rIncome">Entrada</C.label>
                </C.radiosGroup>
                <C.radiosGroup>
                    <C.input type="radio" id="rExpense" name="group1" onChange={() => setExpense(!expense)}></C.input>
                    <C.label htmlFor="rExpense">Saída</C.label>
                </C.radiosGroup>
                <C.button onClick={handleSave()}>ADICIONAR</C.button>
            </C.container>
        </>
    )
}