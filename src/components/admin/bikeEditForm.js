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

const BikeEditForm = ({ bikeEdit, toggleBikeEdit, bike }) => {
  const bikeName = useRef(bike.bikeName);
  const traccarID = useRef(bike.traccarId);
  const id = bike.id;

  const [status, setStatus] = React.useState(1);

  const handleChange = (event: SelectChangeEvent) => {
    setStatus(event.target.value);
  };

  const sendValue = async () => {
    const url =
      proccess.env.FLEET_API +
      "/updateBike?bikeName=" +
      bikeName.current.value +
      "&traccarID=" +
      traccarID.current.value +
      "&id=" +
      id;
    try {
      const response = await fetch(url, {
        method: "GET",
      });
      if (response.status == 200) {
        toggleBikeEdit();
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
    <Dialog open={bikeEdit} onClose={toggleBikeEdit}>
      <DialogTitle>Edit Bike Details</DialogTitle>
      <DialogContent>
        <DialogContentText>Please edit details of bike</DialogContentText>
        <TextField
          // autoFocus
          margin="dense"
          id="name"
          label="Bike Name"
          type="name"
          defaultValue={bike.bikeName}
          fullWidth
          variant="standard"
          inputRef={bikeName}
        />
        <TextField
          margin="dense"
          id="traccarID"
          label="Traccar ID"
          type="number"
          defaultValue={bike.traccarId}
          fullWidth
          variant="standard"
          inputRef={traccarID}
        />

        <FormControl fullWidth style={{ top: 15 }}>
          <InputLabel id="select-helper-label">Bike Status</InputLabel>

          <Select
            labelId="-helper-label"
            id="select-helper"
            value={status}
            label="Bike Status"
            onChange={handleChange}
            defaultValue={3}
          >
            <MenuItem value={1}>Good</MenuItem>
            <MenuItem value={2}>Useable</MenuItem>
            <MenuItem value={3}>Unusable</MenuItem>
          </Select>
        </FormControl>
      </DialogContent>
      <DialogActions>
        <Button onClick={toggleBikeEdit}>Cancel</Button>
        <Button onClick={sendValue}>Update Bike</Button>
      </DialogActions>
    </Dialog>
  );
};

export default BikeEditForm;
