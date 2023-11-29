// Login.js

import React, { useState } from 'react';

export const Login = () => {
  const [loginName, setLoginName] = useState('');
  const [loginPwd, setLoginPwd] = useState('');

  const handleLogin = () => {
    console.log('Login Name:', loginName);
    console.log('Login Password:', loginPwd);
  };

  return (
    <div className="login-container" style={{width:"50%",margin:'auto'}}>
      <h2>Login</h2>
      <div className="input-container">
        <label>Login Name:</label>
        <input
          type="text"
          value={loginName}
          onChange={(e) => setLoginName(e.target.value)}
        />
      </div>
      <div className="input-container" style={{marginBottom:'5px'}}>
        <label>Password:</label>
        <input
          type="password"
          value={loginPwd}
          onChange={(e) => setLoginPwd(e.target.value)}
        />
      </div>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

