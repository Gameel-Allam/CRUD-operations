import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { TextField } from "@mui/material";
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import EditIcon from '@mui/icons-material/Edit';
import { useDispatch } from "react-redux";
import { UpdataAPi } from "../../Redux/UpdateSlice";
import { json } from "react-router-dom";

export default function EditingDialog({ openDialog, handleClose, userData }) {
    const dispatch = useDispatch();
    const [newUser, setNewUSer] = React.useState(userData);
    const onChange = (e) => {
        const { value, id } = e.target;
        setNewUSer({ ...newUser, [id]: value });
    }
    const validate = () => {
        if (newUser.uname === "" || newUser.age === (undefined || "" || '') || newUser.phone === "" || newUser.email === "")
            return false
        else if (!newUser.phone.startsWith('+20') || !(/\d{10}/.test(parseInt(newUser.phone.substring(3)))))
            return false
        else if (!(/.+@.+.(com|org)/.test(newUser.email)))
            return false;
        return true
    }
    const onSubmit = (e) => {
        if (validate())
            e.preventDefault();
        else {
            // the data of user after edit

            dispatch(UpdataAPi(newUser));
            console.log(newUser);
            handleClose();
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
                            <EditIcon />
                            <h2>Editing Current user</h2>
                        </Grid>
                    </DialogTitle>
                </Paper>
                <form style={{ padding: "10px 100px" }}>
                    <DialogContent>
                        <TextField
                            disabled
                            id="uname"
                            placeholder="Enter your name"
                            label="Full-Name"
                            variant="standard"
                            margin="normal"
                            fullWidth
                            defaultValue={newUser.uname}
                            onChange={e => onChange(e)}
                        />
                        <TextField
                            id="email"
                            placeholder="Enter your eMail"
                            label="E-mail"
                            variant="standard"
                            margin="normal"
                            fullWidth
                            defaultValue={newUser.email}
                            onChange={e => onChange(e)}
                        />
                        <TextField
                            disabled
                            id="phone"
                            placeholder="Enter your phone"
                            label="Phone"
                            variant="standard"
                            margin="normal"
                            fullWidth
                            defaultValue={newUser.phone}
                            onChange={e => onChange(e)}
                        />
                        <Grid container>
                            <Grid item xs={6}>
                                <TextField
                                    disabled
                                    id="age"
                                    placeholder="Enter your age"
                                    label="Age"
                                    type="number"
                                    variant="standard"
                                    margin="normal"
                                    fullWidth
                                    defaultValue={newUser.age}
                                    onChange={e => onChange(e)}
                                />
                            </Grid>
                        </Grid>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} variant="outlined">Cancel</Button>
                        <Button variant="contained" onClick={(e) => onSubmit(e)}>Confirm</Button>
                    </DialogActions>
                </form>
            </Dialog>
        </div>
    );
}

