import React, { useState } from "react";
import Wrapper from "../../../HOC/Wrapper";
import { Link, useNavigate } from "react-router-dom";
import { object, string } from "yup";

import { toast } from "react-toastify";
import avatar from "../../../Asset/Image/addAvatar.png";
import Useravatar from "../../../Asset/Image/avatar.png";
import "./singin.scss";
// FireBase Requirment
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { auth, storage, db } from "../../../firebase";
import { doc, setDoc } from "firebase/firestore";
// FireBase Requirment

const Singin = () => {
  // Inputes Variables
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  // Inputes Variables

  const [error, setError] = useState(false);
  const navigate = useNavigate();

  // Validition User on Schema and return errores or  return null
  const validation = async (obj) => {
    let userSchema = object({
      UserName: string().required("must be  Enter a UserName"),
      email: string().email("Invalid Email Format").required("You Must be Enter a EmailAddress"),
      password: string().required("You Must be Enter a Password ").min(6, "Password Must be at least 6 Characters"),
    });
    try {
      await userSchema.validate(obj, { abortEarly: false });
    } catch (error) {
      return error.errors;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Validition User on Schema
    let file = e.target[3].files[0];
    file = file == "" ? "" + Useravatar : file;

    const user = {
      UserName: userName,
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

    ////// if Inputes are correct Auth is countunued  ////

    // Send response to firebase for create Account
    const res = await createUserWithEmailAndPassword(auth, email, password);

    const storageRef = ref(storage, userName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            break;
          case "running":
            break;
        }
      },
      (error) => {
        setError(true);
      },

      () => {
        getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
          await updateProfile(res.user, {
            displayName: userName,
            photoURL: downloadURL,
          });

          await setDoc(doc(db, "user", res.user.uid), {
            uid: res.user.uid,
            displayName: userName,
            email,
            photoURL: downloadURL,
          });

          await setDoc(doc(db, "userChat", res.user.uid), {});
        });
        navigate("/");
        toast.success("User Successfully Created", {
          position: "top-bottom",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });

        setEmail("");
        setPassword("");
        setUserName("");
      },
    );
  };

  return (
    <Wrapper>
      <div className="singin">
        <div className="form">
          <h1 className="title">Singin Form</h1>
          <form onSubmit={handleSubmit}>
            {/* Email Input */}

            <label htmlFor="email">Email</label>
            <input type="text" className="input" id="email" autoComplete="off" value={email} onChange={(e) => setEmail(e.target.value)} />

            {/* UserName Input */}
            <label htmlFor="username">UserName</label>
            <input type="text" id="username" className="input" autoComplete="off" value={userName} onChange={(e) => setUserName(e.target.value)} />

            {/* Passwords Input */}

            <label htmlFor="password">Password</label>
            <input type="password" id="password" autoComplete="off" value={password} onChange={(e) => setPassword(e.target.value)} />

            {/* Files Input */}

            <input type="file" id="file" />
            <label htmlFor="file" className="file">
              <img src={avatar} alt="" className="avatar" /> Add Avatar
            </label>
            <button type="submit" className="btn-submit">
              Sing Up
            </button>
            {error ? <span>We Have Somthing Error</span> : null}
          </form>
          <h3>
            If you already have an active account, <Link to="/login">log in</Link>
          </h3>
        </div>
      </div>
    </Wrapper>
  );
};

export default Singin;
