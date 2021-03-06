import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

function Login() {

    const [ passwordShow, setPasswordShow ] = useState(false);

    return (
        <div className="login__txtb">
            <div>
                <input 
                    className="login__input"
                    name="email"
                    autoComplete="off"
                    required
                /> 
                <label for="email" className="label-name">
                    <span className="content-name">Email</span>
                </label>
            </div>

            <div>
                <div className="password-icon">
                    <FontAwesomeIcon 
                        icon={passwordShow ? faEyeSlash : faEye} 
                        onClick={() => setPasswordShow(passwordShow => !passwordShow)} 
                    />
                </div>
                <input 
                    className="login__input"
                    type={passwordShow ? "text" : "password"}
                    name="password"
                    autoComplete="off"
                    required
                />
                <label for="password" className="label-name">
                    <span className="content-name">
                        Password
                    </span>
                </label>
            </div>

            <button type="submit">
                <Link to="/" style={{color: "#fff"}}>
                    <FontAwesomeIcon icon={faArrowRight} />
                </Link>
            </button>
        </div>
    )
};

export default Login;
