import React from 'react';
import './Landing.css'
import Story from './Story';
import Title from './Title';
import Update from './Update';
import { Dialog, styled } from '@mui/material';
import Disclaimer from '../disclaimer/Disclainer';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
      padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
      padding: theme.spacing(1),
    },
  }));

export default function Landing() {
    const [open, setOpen] = React.useState(true);

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <section id="landing">
            <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
            >
                <Disclaimer
                    handleClose={handleClose}
                />
            </BootstrapDialog>
            <hr />
            
            <Title />

            <hr />

            <Story />

            <hr />

            <Update />
        </section>
    );
}