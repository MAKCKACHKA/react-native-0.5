import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Button,
  Pressable,
  Image,
  TouchableOpacity,
} from "react-native";
import { useFonts } from "expo-font";

// import CreatePostsScreen from "./Screens/PostsScreen";
import SVGImg from "./assets/svg/logOut.svg";
// import logOutSvgComponent from "./assets/svg/logOut.svg";
// import logOutSvgComponent from "./assets/svgComponent/svgLogOut";
import { SvgXml } from "react-native-svg";

import LoginScreen from "./Screens/LoginScreen";
import RegistrationScreen from "./Screens/RegistrationScreen";
import Home from "./Screens/Home";
import CommentsScreen from "./Screens/CommentsScreen";
import ProfileScreen from "./Screens/ProfileScreen";
import CreatePostsScreen from "./Screens/CreatePostsScreen";

import PostsScreen from "./Screens/PostsScreen";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

const MainStack = createStackNavigator();
const App = () => {
  const [fontsLoaded] = useFonts({
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Black": require("./assets/fonts/Roboto-Black.ttf"),
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
  });
  // const navigation = useNavigation();

  // const [title, setTitle] = useState("Home");

  return (
    <View style={styles.container}>
      {/* <SVGImg width={200} height={200} />
      <SvgXml xml={xml1} width="10%" height="10%" /> */}
      {/* <ImageBackground
        source={require("./assets/Photo BG.jpg")}
        resizeMode="cover"
        style={styles.image}
      > */}
      {/* </ImageBackground> */}

      {/* <RegistrationScreen /> */}
      {/* <LoginScreen /> */}
      {/* <Home /> */}
      {/* <CommentsScreen /> */}
      {/* <ProfileScreen /> */}
      {/* <CreatePostsScreen /> */}

      <NavigationContainer>
        <MainStack.Navigator
          initialRouteName="Login"
          screenOptions={{ headerTitleAlign: "center" }}
        >
          <MainStack.Screen
            name="Login"
            component={LoginScreen}
            // options={{ title: "Start screen" }}
            options={{
              headerShown: false,
            }}
          />
          <MainStack.Screen
            name="Registration"
            component={RegistrationScreen}
            options={{
              headerShown: false,
            }}
          />
          <MainStack.Screen
            name="Home"
            component={Home}
            options={{
              title: "Home",
              headerStyle: {
                // justifyContent: "center",
                // backgroundColor: "#f4511e",
                // height: 1,
                // display: "none",
                // marginadding: 100,
                // alignItems: "center",
              },
              // headerTintColor: "#fff",
              headerTitleStyle: {
                left: "50vh",
                // fontWeight: "bold",
                fontSize: 26,
              },
              headerRight: () => (
                <TouchableOpacity
                  // onPress={() => navigation.navigate("Login")}
                  style={styles.headerRight}
                >
                  <Image
                    style={[styles.svg]}
                    source={require("./assets/favicon.png")}
                  />
                </TouchableOpacity>
              ),
            }}
          />
          <MainStack.Screen name="Comments" component={CommentsScreen} />
          <MainStack.Screen name="Profile" component={ProfileScreen} />
          <MainStack.Screen name="PostsScreen" component={PostsScreen} />
          <MainStack.Screen name="Create Posts" component={CreatePostsScreen} />
        </MainStack.Navigator>
      </NavigationContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  headerRight: {
    // position: "absolute",
    // marginRight: 20,
    // top: 22,
    right: 16,
  },
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
});

export default App;
