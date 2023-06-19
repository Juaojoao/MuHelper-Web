import React, { useState } from "react";
import { InputShared, ButtonShared, UseRequest } from "../../../shared";
import '../styles/style.css'

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {postRequest} = UseRequest();

  const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  }

  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    postRequest('http://localhost:1000/auth', {email, password})
  }

  return (
    <main className="form-signin" onSubmit={handleSubmit}>
      <form className="form">
        <img src="public\images\logo.png" alt="logo" width={120} height={60}/>
        <h1>Admin Panel</h1>

        <InputShared 
          name={"user"} 
          type={"text"} 
          placeholder={"Email"}
          onChange={handleEmail}
        /> 

        <InputShared 
          name={"password"} 
          type={"password"} 
          placeholder={"Password"} 
          onChange={handlePassword}
        />

        <ButtonShared value={"Login"} />

      </form>
    </main>
  )
};

export default LoginScreen;
 