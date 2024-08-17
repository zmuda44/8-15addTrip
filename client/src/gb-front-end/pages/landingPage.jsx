import { useState, useEffect } from "react";
import Signup from "../../components/SignupForm/signupForm";
import Login from "../../components/LoginForm/loginForm";

function LandingPage() {
  return (
    <div>
      <div>
        <h1>Welcome to Nomad Notes</h1>
        <p>Your Gateway to the World!</p>
        <p> Creating memories one trip at a time</p>
        <p>Login or Sign up to connect with friends.</p>
        <p>Share travel plans, tips, and advice. </p>
        <p>Where's the best spot to stay? What was the cost of lunch? </p>
      </div>
      <Login />
      <Signup />
    </div>
  );
}

export default LandingPage;
