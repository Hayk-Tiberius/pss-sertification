import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../tools/Header";
import { UserOutlined, CheckCircleOutlined } from "@ant-design/icons";
import { Input } from "antd";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:4242/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      const data = await response.json();

      console.log("STATUS:", response.status);
      console.log("RESPONSE:", data);

      if (!response.ok) {
        console.error("Ошибка авторизации:", data);
        return;
      }

      // Авторизация успешна → переходим на Admin
      navigate("/Admin");
    } catch (error) {
      console.error("Ошибка запроса:", error);
    }
  };

  return (
    <>
      <Header />
      <main className="main_section">
        <section className="login_section">
          <span>Панель Администратора</span>
          <form onSubmit={handleSubmit} className="login_form">
            <Input
              type="text"
              placeholder="Логин"
              prefix={<UserOutlined />}
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
            <br />
            <Input
              type="password"
              placeholder="Пароль"
              prefix={<CheckCircleOutlined />}
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            <br />
            <button
              style={{
                color: "white",
                cursor: "pointer",
                borderRadius: "1rem",
                width: "7vw",
                height: "3.7vh",
                background: "#111",
                border: "none",
              }}
              type="submit"
            >
              Войти
            </button>
          </form>
        </section>
      </main>
    </>
  );
};

export default Login;
