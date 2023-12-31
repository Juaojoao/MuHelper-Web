import React, { useEffect, useState } from 'react';
import { InputShared, ButtonShared, UseRequest } from '../../../shared';
import '../styles/style.css';
import { getAutorizationToken } from '../../../shared/functions/connection/auth';
import { useNavigate } from 'react-router-dom';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { authRequest, loading } = UseRequest();
  const navigate = useNavigate();

  useEffect(() => {
    const token = getAutorizationToken();
    if (token) {
      navigate('/dashboard');
    }
  }, [navigate]);

  const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleForm = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await authRequest({ email, password });
  };

  return (
    <main className="form-signin" onSubmit={handleForm}>
      <form className="form">
        <img src="public\images\logo.png" alt="logo" width={120} height={60} />
        <h1>Admin Panel</h1>

        <InputShared name={'user'} type={'text'} placeholder={'Email'} onChange={handleEmail} />

        <InputShared
          name={'password'}
          type={'password'}
          placeholder={'Password'}
          onChange={handlePassword}
        />

        <ButtonShared loading={loading} htmlType="submit">
          Login
        </ButtonShared>
      </form>
    </main>
  );
};

export default LoginScreen;
