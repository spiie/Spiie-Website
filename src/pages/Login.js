import React, { useState } from 'react';
import '../assets/css/login.css'
const data = {
    profils: [
        {
            username: "Test",
            email: "test@test.fr",
            password: "password"
        },
        {
            username: "Yopi",
            email: "mathieu@souflis.fr",
            password: "password"
        },
    ]
}
const LogIn = () => {
    const [validity, setValidity] = useState(false)
    const [nameLogAs, setNameLogAs] = useState('')


    const submit = (e, email, password) => {
        console.log("a")
        const profils = data.profils
        for (let i = 0; i < profils.length; i++) {
            console.log(profils[i].username);
            if (profils[i].email === email && profils[i].password === password) {
                return setNameLogAs(profils[i].username), setValidity(true)
            }
        }
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
                    </div>
                    <input type="submit" value="Submit" />
                </form>}
        </div>

    )
}

export default LogIn;