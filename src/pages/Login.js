import "../styles.css";
import React, { useState } from 'react';
import * as R from 'ramda';


const logIn = () => {

    return (
        <form className="b-box">
            <label>
                Username :
                <input
                    type="text"
                    name="username"
                    id="username"
                    placeholder="username"
                />
            </label>
            <label>
                Username :
                <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="password"
                />
            </label>
        </form>
    )
}

export default logIn;