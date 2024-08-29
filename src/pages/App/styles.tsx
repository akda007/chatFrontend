import { Stack, styled, TextField, Typography } from "@mui/material";

export const MessageContainer = styled(Stack)`
    /* gap={3} width={"100%"} alignItems={"center"} height={"90%"} overflow={"auto"} */
    
    gap: 20px;
    width: 100%;
    align-items: center;
    height: 100%;
    overflow: auto;

    @media screen and (max-width: 600px){
        align-items: flex-start;
        padding-left: 20px;
        padding-right: 20px;
    }
`

export const WebhookMessageBox = styled(Typography)`
    border-radius: 20px;
    max-width: 100%;
    background-color: white;
    color: black;
    padding: 15px;
    font-size: 18px;
    box-shadow: 3px 3px 10px 5px #00000029;
    overflow: hidden;
    min-height: 55px;
    vertical-align: center;
`

export const MessageInput = styled("input")`
    width: 80%;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    background-color: white;
    border-radius: 30px;
    outline: none;
    padding: 15px;
    border: 1px solid gray;
    font-weight: 400;
    font-size: 1.2rem;

`
