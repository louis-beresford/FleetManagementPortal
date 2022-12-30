import React, { useRef } from "react";

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

const UserAddForm = ({ userForm, toggleUserForm }) => {
  const username = useRef(""); //creating a refernce for TextField Component
  const fullname = useRef("");
  const number = useRef("");

  const [type, setType] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setType(event.target.value);
  };

  const sendValue = async () => {
    const url =
      proccess.env.FLEET_API +
      "/addUser?username=" +
      username.current.value +
      "&fullname=" +
      fullname.current.value +
      "&number=" +
      number.current.value;
    try {
      const response = await fetch(url, {
        method: "GET",
      });
      if (response.status == 200) {
        toggleUserForm();
      } else if (response.status == 409) {
        alert("Username already exists. Please try again.");
      } else {
        alert("Error occured. Please try again.");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Dialog open={userForm} onClose={toggleUserForm}>
      <DialogTitle>Add User</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Please add details of the new user
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="userName"
          label="Username"
          type="name"
          fullWidth
          variant="standard"
          inputRef={username}
        />
        <TextField
          margin="dense"
          id="password"
          label="Password"
          type="password"
          fullWidth
          variant="standard"
          // inputRef={pass}
        />
        <TextField
          margin="dense"
          id="password2"
          label="Confirm Password"
          type="password"
          fullWidth
          variant="standard"
        />
        <TextField
          margin="dense"
          id="fullName"
          label="Full name"
          type="name"
          fullWidth
          variant="standard"
          inputRef={fullname}
        />
        <TextField
          margin="dense"
          id="number"
          label="Phone Number"
          type="number"
          fullWidth
          variant="standard"
          inputRef={number}
        />
        <FormControl fullWidth style={{ top: 15 }}>
          <InputLabel id="select-helper-label">User Type</InputLabel>

          <Select
            labelId="-helper-label"
            id="select-helper"
            value={type}
            label="User Type"
            onChange={handleChange}
          >
            <MenuItem value={1}>Rider</MenuItem>
            <MenuItem value={2}>Mechanic</MenuItem>
            <MenuItem value={3}>Supervisor</MenuItem>
            <MenuItem value={4}>Account Disabled</MenuItem>
          </Select>
        </FormControl>
      </DialogContent>

      <DialogActions>
        <Button onClick={toggleUserForm}>Cancel</Button>
        <Button onClick={sendValue}>Add User</Button>
      </DialogActions>
    </Dialog>
  );
};

export default UserAddForm;
