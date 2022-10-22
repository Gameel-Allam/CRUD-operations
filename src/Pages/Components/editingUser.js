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

export default function EditingDialog({ openDialog, handleClose, userData }) {
    const [newUser, setNewUSer] = React.useState(userData);
    const onChange = (e) => {
        const { value, id } = e.target;
        setNewUSer({ ...newUser, [id]: value });
    }
    const onSubmit = (e) => {
        if (newUser.fullName === "" || newUser.age === undefined || newUser.phone === "" || newUser.eMail === "")
            e.preventDefault();
        else {
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
                                id="userName"
                                placeholder="Enter your name"
                                label="Full-Name"
                                variant="standard"
                                margin="normal"
                                fullWidth
                                defaultValue={newUser.userName}
                                onChange={e => onChange(e)}
                            />
                            <TextField
                                id="eMail"
                                placeholder="Enter your eMail"
                                label="E-mail"
                                variant="standard"
                                margin="normal"
                                fullWidth
                                defaultValue={newUser.eMail}
                                onChange={e => onChange(e)}
                            />
                            <TextField
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

