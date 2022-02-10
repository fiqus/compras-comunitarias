import React from 'react';
import { useRecoilState } from 'recoil';

import '../css/Login.css'


function Login() {
    const [username, setUsername] = useRecoilState(usernameState)
    const [password, setPassword] = useRecoilState(passwordState)

    const handleSubmit = async() => {
        const res = await httpPost(
            "/user/login", 
            {"username": username, "password": password}, 
        );

        console.log(res)
    };

    return (
        <div className="login-container">
            <div className="login-header">
                <div className="login-header-subtitle"> Bienvenido a </div>
                <div className="login-header-title"> Compras Comunitarias</div>
            </div>
            <div className="login-form">
                <div>
                    <input type="text" value={username} onChange={(event) => setUsername(event.target.value)} placeholder="ingresar nombre de usuario"/>
                </div>

                <div>
                    <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} placeholder="ingresar contraseña"/>
                </div>
                    
                <div>
                    <button type="submit" onClick={handleSubmit}>Ingresar</button>
                </div>
            </div>
            <div className="login-footer">
                <div> ¿Todavía no tenes un usuario? </div>
                <div id="register-link"> Registrate acá </div>
            </div>
        </div>
    )
};

export default Login;