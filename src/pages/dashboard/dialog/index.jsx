import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Stack,
  TextField,
} from "@mui/material";
import React from "react";
import Slide from "@mui/material/Slide";
import { useForm } from "react-hook-form";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const index = () => {
  
  return (
    <>
      <Dialog
        open={open}
        slots={{
          transition: Transition,
        }}
        keepMounted
        // onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>Add New Product Details</DialogTitle>
        <DialogContent>
          <Stack spacing={2}>
            <TextField
              label="Product Name"
              variant="outlined"
              size="small"
              {...register("productName")}
              error={!!errors.productName}
              helperText={errors.productName?.message}
            />
            <TextField
              label="Brand"
              variant="outlined"
              size="small"
              {...register("brand")}
              error={!!errors.brand}
              helperText={errors.brand?.message}
            />
            <TextField
              label="Category"
              variant="outlined"
              size="small"
              {...register("category")}
              error={!!errors.category}
              helperText={errors.category?.message}
            />
            <TextField
              label="Price"
              variant="outlined"
              size="small"
              {...register("price")}
              error={!!errors.price}
              helperText={errors.price?.message}
            />
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button type="submit" variant="contained" color="success">
            Add
          </Button>
          <Button variant="contained" color="error" onClick={handleClose}>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default index;
