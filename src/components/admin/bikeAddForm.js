import React, { useRef } from "react";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";

const BikeAddForm = ({ bikeForm, toggleBikeForm }) => {
  const bikename = useRef(""); //creating a refernce for TextField Component
  const traccarID = useRef("");

  const sendValue = async () => {
    const url =
      proccess.env.FLEET_API +
      "/addBike?name=" +
      bikename.current.value +
      "&traccarID=" +
      traccarID.current.value;
    try {
      const response = await fetch(url, {
        method: "GET",
      });
      if (response.status == 200) {
        toggleBikeForm();
      } else if (response.status == 409) {
        alert("Bike name already exists. Please try again.");
      } else {
        alert("Error occured. Please try again.");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Dialog open={bikeForm} onClose={toggleBikeForm}>
      <DialogTitle>Subscribe</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Please add details of the new bike
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Bike Name"
          type="name"
          fullWidth
          variant="standard"
          inputRef={bikename}
        />
        <TextField
          margin="dense"
          id="traccarID"
          label="Traccar ID"
          type="number"
          fullWidth
          variant="standard"
          inputRef={traccarID}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={toggleBikeForm}>Cancel</Button>
        <Button onClick={sendValue}>Add Bike</Button>
      </DialogActions>
    </Dialog>
  );
};

export default BikeAddForm;
