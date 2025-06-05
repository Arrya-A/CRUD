import AddProduct from "../../components/AddProduct";
import {
  Box,
  Button,
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import EditProduct from "../../components/EditProduct";
import useProduct from "./hooks/useProduct";

const Home = () => {
  const { allProducts, addProduct, deleteProduct } = useProduct();

  return (
    <>
      <Container maxWidth="md" sx={{ py: 5 }}>
        <AddProduct onAddProduct={addProduct} />
        <Box>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Product Id</TableCell>
                  <TableCell>Product Name</TableCell>
                  <TableCell>Brand</TableCell>
                  <TableCell>Category</TableCell>
                  <TableCell>Price</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {allProducts.map((product) => (
                  <TableRow key={product.id}>
                    <TableCell>{product.id}</TableCell>
                    <TableCell>{product.productName}</TableCell>
                    <TableCell>{product.brand}</TableCell>
                    <TableCell>{product.category}</TableCell>
                    <TableCell>{product.price}</TableCell>
                    <TableCell>
                      <EditProduct />
                      <Button variant="contained" color="error" onClick={()=>deleteProduct(product.id)}>
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Container>
    </>
  );
};

export default Home;
