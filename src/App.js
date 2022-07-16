import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text } from "react-native";
import { Provider } from "react-redux";
import { store } from "./store/store";
import Title from "./pages/Title";

const Stack = createNativeStackNavigator();

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
    </View>
  );
}

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Title"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Title" component={Title} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
