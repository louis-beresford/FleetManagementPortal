import React, { useState, useRef } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

const UserEditForm = ({ userEdit, toggleUserEdit, user }) => {
  const username = useRef(user.username);
  const fullname = useRef(user.fullname);
  const number = useRef(user.phoneNumber);
  // const type = useRef(user.type);

  const [type, setType] = React.useState(user.type);

  const id = user.id;

  const sendValue = async () => {
    const url =
      proccess.env.FLEET_API +
      "/updateUser?username=" +
      username.current.value +
      "&fullname=" +
      fullname.current.value +
      "&number=" +
      number.current.value +
      "&id=" +
      id;
    try {
      const response = await fetch(url, {
        method: "GET",
      });
      if (response.status == 200) {
        toggleUserEdit();
      } else if (response.status == 409) {
        alert("Username already exists. Please try again.");
      } else {
        alert("Error occured. Please try again.");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (event: SelectChangeEvent) => {
    setType(event.target.value);
  };

  return (
    <Dialog open={userEdit} onClose={toggleUserEdit}>
      <DialogTitle>Edit User</DialogTitle>
      <DialogContent>
        <DialogContentText>Please edit details of user</DialogContentText>
        <TextField
          margin="dense"
          id="usrname"
          label="Username"
          type="name"
          fullWidth
          variant="standard"
          inputRef={username}
          defaultValue={user.username}
        />
        <TextField
          margin="dense"
          id="password"
          label="Password"
          type="password"
          fullWidth
          variant="standard"
          defaultValue={"dummypassword"}
        />
        <TextField
          margin="dense"
          id="password2"
          label="Confirm Password"
          type="password"
          fullWidth
          variant="standard"
          defaultValue={"dummypassword"}
        />
        <TextField
          margin="dense"
          id="fullname"
          label="Full name"
          type="name"
          fullWidth
          variant="standard"
          inputRef={fullname}
          defaultValue={user.fullname}
        />
        <TextField
          margin="dense"
          id="number"
          label="Phone Number"
          type="number"
          fullWidth
          variant="standard"
          inputRef={number}
          defaultValue={user.phoneNumber}
        />

        <FormControl fullWidth style={{ top: 15 }}>
          <InputLabel id="select-helper-label">User Type</InputLabel>

          <Select
            labelId="-helper-label"
            id="select-helper"
            value={type}
            label="User Type"
            onChange={handleChange}
            defaultValue={user.type}
          >
            <MenuItem value={1}>Rider</MenuItem>
            <MenuItem value={2}>Mechanic</MenuItem>
            <MenuItem value={3}>Supervisor</MenuItem>
            <MenuItem value={4}>Account Disabled</MenuItem>
          </Select>
        </FormControl>
      </DialogContent>
      <DialogActions>
        <Button onClick={toggleUserEdit}>Cancel</Button>
        <Button onClick={sendValue}>Update User</Button>
      </DialogActions>
    </Dialog>
  );
};

export default UserEditForm;
