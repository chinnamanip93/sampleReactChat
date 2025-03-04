import React, { useState } from "react";
import Grid from "@mui/material/Grid2";
import Box from "@mui/material/Box";
import ImageSlide from "./ImageSlide.jsx";
import { TextField, Button, Container, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { loginUser } from "../../features/auth/authApi.jsx";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    debugger;
    event.preventDefault();
    // Handle login logic
    console.log("Email:", email);
    console.log("Password:", password);

    const credentials = { email: email, password: password };
    const res = await dispatch(loginUser(credentials));
    debugger;
    if (res.payload) {
      navigate("/Home");
    }
  };

  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid size={6}>
            <Box sx={{ marginTop: "50px" }}>
              <ImageSlide />
            </Box>
          </Grid>
          <Grid size={6}>
            <Box>
              Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Error temporibus soluta delectus nihil repellendus placeat eos,
              possimus quis inventore aspernatur nemo laborum sunt nam cumque
              fuga recusandae beatae minima porro?
              <Container maxWidth="xs">
                <Typography variant="h4" align="center" gutterBottom>
                  Login
                </Typography>
                <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
                  <TextField
                    fullWidth
                    label="Email"
                    margin="normal"
                    variant="outlined"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <TextField
                    fullWidth
                    label="Password"
                    type="password"
                    variant="outlined"
                    margin="normal"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                  >
                    Login
                  </Button>
                </Box>
              </Container>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Login;
