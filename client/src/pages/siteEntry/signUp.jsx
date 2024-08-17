
import { useState } from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../../utils/mutations';
import Auth from '../../utils/auth';
import './siteEntry.css';



const SignUp = () => {
    const [userFormState, setFormState] = useState({
        username: '',
        email: '',
        password: '',
    });

    const [addUser, { error, data }] = useMutation(ADD_USER);

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

        const {username, email, password} = userFormState;

      

        const { data } = await addUser({
            variables: { username, email, password },
          });
        console.log(data);
          Auth.login(data.addUser.token);

            // Auth.login(data.addUser.token, data.addUser.user);
        } catch (e) {
            console.error(e);
        }
    };
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <Header />
            <div style={{ textAlign: 'center' }}>
                <div>
                    <div>
                        <div>
                            <h4>Sign Up</h4>
                            <div>

                                <form onSubmit={handleFormSubmit}>
                                    <input
                                        className="form-input"
                                        placeholder="Your username"
                                        name="username"
                                        type="text"
                                        value={userFormState.username}
                                        onChange={handleChange}
                                    />
                                    <input
                                        className="form-input"
                                        placeholder="Your email"
                                        name="email"
                                        type="email"
                                        value={userFormState.email}
                                        onChange={handleChange}
                                    />
                                    <input
                                        className="form-input"
                                        placeholder="******"
                                        name="password"
                                        type="password"
                                        value={userFormState.password}
                                        onChange={handleChange}
                                    />
                                    <button
                                        style={{ cursor: 'pointer' }}
                                        type="submit"
                                    >
                                        Submit
                                    </button>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default SignUp;

