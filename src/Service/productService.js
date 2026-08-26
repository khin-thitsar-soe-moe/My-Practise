import { ApiService } from "./apiService";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default class ProductService extends ApiService {
    static getAllProducts(){
     return super.get('/products')   
    }
}