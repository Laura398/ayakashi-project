import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MailIcon from '@mui/icons-material/Mail';
import UnsubscribeIcon from '@mui/icons-material/Unsubscribe';
import { InputAdornment } from '@mui/material';

export default function CustomizedInputBase() {
  return (
    <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', flexWrap: 'wrap', width: 400, margin: 'auto' }}
    >
      <InputAdornment position="start" sx={{ p: "5px"}}>Newsletter</InputAdornment>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Email here"
        inputProps={{ 'aria-label': 'email here' }}
      />
      <IconButton type="button" sx={{ p: '10px' }} aria-label="subscribe">
        <MailIcon />
      </IconButton>
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <IconButton type="button" sx={{ p: '10px' }} aria-label="unsubscribe">
        <UnsubscribeIcon />
      </IconButton>
    </Paper>
  );
}