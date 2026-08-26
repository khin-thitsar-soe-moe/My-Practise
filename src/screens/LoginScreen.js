import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import InputBox from '../Components/InputBox'
import { Alert } from 'react-native'
import AuthService from '../Service/authService'

const LoginScreen = ({navigation}) => {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');

    // const handleLogin = async() => {
    //     if(!username || !password){
    //         Alert.alert('Error', 'Please enter both username and password');
    //         return;
    //     }
    //     try {
    //     //     const response = await AuthService.login({
    //     //     username,
    //     //     password,
    //     //     expiresInMins: 30,
    //     // });
    //        await AuthService.login({ username, password,expiresInMins: 30 })
    //        Alert.alert('Success', 'Login successful');
    //     } catch (error) {
    //         Alert.alert('Error', 'Invalid username or password');
    //     }
    // }
    const handleLogin = async () => {
        if (!username || !password) {
            Alert.alert('Error', 'Please enter both username and password');
            return;
        }

        try {
            const response = await AuthService.login({
                username: username.trim(),
                password: password.trim(),
                expiresInMins: 30,
            });

            console.log('Logged in user:', response.data);

            Alert.alert('Success', 'Login successful');
        } catch (error) {
            console.log('Login error:', error.response?.data || error.message);

            Alert.alert(
                'Error',
                error.response?.data?.message || 'Invalid username or password'
            );
        }

        setUsername('');
        setPassword('');
        navigation.replace('Home')
    };
    return (
        <View style={styles.container}>
            <InputBox
                placeholder="Enter username..."
                style={styles.input}
                value={username}
                onChangeText={setUsername}
            />

            <InputBox
                placeholder="Enter password..."
                style={styles.input}
                value={password}
                onChangeText={setPassword}
            />

            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text>Log In</Text>
            </TouchableOpacity>
        </View>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        backgroundColor: 'lightblue',
        padding: 10,
        borderRadius: 5
    }
})