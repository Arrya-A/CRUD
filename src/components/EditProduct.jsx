import React, { useState } from "react";
import EditProductModal from "../pages/dashboard/dialog";
import { Icon } from "@iconify/react";
import { Button } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import axiosInstance from "../utils/axiosInstance";

const productSchema = yup.object().shape({
  productName: yup.string().required(),
  brand: yup.string().required(),
  category: yup.string().required(),
  price: yup.number().positive().integer().required(),
});



const EditProduct = ({ productData, onEditProduct }) => {
  const [openEditProductModal, setOpenEditProductModal] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: productData || {
      prodName: "",
      brand: "",
      category: "",
      price: "",
    },
    resolver: yupResolver(productSchema),
  });

  const handleClickOpenEditProductModal = () => {
    // console.log("Open clicked");
    setOpenEditProductModal(true);
  };

  const handleClose = () => {
    setOpenEditProductModal(false);
  };

  const onSubmit = async (data) => {
    console.log(data);
    const updatedProduct = {
      ...productData,
      ...data,
    };
    console.log(updatedProduct);

    try {
      await axiosInstance.put(`allProducts/${productData.id}`, updatedProduct);
      onEditProduct(updatedProduct);
      handleClose();
      reset();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <Button
        variant="contained"
        startIcon={<Icon icon="solar:pen-bold" />}
        onClick={handleClickOpenEditProductModal}
      >
        Edit
      </Button>
      <EditProductModal
        open={openEditProductModal}
        handleClose={handleClose}
        handleSubmit={handleSubmit}
        register={register}
        errors={errors}
        onSubmit={onSubmit}
        submitAction="Edit"
        title="Edit"
      ></EditProductModal>
    </div>
  );
};

export default EditProduct;
