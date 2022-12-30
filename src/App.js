import React, { useState, useEffect } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/home";
import Rounds from "./pages/rounds";
import Admin from "./pages/admin";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

const App = () => {
  const [username, setUsername] = useState();
  const [loggedIn, setLoggedIn] = useState(true);

  const checkCreds = (event) => {
    //Prevent page reload
    event.preventDefault();

    const formData = new FormData(event.target);
    const formProps = Object.fromEntries(formData);
    console.log(formProps);

    setLoggedIn(true);
  };

  return (
    <BrowserRouter>
      {!loggedIn ? (
        <>
          <div style={{ textAlign: "center", backgroundColor: "#ffffff" }}>
            <header
              style={{
                height: 1200,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "20px",
                color: "white",
              }}
            >
              <h1
                style={{
                  top: 500,
                  fontWeight: "bold",
                  fontSize: "36",
                  color: "#f45476",
                }}
              >
                Zedify Fleet Management Portal
              </h1>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "1px",
                  borderRadius: "5px",
                  borderStyle: "solid",
                  borderColor: "lightgrey",
                  padding: "50px",
                  backgroundColor: "#ßDFDAD8",
                }}
              >
                <TextField
                  variant="standard"
                  margin="dense"
                  placeholder="Username"
                  required
                />
                <TextField
                  variant="standard"
                  margin="dense"
                  placeholder="Password"
                  required
                  type="password"
                />

                <div style={{ padding: "40px", color: "#043366" }}>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => {
                      setLoggedIn(true);
                    }}
                  >
                    Log In
                  </Button>
                </div>
              </div>
            </header>
          </div>
        </>
      ) : (
        <>
          <Navbar logOut={setLoggedIn} />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/rounds" element={<Rounds />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </>
      )}
    </BrowserRouter>
  );
};

export default App;
