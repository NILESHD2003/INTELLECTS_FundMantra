import React from 'react'
import Form_group from '../Components/Form-group'
import { Link } from 'react-router-dom'

const Login = ({handleLogin}) => {
  return (
    <div className='login'>
      <div className="form">
      <h1>login</h1>
     
      <Form_group username={"Username"} type={"text"} placeholder={"Enter Your Username"}></Form_group>
      <Form_group username={"Password"} type={"text"} placeholder={"Enter Your Password"}></Form_group>
<button onClick={handleLogin}>Log-in</button>
      <Link  to="/signup">Sign-up</Link>
      </div>
    </div>
  )
}

export default Login
