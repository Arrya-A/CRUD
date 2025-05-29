import { Icon } from "@iconify/react";
import { Box, Button } from "@mui/material";
import AddProductModal from "../pages/dashboard/dialog";
import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";

const productSchema = yup.object().shape({
  productName: yup.string().required(),
  brand: yup.string().required(),
  category: yup.string().required(),
  price: yup.number().positive().integer().required(),
});
const AddProduct = () => {
  const [openAddProductModal, setOpenAddProductModal] = useState(false);

  const handleClickOpenAddProductModal = () => {
    setOpenAddProductModal(true);
  };

  const handleClose= () => {
    setOpenAddProductModal(false);
  };

  const {
    handleSubmit,
    register,
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
  return (
    <>
      <Box>
        <Button
          sx={{ float: "right" }}
          variant="contained"
          startIcon={<Icon icon="tabler:plus" />}
        >
          Add Product
        </Button>
      </Box>

      <AddProductModal
      open={openAddProductModal}
      hand
      ></AddProductModal>
    </>
  );
};

export default AddProduct;
