import { Box, InputLabel } from "@mui/material";
import React from "react";
import BaseButton from "../../components/buttons/BaseButton";
import AlertMessage from "../../components/alerts/AlertMessage";

export default function Contact() {
    const [showAlert, setShowAlert] = React.useState(false);
    const [alert, setAlert] = React.useState({ message: '', severity: '' });
    const [email, setEmail] = React.useState('');
    const [message, setMessage] = React.useState('');

    function closeAlert() {
        setShowAlert(false);
    }

    function changeEmail(event: React.ChangeEvent<HTMLInputElement>) {
        setEmail(event.target.value);
    }

    function changeMessage(event: React.ChangeEvent<HTMLTextAreaElement>) {
        setMessage(event.target.value);
    }

    function sendMessage() {        
        const validEmail = email !== '' && email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        const validMessage = message !== '';

        if (validEmail && validMessage) {
            setAlert({message: 'Your message has been sent !', severity: 'success'});
        } else if (!validEmail) {
            setAlert({message: 'Please enter a valid email address.', severity: 'warning'});
        } else if (!validMessage) {
            setAlert({message: 'Please enter a message.', severity: 'warning'});
        }

        setShowAlert(true);
        
    }

    return (
        <div id="contact">
            <h1>Contact us</h1>
            
            <Box
                component="form"
                sx={{
                    width: "60%",
                    margin: "auto",
                    display: 'flex',
                    flexWrap: 'wrap',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'left',
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <InputLabel className="label">Email <span className="red3">*</span></InputLabel>
                <input
                id="contact-email"
                className="input focus-cursor"
                onChange={changeEmail} />
                
                <InputLabel className="label">Message <span className="red3">*</span></InputLabel>
                <textarea
                    id="outlined-multiline-static"
                    className="contact-message focus-cursor"
                    rows={10}
                    style={{ color: 'white' }}
                    onChange={changeMessage}
                />
                <div className="label">
                    <BaseButton children="Submit" onClick={sendMessage} className="newsletter-button" style={{ width: '20%', marginTop: '20px', backgroundColor: 'var(--red1)', color: 'white', textTransform: 'none', borderRadius: '5px', marginLeft: 0 }} />
                </div>
            </Box>
            {showAlert && <AlertMessage severity={alert.severity} message={alert.message} onClose={closeAlert} />}
        </div>
    );
}