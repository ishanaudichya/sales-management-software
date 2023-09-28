import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';

// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

import logo from '../au.png'

const Login = ({setIsAuthenticated}) => {

    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    

    const handleSubmit = (e) =>{
        if (username==='admin' && password==='password123') {
          setIsAuthenticated(true);
          navigate("/");
          
        }

        else{
            
        }
      }
  
  return (
    <div className="login-page">
  <div className="card">
  <img draggable="false" src={logo} alt="Img" className="alogo"/>
      <input
        value={username}
        type="text"
        name="username"
        placeholder="Username"
        className="input"
        onChange={(e) => setUsername(e.target.value)}
      />
      <input  
        type="password"
        value={password}
        name="secret"
        placeholder="Password"
        className="input"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSubmit} className="button">LOG IN</button>
        {/* <ToastContainer/> */}
      <div className='password' >Username is <i><b>admin</b></i>, password is <b><i>password123</i></b> </div>
  </div>
  <style>{`
  .login-page {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background: linear-gradient(to right, #080c14,#111728, #080c14);
  display: flex;
  justify-content: center;
  align-items: center;
}
.alogo {
  width: 100%;
  object-fit: cover;
  padding: 10px 10px 50px 10px;
}
.password{
  color:#fff;
  padding: 10px;
}
.card {
  width: 400px;
  text-align: center;
  padding: 20px;
  background-color: #030303; /* Updated color */
  border-radius: 10px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.3);
  padding-bottom: 30px;
}

.input {
  width: 90%;
  margin-top: 12px;
  padding: 10px;
  background-color: #d2dcff; /* Updated color */
  border: none;
  border-radius: 4px;
  outline: none;
  padding-right: 16px; /* Added right padding */
}

.button {
  margin-top: 16px;
  width: 97%;
  padding: 10px;
  background-color: #273b9d;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 600;
}

  `}</style>
</div>
  
  )
}

export default Login