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
import { Icon } from "@iconify/react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "./hooks/useAuth";
// import jsonData from "../../../db.json"

const loginSchema = yup.object().shape({
  email: yup.string().required(),
  password: yup.string().required(),
});

const Login = () => {
  // get directly from db.json file
  // const user = jsonData?.users

 
  const { users } = useAuth();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = async (data) => {
    console.log(data);

    const user = users.find(
      (user) => user.email === data.email && user.password === data.password
    );

    if (user) {
      alert("Login successfull");
      navigate("/home");
    } else {
      alert("Invalid credentials");
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
                <Typography>Sign In</Typography>
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
                <FormControlLabel control={<Checkbox />} label="Remember me" />
                <Button variant="contained" size="small" type="submit">
                  Sign In
                </Button>
                <Typography textAlign={"center"} fontSize={"small"}>
                  <Link to={"/"}>Forgot your password?</Link>
                </Typography>
                <Divider>or</Divider>
                <Button
                  variant="outlined"
                  size="small"
                  startIcon={<Icon icon="flat-color-icons:google" />}
                >
                  Sign In with Google
                </Button>
                <Button
                  variant="outlined"
                  size="small"
                  startIcon={<Icon icon="logos:facebook" />}
                >
                  Sign In with Facebook
                </Button>
                <Typography>
                  Dont have an account? <Link to={"/register"}>Sign up</Link>
                </Typography>
              </Stack>
            </Grid>
          </Box>
        </form>
      </div>
    </>
  );
};

export default Login;
