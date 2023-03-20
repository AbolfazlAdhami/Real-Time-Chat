import React, { useState } from "react";
import Wrapper from "../../../HOC/Wrapper";
import { object, string } from "yup";
import { Link, useNavigate } from "react-router-dom";
import "./Login.scss";
import { toast } from "react-toastify";

import { auth } from "../../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  // Inputes Variables
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  // Validition User on Schema and return errores or  return null
  const validation = async (obj) => {
    let userSchema = object({
      email: string().required("You Must be Enter a EmailAddress"),
      password: string().required("You Must be Enter a Password "),
    });
    try {
      await userSchema.validate(obj, { abortEarly: false });
    } catch (error) {
      return error.errors;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = {
      email: email,
      password: password,
    };

    const validate = await validation(user);

    if (validate != null) {
      validate.map((message) => {
        toast.error(message, {
          position: "top-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      });

      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success("User Successfully Logde In", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      navigate("/");
    } catch (err) {
      console.dir(err);

      toast.error("User Not Found", {
        position: "top-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
    setEmail("");
    setPassword("");
  };

  return (
    <Wrapper>
      <div className="login">
        <div className="form">
          <h1 className="title">Login Form</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <input type="text" className="input" id="email" autoComplete="off" value={email} onChange={(e) => setEmail(e.target.value)} />
            <label htmlFor="password">Password</label>
            <input type="password" id="password" autoComplete="off" value={password} onChange={(e) => setPassword(e.target.value)} onPaste={(e) => e.preventDefault()} />
            <button type="submit" className="btn-submit">
              Login
            </button>
          </form>
          <h3>
            If you already have any active account, <Link to="/singin">Singin</Link>
          </h3>
        </div>
      </div>
    </Wrapper>
  );
};

export default Login;
