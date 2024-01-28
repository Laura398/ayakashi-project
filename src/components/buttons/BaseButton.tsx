import { Button } from "@mui/material";
import { CSSProperties, ReactNode } from "react";

export default function BaseButton(props: { children: ReactNode, onClick: () => void, className?: string, style?: CSSProperties | undefined }) {
    const { children, onClick, className, style } = props;
    return (
        <Button
            onClick={onClick}
            className={className}
            style={style}
        >
            {children}
        </Button>
    );
}