import { Button } from "@mui/material";
import './Buttons.css'

export default function HeaderButton (props: { text: string, link: string }) {
    const goTo = () => () => {
        window.location.href = props.link;
    }

    return (
        <Button id="header-button" variant="contained" onClick={goTo()}>{props.text}</Button>
    )
}