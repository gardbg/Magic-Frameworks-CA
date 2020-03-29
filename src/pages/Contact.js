import React, { useState } from 'react';

export default function Contact() {
    const [firstnameError, setfirstnameError] = useState(true);
    const [lastnameError, setlastnameError] = useState(true);
    const [emailError, setemailError] = useState(true);
    const [messageError, setmessageError] = useState(true);
    // eslint-disable-next-line
    const [name, setName] = useState(true);

    const handleChange = (input) => {
        let name = input.target.name;
        let value = input.target.value;
        // eslint-disable-next-line
        let emailPattern = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

        switch (name) {
            case 'firstname':
                value !== "" ? setfirstnameError(false) : setfirstnameError(true);
                break;
            case 'lastname':
                value !== "" ? setlastnameError(false) : setlastnameError(true);
                break;
            case 'email':
                emailPattern.test(value) ? setemailError(false) : setemailError(true);
                break;
            case 'message':
                value !== "" ? setmessageError(false) : setmessageError(true);
                break;
            default:
                break;
        }
        setName(value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();

    }
    return (
        <div className="row row-contactform">
            <div className="col-md-12">
                <h2>Contact Form</h2>
                <form onSubmit={handleSubmit}>
                    <p>Enter your firstname</p>
                    <input type='text'
                        name='firstname'
                        onChange={handleChange}
                        className="form-control"
                        placeholder="John..."
                    />
                    <p className={(firstnameError) ? 'error' : 'error__hide'}>Please enter a firstName</p>
                    <br />
                    <p>Enter your lastname</p>
                    <input type='text'
                        name='lastname'
                        onChange={handleChange}
                        className="form-control"
                        placeholder="Doe..."
                    />
                    <p className={(lastnameError) ? 'error' : 'error__hide'}>Error on Lastname</p>
                    <br />
                    <p>Enter your email address</p>
                    <input type='text'
                        name='email'
                        onChange={handleChange}
                        className="form-control"
                        placeholder="johndoe@gmail.com..."
                    />
                    <p className={(emailError) ? 'error' : 'error__hide'}>Error on Email</p>
                    <br />
                    <p>Enter your message</p>
                    <textarea
                        name='message'
                        onChange={handleChange}
                        className="form-control"
                        placeholder="Please enter a message..."
                    />
                    <p className={(messageError) ? 'error' : 'error__hide'}>Error on message</p>
                    <br />
                    <input type="submit" disabled={firstnameError || lastnameError || emailError || messageError} className="btn btn-dark" />
                </form>
            </div>
        </div>
    )
}
