import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/LoginScreen";
import HomeScreen from "../screens/HomeScreen";
import ProductDetail from "../screens/ProductDetail";

const Stack = createNativeStackNavigator();

const Screen = () => {
  return (   
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="ProductDetail" component={ProductDetail} />
      </Stack.Navigator>
  );
};

const Navigation = () => {
  return (
    <NavigationContainer>
      <Screen />
    </NavigationContainer>
  );
};

export default Navigation;