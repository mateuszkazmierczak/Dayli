import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContext";

function LoginForm() {
    const [pass, setPass] = useState({ username: "", password: "" });
    const { login } = useAuth();

    const handleChange = (event) => {
        const { name, value } = event.target;
        setPass((prevPass) => ({ ...prevPass, [name]: value }));
    };

    async function handleSubmit(event) {
        event.preventDefault()
        const { username, password } = pass
        console.log(username, password)

        const response = await fetch('/api/user/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });
        if (response.ok) {
            const data = await response.text();
            const jwtToken = data;
            login(jwtToken)
            console.log("JWT Token:", jwtToken);
            setPass({ username: "", password: "" });
        } else {
            console.error('register failed');
        }
    };

    return (
        <form className="login--form" onSubmit={handleSubmit}>
            <div className="inputWrapper">
                <div>
                    <input
                        type="text"
                        id="username"
                        className="Login--username login--input"
                        name="username"
                        autoComplete="username"
                        required
                        value={pass.username}
                        onChange={handleChange}
                    />
                    <label htmlFor="username" className="username--label login--label">
                        Username
                    </label>
                </div>
                <div>
                    <input
                        type="password"
                        id="password"
                        className="Login--password login--input"
                        name="password"
                        autoComplete="current-password"
                        required
                        value={pass.password}
                        onChange={handleChange}
                    />
                    <label htmlFor="password" className="password--label login--label">
                        Password
                    </label>
                </div>
            </div>
            <button type="submit" className="login--submit">
                Log in
            </button>
        </form>
    );
}

export default LoginForm;