import { Icon } from "@iconify/react";
import { Box, Button } from "@mui/material";
const AddProduct = () => {
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
    </>
  );
};

export default AddProduct;
