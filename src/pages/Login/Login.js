import React, { useState, useEffect } from 'react';
import './css/login.css'
const data = {
    profils: [
        {
            username: "BzZzz🐝💖",
            email: "taamallahshiraz@gmail.com",
            password: "password"
        },
        {
            username: "Yopi",
            email: "mathieu@souflis.fr",
            password: "password"
        },
        {
            username: "Thvsxndmly",
            email: "gecori1648@anlubi.com",
            password: "dontlie11"
        },
    ]
}

//en gros y a une fonction maman qui englobe le plus gros et qui return du JSX (HTML)
const LogIn = () => {

    const [usersData, setUsersData] = useState()

    useEffect(() => {
        const response = fetch('/api', (res) => {
            return response = res.json()
        })
        setUsersData(response)
    })

    console.log(usersData)
    
    const [validity, setValidity] = useState(false)
    const [nameLogAs, setNameLogAs] = useState('')
    const [errorLogIn, setErrorLogIn] = useState(false)

    const submit = (e, email, password) => {
        console.log("a")
        const profils = data.profils
        for (let i = 0; i < profils.length; i++) {
            console.log(profils[i].username);
            if (profils[i].email === email && profils[i].password === password) {
                setErrorLogIn(false)
                setNameLogAs(profils[i].username)
                return setValidity(true)
            }
        }
        
        if(validity !== true) setErrorLogIn(true)
    }
    return (
        <div className="middle login">
            {validity === true
                ? <p>Bienvenue {nameLogAs} !</p>
                : <form className="b-box" onSubmit={(e) => {
                    e.preventDefault()
                    submit(e, e.target[0].value, e.target[1].value)
                }}>
                    <div className="top">
                        <input
                            type="text"
                            name="email"
                            id="email"
                            placeholder="Email"
                        />
                        <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Password"
                        />
                        {errorLogIn === true ? <p className="errorLogIn">Email or Password is wrong.</p> : null}
                    </div>
                    <input type="submit" value="Submit" />
                </form>}
        </div>

    )
}

export default LogIn;