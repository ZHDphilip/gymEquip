import Link from 'next/link'
import { useState } from 'react'


export default function loginPage() {
  console.log("inside login page")

  const initialFormData = Object.freeze({
  usr_email: "",
  login_password: ""
  });

  const [formData, updateFormData] = React.useState(initialFormData);

  const handleChange = (e) => {
    updateFormData({
      ...formData,

      // Trimming any whitespace
      [e.target.name]: e.target.value.trim()
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData.usr_email);
    // ... submit to API or something
    fetch(
      "https://gymTracker.zihaodong.repl.co/api/writeToDatabase", 
      {
            method: 'POST', 
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              name: formData.usr_email,
              _id: "useless",
              likedBy: "useless",
              action: "login",
              password: formData.login_password,
            }),
      }
    )
  };

  return (
    <div>
      <h1>
        Sign in
        <button className="Home">
          <a href="..">
            Back
          </a>
        </button>
      </h1>
      <form id="login">
        <ul>
          Email:    <input className="inputStr" type="email" name="usr_email" placeholder="example@xxx.xxx" onChange={handleChange}/>
        </ul>
        <ul>
          Password: <input className="inputStr" type="password" name="login_password" 
          placeholder="8-digit" onChange={handleChange}/>
        </ul>
      </form>
      <button className="submitBtn" onClick={handleSubmit}>Log in</button>
      <style jsx> {`
        h1 {
          background: #3399ff;
          color: #ffffff;
        }
        .Home {
          background: #ffff00;
          position: absolute;
          top: 25px;
          right: 25px;
          width: 80px;
          height: 35px; 
        }
        .Home:hover{
          background: #3399ff;
        }
        .submitBtn {
          position: absolute;
          top: 165px;
          left: 50px;
        }
        a {
          color: #000000;
        }
      `}</style>
    </div>
  )
}