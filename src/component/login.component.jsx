import React, { useState, useEffect } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    // componentDidMount
    console.log("Component did mount");

    return () => {
      // componentWillUnmount
      console.log("Component will unmount");
    };
  }, []);

  useEffect(() => {
    // componentDidUpdate
    console.log("Component did update");
  }, [email, password]);

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === "") {
      alert("email tidak boleh kosong");
    }
    if (password === "") {
      alert("password tidak boleh kosong");
    }
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
        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={email} onChange={(e) => handleEmailChange(e)} />
        <div id="emailHelp" className="form-text">
          Kami tidak akan membagikan email Anda kepada siapa pun.
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Kata Sandi
        </label>
        <input type="password" className="form-control" id="exampleInputPassword1" value={password} onChange={(e) => handlePasswordChange(e)} />
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
