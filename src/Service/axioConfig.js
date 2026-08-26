import axios from "axios";
import NetInfo from "@react-native-community/netinfo";
import { Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { BASE_URL } from "../utils/constant";

export const DefaultAxios = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    }
})

DefaultAxios.interceptors.request.use(
    async (config) => {
        const token = await AsyncStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        console.log('Token:', token);

        const isConnected = await isNetworkConnected();
        if (!isConnected) {
            Alert.alert('Network Error', 'No Internet Connection', [{ text: 'OK', style: 'cancel' }]);
            throw new axios.Cancel('No internet connection');
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export const isNetworkConnected = async () => {
    const state = await NetInfo.fetch();
    return state.isConnected;
};
