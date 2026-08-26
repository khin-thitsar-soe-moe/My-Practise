import { ApiService } from "./apiService";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default class AuthService extends ApiService {
    static  login (data){
        console.log('Sending login data:', data); 
        return super.post('/auth/login', data)
    }

    //   static async login(data) {
    //     console.log('Sending login data:', data);

    //     const response = await super.post('/auth/login', data);

    //     console.log('Login response:', response.data);

    //     const token = response.data.accessToken;

    //     if (token) {
    //         await AsyncStorage.setItem('token', token);
    //         console.log('Token saved:', token);
    //     }

    //     return response.data;
    // }
}