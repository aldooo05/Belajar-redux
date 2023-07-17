import React, { useState } from "react";
import "./App.css";
import LoginPage from "./component/login.component";
import RegisterPage from "./component/register.component";
import "bootstrap/dist/css/bootstrap.css";
import NewsPage from "./component/news.component";

function App() {
  const [isRegister, setIsRegister] = useState(false);

  const handleRegister = () => {
    setIsRegister(!isRegister);
  };

  return (
    <div className="App">
      <div>
        <div className="container" style={{ marginTop: "300px" }}>
          {isRegister ? <LoginPage /> : <NewsPage />}
          <span onClick={handleRegister}>Tidak punya akun? Buat disini</span>
        </div>
      </div>
    </div>
  );
}

export default App;
