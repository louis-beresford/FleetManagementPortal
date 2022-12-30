// import Button from "@restart/ui/esm/Button";
import React, { useState, useEffect } from "react";
import BikeAdminTable from "../components/admin/bikeAdminTable";
import RiderAdminTable from "../components/admin/riderAdminTable";
import Button from "@mui/material/Button";
import BikeAddForm from "../components/admin/bikeAddForm";
import UserAddForm from "../components/admin/userAddForm";
import BikeEditForm from "../components/admin/bikeEditForm";
import UserEditForm from "../components/admin/userEditForm";

const Admin = () => {
  const [fleetInfo, setFleetInfo] = useState();
  const [riderInfo, setRiderInfo] = useState();

  const [bikeForm, setBikeForm] = useState(false);
  const [userForm, setUserForm] = useState(false);

  const [bikeEdit, setBikeEdit] = useState(false);
  const [bikeEditInfo, setBikeEditInfo] = useState();

  const [userEdit, setUserEdit] = useState(false);
  const [userEditInfo, setUserEditInfo] = useState();

  const getFleet = async () => {
    try {
      const response = await fetch(proccess.env.FLEET_API + "/bikesAdmin", {
        method: "GET",
      });
      const json = await response.json();
      setFleetInfo(json);
      return json;
    } catch (error) {
      console.error(error);
    }
  };

  const getRiders = async () => {
    try {
      const response = await fetch(proccess.env.FLEET_API + "/riders", {
        method: "GET",
      });
      const json = await response.json();
      setRiderInfo(json);
      return json;
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getRiders();
    getFleet();
  }, [userForm, userEdit, bikeForm, bikeEdit]);

  function toggleBikeForm() {
    setBikeForm(!bikeForm);
  }

  function toggleUserForm() {
    setUserForm(!userForm);
  }

  function toggleBikeEdit(info) {
    if (info) {
      setBikeEditInfo(info);
    }
    setBikeEdit(!bikeEdit);
  }

  function toggleUserEdit(info) {
    if (info) {
      setUserEditInfo(info);
    }
    setUserEdit(!userEdit);
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        width: "100%",
        flex: 1,
        alignContent: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div style={{ height: 1400 }}>
          {fleetInfo && (
            <BikeAdminTable
              fleetInfo={fleetInfo}
              toggleBikeEdit={toggleBikeEdit}
            />
          )}
        </div>

        <Button
          style={{
            width: "20%",
            alignSelf: "center",
            position: "fixed",
            bottom: 20,
          }}
          variant="outlined"
          onClick={toggleBikeForm}
        >
          Add Bike
        </Button>

        <BikeAddForm toggleBikeForm={toggleBikeForm} bikeForm={bikeForm} />
        {fleetInfo && bikeEditInfo && (
          <BikeEditForm
            toggleBikeEdit={toggleBikeEdit}
            bikeEdit={bikeEdit}
            bike={bikeEditInfo}
          />
        )}
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
        }}
      >
        <div style={{ height: 1400 }}>
          {riderInfo && (
            <RiderAdminTable
              riderInfo={riderInfo}
              toggleUserEdit={toggleUserEdit}
            />
          )}
        </div>

        <Button
          style={{
            width: "20%",
            alignSelf: "center",
            position: "fixed",
            bottom: 20,
          }}
          variant="outlined"
          onClick={toggleUserForm}
        >
          Add User
        </Button>

        <UserAddForm userForm={userForm} toggleUserForm={toggleUserForm} />
        {riderInfo && userEditInfo && (
          <UserEditForm
            toggleUserEdit={toggleUserEdit}
            userEdit={userEdit}
            user={userEditInfo}
          />
        )}
      </div>
    </div>
  );
};
export default Admin;
