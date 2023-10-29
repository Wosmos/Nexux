'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { axios } from 'axios';
import '../signup/signup.css';

const LoginPage = () => {
  const [user, setuser] = React.useState({
    email: '',
    password: '',
  });
  const onLogin = async () => {};
  return (
    <div className="center">
      <h1>Login</h1>

      <form method="post">
        <div className="txt_field">
          <input
            id="email"
            type="email"
            value={user.email}
            onChange={(e) => setuser({ ...user, email: e.target.value })}
            required
          />
          <span></span>
          <label htmlFor="email">Email</label>
        </div>

        <div className="txt_field">
          <input
            id="password"
            type="password"
            value={user.password}
            onChange={(e) => setuser({ ...user, password: e.target.value })}
            required
          />
          <span></span>
          <label htmlFor="password">Password</label>
        </div>

        <button className="submit" onClick={onLogin}>
          Login Here
        </button>
        <div className="signup_link">
          Already a member? <Link href="/Signup">Signup</Link>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
