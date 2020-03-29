import React, { useState } from 'react';

export default function Login(props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [usernameError, setusernameError] = useState(false);
    const [passwordError, setpasswordError] = useState(false);
    
    const handleChange = (input) => {
        console.log('event.target', input.target)
        let name = input.target.name;
        let value = input.target.value;

        switch (name) {
            case 'username' :
                value === 'gard' ? setusernameError(false) : setusernameError(true);
                setUsername(value);
                break;
            case 'password' :
                value === '123456' ? setpasswordError(false) : setpasswordError(true);
                setPassword(value);
                break;
            default:
                break;
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
        props.updateLoginStatus();
    } 
        return (

            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1>Login</h1>
                        <form onSubmit={handleSubmit}>
                            <p>Enter a username</p>
                            <input type='text'
                                name='username'
                                onChange={handleChange}
                                className="form-control"
                            />
                            <p className={(usernameError) ? 'error' : 'error__hide'}>Enter valid username</p>
                            <br />
                            <p>Enter a password</p>
                            <input type='password'
                                name='password'
                                onChange={handleChange}
                                className="form-control"
                            />
                            <p className={(passwordError) ? 'error' : 'error__hide'}>Enter valid password</p>
                            <br />
                            <input type="submit" className="btn" />
                        </form>
                    </div>
                </div>
            </div>
        );
    }
