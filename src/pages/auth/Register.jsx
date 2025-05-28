import { yupResolver } from "@hookform/resolvers/yup";
import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "./hooks/useAuth";

const registerSchema = yup.object().shape({
  username: yup.string().required("Username is required"),
  email: yup.string().email().required("Email is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Minimum 8 characters required")
    .matches(/[A-Z]/, "must contain atleast one uppercase letter ")
    .matches(/[a-z]/, "must contain atleast one lowercase letter ")
    .matches(/[0-9]/, "must contain atleast one digit")
    .matches(/[!@#$%^&*()_+-=]/, "must contain atleast one special character"),
});

const Register = () => {
  const navigate = useNavigate();
  const { addUser } = useAuth();

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
    resolver: yupResolver(registerSchema),
  });

  const onSubmit = async (data) => {
    console.log(data);

    try {
      const newUser = await addUser(data);
      console.log("User Registration Successfull", newUser);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "gray",
        }}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box
            sx={{
              backgroundColor: "white",
              p: 5,
              borderRadius: 2,
            }}
          >
            <Grid container>
              <Stack spacing={2}>
                <Typography>Sign Up</Typography>
                <TextField
                  label="Username"
                  size="small"
                  variant="filled"
                  {...register("username")}
                  error={!!errors.username}
                  helperText={errors.username?.message}
                />
                <TextField
                  label="Email"
                  size="small"
                  variant="filled"
                  {...register("email")}
                  error={!!errors.email}
                  helperText={errors.email?.message}
                />
                <TextField
                  label="Password"
                  size="small"
                  variant="filled"
                  {...register("password")}
                  error={!!errors.password}
                  helperText={errors.password?.message}
                />
                <Button variant="contained" size="small" type="submit">
                  Sign up
                </Button>
                <Divider>or</Divider>
                <Button
                  variant="outlined"
                  size="small"
                  startIcon={<Icon icon="flat-color-icons:google" />}
                >
                  Sign Up with Google
                </Button>
                <Button
                  variant="outlined"
                  size="small"
                  startIcon={<Icon icon="logos:facebook" />}
                >
                  Sign Up with Facebook
                </Button>
                <Typography>
                  Already have an account? <Link to={"/"}>Sign in</Link>
                </Typography>
              </Stack>
            </Grid>
          </Box>
        </form>
      </div>
    </>
  );
};

export default Register;
