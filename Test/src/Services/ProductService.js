import axios from 'axios';
import backendUrl from '../Config/config';

const ProductService = {
    async getAllProducts() {
        try {
            const response = await axios.get(`${backendUrl}/api/Product`);
            return response.data;
        } catch (error) {
            console.error('Error fetching products:', error);
            throw error;
        }
    },
    async ShowProductInfo(productId) {
        try {
            const response = await axios.get(`${backendUrl}/api/Product/${productId}`);
            return response.data;
        } catch (error) {
            console.error('error fetching product by id: ', error);
            throw error;
        }
    }
};

export default ProductService;