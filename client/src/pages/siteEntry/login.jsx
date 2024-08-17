import React from 'react';
import Footer from '../../components/footer';
import './siteEntry.css';
import baobabs from '../../assets/baobabs.png';
import { useState } from 'react';
import Auth from '../../utils/auth';

import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../../utils/mutations';

function Login() {
    const [userFormState, setFormState] = useState({
        username: '',
        password: '',
    });

    const [loginUser, { error, data }] = useMutation(LOGIN_USER);

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormState({
            ...userFormState,
            [name]: value,
        });
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();


        try {

        const {username, password} = userFormState;

      console.log(username, password);

        const { data } = await loginUser({
            variables: { username, password },
          });
        console.log(data);
          Auth.login(data.loginUser.token);
        } catch (e) {
            console.error(e);
        }

        setFormState({
            username: '',
            password: '',
          });
    };

    return (
        <div>
            <img src={baobabs} alt="Baobabs" className="bg" />
            <div style={{ textAlign: 'center'}}>
                <h1 style={{ margin: '20px 0', paddingTop: '200px' }}>Welcome to Nomad Notes</h1>
                <p style={{ margin: '20px 0' }}>Your Gateway to the World</p>
                <div className="login-box" style={{ margin: '20px 0' }}>
                    <h2 style={{ margin: '20px 0' }}>Login</h2>
                    <form onSubmit={handleFormSubmit}>
                        <input 
                        type="text" 
                        placeholder="Username" 
                        name="username" 
                        required style={{ margin: '20px 0' }} 
                        value={userFormState.username}
                        onChange={handleChange}
                        />
                        <input 
                        type="password" 
                        placeholder="Password" 
                        name="password" 
                        required style={{ margin: '20px 0' }}
                        value={userFormState.password}
                        onChange={handleChange}                             
                        />
                        <button type="submit" style={{ margin: '20px 0' }}>Login</button>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Login;