import React, { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // Proses login di sini
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <form onSubmit={handleLogin}>
      <h4>Login</h4>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Masukan Email kamu disini
        </label>
        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={email} onChange={handleEmailChange} />
        <div id="emailHelp" className="form-text">
          Kami tidak akan membagikan email Anda kepada siapa pun.
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Kata Sandi
        </label>
        <input type="password" className="form-control" id="exampleInputPassword1" value={password} onChange={handlePasswordChange} />
      </div>
      <div className="mb-3 form-check">
        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
        <label className="form-check-label" htmlFor="exampleCheck1">
          Ingat Saya
        </label>
      </div>
      <button type="submit" className="btn btn-primary">
        Login
      </button>
    </form>
  );
}
