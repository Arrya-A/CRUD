import { Icon } from "@iconify/react";
import { Box, Button } from "@mui/material";
import AddProductModal from "../pages/dashboard/dialog";
import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axiosInstance from "../utils/axiosInstance";
import { useForm } from "react-hook-form";

const productSchema = yup.object().shape({
  productName: yup.string().required(),
  brand: yup.string().required(),
  category: yup.string().required(),
  price: yup.number().positive().integer().required(),
});
const AddProduct = ({onAddProduct}) => {
  const [openAddProductModal, setOpenAddProductModal] = useState(false);

  const handleClickOpenAddProductModal = () => {
    setOpenAddProductModal(true);
  };

  const handleClose = () => {
    setOpenAddProductModal(false);
  };

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      productName: "",
      brand: "",
      category: "",
      price: "",
    },
    resolver: yupResolver(productSchema),
  });

  const onSubmit = async ({ productName, brand, category, price }) => {
    const newProduct = {
      productName,
      brand,
      category,
      price,
    };
    console.log(newProduct);

    try {
      const response = await axiosInstance.post("/allProducts", newProduct);
      console.log(response);
      onAddProduct(response.data);
      reset();
      handleClose();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Box>
        <Button
          sx={{ float: "right" }}
          variant="contained"
          startIcon={<Icon icon="tabler:plus" />}
          onClick={handleClickOpenAddProductModal}
        >
          Add Product
        </Button>
      </Box>

      <AddProductModal
        open={openAddProductModal}
        handleClose={handleClose}
        handleSubmit={handleSubmit}
        register={register}
        errors={errors}
        onSubmit={onSubmit}
        submitAction="Add"
        title="Add New Product"
      ></AddProductModal>
    </>
  );
};

export default AddProduct;
