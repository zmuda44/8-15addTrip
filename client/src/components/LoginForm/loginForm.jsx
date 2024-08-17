import { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { useMutation } from '@apollo/client';
// import { LOGIN_USER } from '../utils/mutations';

// import Auth from '../utils/auth';

const Login = (props) => {
  const [userFormState, setFormState] = useState({ email: '', password: '' });
  // const [login, { error, data }] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...userFormState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(userFormState);
    // try {
    //   const { data } = await login({
    //     variables: { ...formState },
    //   });

    //   Auth.login(data.login.token);
    // } catch (e) {
    //   console.error(e);
    // }

    // clear form values
    setFormState({
      email: '',
      password: '',
    });
  };

  return (
    <div>
      <div>
        <div>
          <h4>Login</h4>
          <div>

              <form onSubmit={handleFormSubmit}>
                <input                  
                  placeholder="Your email"
                  name="email"
                  type="email"
                  value={userFormState.email}
                  onChange={handleChange}
                />
                <input               
                  placeholder="******"
                  name="password"
                  type="password"
                  value={userFormState.password}
                  onChange={handleChange}
                />
                <input               
                  placeholder="******"
                  name="confirm-password"
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
  );
};

export default Login;


// {data ? (
//   <p>
//     Success! You may now head{' '}
//     <Link to="/">back to the homepage.</Link>
//   </p>
// ) : (


// )}




// {error && (
//   <div>
//     {error.message}
//   </div>
// )}
