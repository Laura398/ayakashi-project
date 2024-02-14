import { Button } from "@mui/material";
import './Buttons.css'

export default function HeaderButton (props: { text: string, link: string }) {
    return (
        <Button id="header-button" variant="contained" onClick={() => {window.location.href = props.link}}>{props.text}</Button>
    )
}