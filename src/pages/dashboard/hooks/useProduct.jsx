import axiosInstance from "../../../utils/axiosInstance";
const useProduct = () => {
  const [allProducts, setAllProducts] = useState([]);

  //API to fetch all the products
  const fetchProducts = async () => {
    try {
      const response = await axiosInstance.get("allProducts");
      console.log(response.data);
      setAllProducts(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  //API to add new products
  const addProduct = async (newProductData) => {
    try {
      const response = await axiosInstance.post("allProducts", newProductData);
      console.log(response.data);
      
    } catch (err) {
      console.log(err);
    }
  };

  return { allProducts, fetchProducts, addProduct };
};

export default useProduct;
