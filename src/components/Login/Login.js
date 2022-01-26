import React from 'react';
import './Login.scss';
import Button from '@mui/material/Button';
import { auth, provider } from '../../firebase/firebase';
import { useStateValue } from '../../providers/StateProvider';
import { actionTypes } from '../../reducers/reducer';

function Login() {
    const [state, dispatch] = useStateValue();

    const signIn = () => {
        auth.signInWithPopup(provider).then((result) => {
            console.log(result);
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user
            })

        }).catch((error) => {
            alert(error.message);
        });
    };

  return (
    <div className="login">
        <div className="login-card">
            <h2>Chat App</h2>
            <h4>Login</h4>
            <Button onClick={signIn}>Sign In with Google</Button>
        </div>
    </div>
  );
}

export default Login;
