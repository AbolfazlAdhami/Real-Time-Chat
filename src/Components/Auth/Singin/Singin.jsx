import React, { useState } from "react";
import "./singin.scss";
import Wrapper from "../../../HOC/Wrapper";
import avatar from "../../../Asset/Image/addAvatar.png";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { auth, storage, db } from "../../../firebase";
import { doc, setDoc } from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";
const Singin = () => {
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = e.target[0].value;
    const displayName = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].value;

    const res = await createUserWithEmailAndPassword(auth, email, password);

    const storageRef = ref(storage, displayName);

    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
        }
      },
      (error) => {
        setError(true);
      },

      () => {
        getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
          console.log("File available at", downloadURL);
          await updateProfile(res.user, {
            displayName: displayName,
            photoURL: downloadURL,
          });

          await setDoc(doc(db, "user", res.user.uid), {
            uid: res.user.uid,
            displayName,
            email,
            photoURL: downloadURL,
          });
          await setDoc(doc(db, "userChat", res.user.uid), {});
        });
        navigate("/");
      },
    );
  };

  return (
    <Wrapper>
      <div className="singin">
        <div className="form">
          <h1 className="title">Singin Form</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <input type="text" className="input" id="email" autoComplete="off" />
            <label htmlFor="username">UserName</label>
            <input type="text" id="username" className="input" autoComplete="off" />
            <label htmlFor="password">Password</label>
            <input type="password" id="password" autoComplete="off" />
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
