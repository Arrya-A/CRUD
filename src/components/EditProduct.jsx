import React from "react";
import EditProductModal from "../pages/dashboard/dialog";
import {Icon} from "@iconify/react"
import { Button } from "@mui/material";
const EditProduct = () => {
  return (
    <div>
      <Button
        variant="contained"
        startIcon={<Icon icon="solar:pen-bold" />}
        // onClick={handleClickOpenAddProductModal}
      >
        Edit
      </Button>
      {/* <EditProductModal
        open={openEditProductModal}
        handleClose={handleClose}
        handleSubmit={handleSubmit}
        register={register}
        errors={errors}
        onSubmit={onSubmit}
        submitAction="Edit"
        title="Edit"
      ></EditProductModal> */}
    </div>
  );
};

export default EditProduct;
