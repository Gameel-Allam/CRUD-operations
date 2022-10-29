import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { TextField } from "@mui/material";
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import { useDispatch } from "react-redux";
import { AddAPi } from "../../Redux/AddSlice";
import { useNavigate } from "react-router-dom";


export default function AddingDialog({ openDialog, handleClose, data, onChange }) {
    const dispatch=useDispatch();
    const router=useNavigate()
    const onSubmit = (e) => {
        if (data.uname === "" || data.age === (undefined || "" || '') || data.phone === "" || data.email === "")
            e.preventDefault();
        else {
            // data of new user
            dispatch(AddAPi(JSON.stringify(data)))
            // console.log(data);
            data.uname = "";
            data.age = undefined;
            data.phone = "";
            data.email = "";
            handleClose();
            router('/users')
        }

    }
    return (
        <div>
            <Dialog
                open={openDialog}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >

                <Paper elevation={5}>
                    <DialogTitle id="alert-dialog-title">
                        <Grid align="center">

                            <PersonAddAltIcon />
                            <h2>Creating new user</h2>
                        </Grid>
                    </DialogTitle>
                </Paper>
                <form style={{ padding: "10px 100px" }}>
                    <DialogContent>
                        <TextField
                            id="uname"
                            placeholder="Enter your name"
                            label="name"
                            variant="standard"
                            margin="normal"
                            fullWidth
                            defaultValue={data.uname}
                            onChange={e => onChange(e)}
                        />
                        <TextField
                            id="email"
                            placeholder="Enter your eMail"
                            label="E-mail"
                            variant="standard"
                            margin="normal"
                            fullWidth
                            defaultValue={data.email}
                            onChange={e => onChange(e)}
                        />
                        <TextField
                            id="phone"
                            placeholder="Enter your phone"
                            label="Phone"
                            variant="standard"
                            margin="normal"
                            fullWidth
                            defaultValue={data.phone}
                            onChange={e => onChange(e)}
                        />
                        <Grid container>
                            <Grid item xs={6}>
                                <TextField
                                    id="age"
                                    placeholder="Enter your age"
                                    label="Age"
                                    type="number"
                                    variant="standard"
                                    margin="normal"
                                    fullWidth
                                    defaultValue={data.age}
                                    onChange={e => onChange(e)}
                                />
                            </Grid>
                        </Grid>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} variant="outlined">Cancel</Button>
                        <Button onClick={(e) => onSubmit(e)} variant="contained">Confirm</Button>
                    </DialogActions>
                </form>
            </Dialog>
        </div >
    );
}
