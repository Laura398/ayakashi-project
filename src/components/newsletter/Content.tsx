import { InputLabel, Paper } from "@mui/material";
import Input from '@mui/joy/Input';
import BaseButton from "../buttons/BaseButton";
import AlertMessage from "../alerts/AlertMessage";
import React from "react";
  
export default function NewsletterContent() {
    const [showAlert, setShowAlert] = React.useState(false);
    const [alertMessage, setAlertMessage] = React.useState('');
    const [alertSeverity, setAlertSeverity] = React.useState('');
    const [email, setEmail] = React.useState('');

    function changeEmail(event: React.ChangeEvent<HTMLInputElement>) {
            setEmail(event.target.value);
    }

    function check() {
        const validEmail = email !== '' && email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        if (validEmail) {
            validate();
        } else {
            warning();
        }
    }

    function validate() {  
        console.log('validate');
        setAlertMessage('You have successfully subscribed to our newsletter!');
        setAlertSeverity('success');
        setShowAlert(true);
    }

    function warning() {
        console.log('warning');
        setAlertMessage('Please enter a valid email address.');
        setAlertSeverity('warning');
        setShowAlert(true);
    }

    function closeAlert() {
        setShowAlert(false);
    }

    return (
        <div id="newsletter-content">
            <InputLabel sx={{ margin: '0', color: 'white', textAlign: 'left' }}>Email</InputLabel>
            <Paper
                component="form"
                className="input"
                >

                <input
                className="input"
                placeholder="Email here..."
                onChange={changeEmail} />
            </Paper>

            <BaseButton children="Subscribe" onClick={check} className="newsletter-button" style={{ width: '100%', marginTop: '5px', backgroundColor: 'var(--red1)', color: 'white', textTransform: 'none', borderRadius: '10px' }} />


            {showAlert && <AlertMessage severity={alertSeverity} message={alertMessage} onClose={closeAlert} />}
        </div>
    );
}