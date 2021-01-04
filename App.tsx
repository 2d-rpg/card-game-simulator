import React, { ReactElement } from "react";
import {
  getFocusedRouteNameFromRoute,
  NavigationContainer,
  ParamListBase,
  RouteProp,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./src/screens/home/index";
import RoomScreen from "./src/screens/room/index";
import CreateRoomScreen from "./src/screens/create-room/index";
import RoomListScreen from "./src/screens/room-list/index";
import EditDeckScreen from "./src/screens/edit-deck/index";
import PreferencesScreen from "./src/screens/preferences/index";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
} from "@apollo/client";
import "reflect-metadata";
import AsyncStorage from "@react-native-async-storage/async-storage";

const customFetch = async (uri: string, options: RequestInit) => {
  try {
    const endpoint = await AsyncStorage.getItem("@endpoint");
    if (endpoint == null) {
      return fetch(`http://127.0.0.1${uri}`, options);
    } else {
      return fetch(`http://${endpoint}${uri}`, options);
    }
  } catch (error) {
    // 設定読み込みエラー
    console.log(error);
    return fetch(`http://127.0.0.1${uri}`, options);
  }
};
const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({ fetch: customFetch }),
  uri: "/graphql",
});

export default function App(): ReactElement {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerStyle: { backgroundColor: "#706fd3" },
            headerTintColor: "white",
            headerLeft: () => null,
          }}
        >
          <Stack.Screen
            name="Home"
            options={({ route }) => ({
              headerTitle: getHeaderTitle(route),
            })}
          >
            {() => (
              <Tab.Navigator initialRouteName="Home">
                <Tab.Screen name="Home" component={HomeScreen} />
                <Tab.Screen name="RoomList" component={RoomListScreen} />
                <Tab.Screen name="EditDeck" component={EditDeckScreen} />
              </Tab.Navigator>
            )}
          </Stack.Screen>

          <Stack.Screen name="Room" component={RoomScreen} />
          <Stack.Screen name="CreateRoom" component={CreateRoomScreen} />
          <Stack.Screen name="Preferences" component={PreferencesScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  );
}

export type RootStackParamList = {
  Home: undefined;
  Room: { id: number };
  CreateRoom: undefined;
  RoomList: undefined;
  EditDeck: undefined;
  Preferences: undefined;
};

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const getHeaderTitle = (route: RouteProp<ParamListBase, "Home">) => {
  const routeName = getFocusedRouteNameFromRoute(route);
  switch (routeName) {
    case "RoomList":
      return "RoomList";
    case "EditDeck":
      return "EditDeck";
    default:
      return routeName;
  }
};
