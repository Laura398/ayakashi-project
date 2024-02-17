import * as React from 'react';
import Button from '@mui/material/Button';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Typography from '@mui/material/Typography';

export default function Disclaimer(props: {handleClose: () => void}) {
  return (
    <React.Fragment>
        <DialogTitle sx={{ m: 0, p: 2, backgroundColor: "rgb(73, 73, 73)", color: "white" }} id="customized-dialog-title">
          DISCLAIMER
        </DialogTitle>
        <DialogContent dividers sx={{ backgroundColor: "rgb(73, 73, 73)", color: "white" }}>
          <Typography gutterBottom>
            This website is not the official website of the game Ayakashi Project.
          </Typography>
          <Typography gutterBottom>
            This is a second website created from the same mockup as the official website.
          </Typography>
          <Typography gutterBottom>
            The official website was designed and made by Emilie Chane-Foc. It is available at the following address: <a href="https://ayakashi-project.fr.nf/" target="_blank" style={{color: "white", textDecoration: "underline"}}>https://ayakashi-project.fr.nf/</a>
          </Typography>
        </DialogContent>
        <DialogActions sx={{ backgroundColor: "rgb(73, 73, 73)", color: "white" }}>
          <Button autoFocus onClick={props.handleClose} sx={{ color: "white" }}>
            Okay
          </Button>
        </DialogActions>
    </React.Fragment>
  );
}