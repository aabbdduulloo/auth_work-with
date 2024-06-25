import React, { useState } from "react";
import { TextField, Button, Typography, Container, Box } from "@mui/material";
import { auth } from "@service";

const SignUpForm = () => {
  const [form, setForm] = useState({});
  const handleChange = event => {
    const { value, name } = event.target;
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = async e => {
    e.åpreventDefault();
    // console.log(form);
    try {
      const response = await auth.sign_up(form);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Sign Up
        </Typography>
        <form id="submit" onSubmit={handleSubmit}>
          <Box component="form" sx={{ mt: 3, width: "100%" }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email "
              name="email"
              variant="outlined"
              type="text"
              onChange={handleChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="full_name"
              id="full_name"
              label="Full Name"
              type="text"
              variant="outlined"
              onChange={handleChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="password"
              label="Password"
              variant="outlined"
              name="password"
              type="password"
              onChange={handleChange}
            />
            <TextField
              margin="normal"
              fullWidth
              type="text"
              name="phone_number"
              id="phone_number"
              label="Phone Number"
              variant="outlined"
              onChange={handleChange}
            />
            <Button
              type="submit"
              form="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
          </Box>
        </form>
      </Box>
    </Container>
  );
};

export default SignUpForm;
