import React, { useState, useEffect } from "react";
import Global from "./styles/global";
import Header from "./components/header";
import Resume from "./components/resume";
import Form from "./components/form";

export default function App() {
    const data = localStorage.getItem('transactions');
    const [transactionsList, setTransactionsList] = useState(
        data ? JSON.parse(data) : []
    );
    const [income, setIncome] = useState(0);
    const [expense, setExpense] = useState(0);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        const amountExpense = transactionsList
            .filter((item) => item.expense)
            .map((transactions) => Number(transactions.amount));
        const amountIncome = transactionsList
            .filter((item) => !item.expense)
            .map((transactions) => Number(transactions.amount));
        const expense = amountExpense.reduce((acc, cur) => acc + cur, 0).toFixed(2);
        const income = amountIncome.reduce((acc, cur) => acc + cur, 0).toFixed(2);

        const total = Math.abs(income - expense).toFixed(2);

        setIncome(`${income}`);
        setExpense(`${expense}`);
        setTotal(`${Number(income) < Number(expense) ? "-" : ""} R$ ${total}`);
    },[transactionsList]);

    return(
        <>
            <Header/>
            <Resume income={income} expense={expense} total={total}/>
            <Form/>
            <Global/>
        </>
    )
}