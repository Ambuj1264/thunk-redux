import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import axios from 'axios';
import { toast } from 'react-toastify';

const Register = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [nameError, setNameError] = useState(false);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = () => {
    let isValid = true;

    if (!validateEmail(email)) {
      setEmailError(true);
      isValid = false;
    } else {
      setEmailError(false);
    }

    if (password.length < 6) {
      setPasswordError(true);
      isValid = false;
    } else {
      setPasswordError(false);
    }

    if (name.trim() === '') {
      setNameError(true);
      isValid = false;
    } else {
      setNameError(false);
    }

    return isValid;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      case 'name':
        setName(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    props.setProgress(0);

    if (validateForm()) {
      try {
        props.setProgress(20);
        const config = {
          method: 'post',
          url: 'http://localhost:5000/register',
          headers: {
            'Content-Type': 'application/json',
          },
          data: JSON.stringify({
            email,
            password,
            name,
          }),
        };

        const response = await axios(config);
        if(response.data.success){
          console.log(response.data);
          props.setProgress(100);
          toast.success('🦄 User is Register', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });
          setEmail('');
          setPassword('');
          setName('');
          props.setProgress(0);
        }else{

          props.setProgress(50);
          toast.error('🦄 User is not Created', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
        }
       
       
      } catch (error) {
      
        props.setProgress(50);
        toast.error('🦄 Something went Wrong', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          });
      
     
      }
    }
  };

  return (
    <>

    <div className="container-fuild my-5">
      <h3 style={{textAlign:"center"}}> Please Register </h3>
    </div>
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div style={{ border: '1px solid black',borderRadius:"9px" }}>
        <form
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            maxWidth: '500px',
            width: '100%',
            padding: '20px',
          }}
          onSubmit={handleSubmit}
        >
          <TextField
            label="Email"
            variant="outlined"
            name="email"
            value={email}
            onChange={handleChange}
            error={emailError}
            helperText={emailError ? 'Invalid email' : ''}
            style={{ marginBottom: '20px', width: '100%' }}
          />
          <TextField
            label="Password"
            variant="outlined"
            name="password"
            type="password"
            value={password}
            onChange={handleChange}
            error={passwordError}
            helperText={passwordError ? 'Password must be at least 6 characters' : ''}
            style={{ marginBottom: '20px', width: '100%' }}
          />
          <TextField
            label="Name"
            variant="outlined"
            name="name"
            value={name}
            onChange={handleChange}
            error={nameError}
            helperText={nameError ? 'Name is required' : ''}
            style={{ marginBottom: '20px', width: '100%' }}
          />
          <Button type="submit" variant="contained" color="primary" style={{ width: '100%' }}>
            Submit
          </Button>
        </form>
      </div>
    </div>
    </>
  );

};

export default Register;
