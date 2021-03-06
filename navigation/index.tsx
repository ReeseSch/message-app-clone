
import { FontAwesome, Feather, AntDesign } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Pressable, Text, View, Image } from 'react-native';
import { Menu, Divider, Provider} from 'react-native-paper'
import { Auth } from 'aws-amplify'

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
// import TabOneScreen from '../screens/HomeScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import UserDropDown from '../components/UserDropDown'


import ChatRoomScreen from '../screens/ChatRoomScreen';
import HomeScreen from '../screens/HomeScreen'
import SettingsScreen from '../screens/SettingsScreen';
import UsersScreen from '../screens/UsersScreen'

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
      name="Home" 
      component={HomeScreen} 
      options={{ headerTitle: HomeHeader }}
      />
      <Stack.Screen name="ChatRoom" component={ChatRoomScreen} options={{ headerTitle: ChatHeader }} />
      <Stack.Screen name="UsersScreen" component={UsersScreen} options={{ title: "Users", }} />
      <Stack.Screen name="Settings" component={SettingsScreen} options={{ title: 'Settings'}} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

// sign out function
const logOut = () => {
  Auth.signOut()
}
// const navigation = useNavigation()


// Home Page Header
const HomeHeader = (props) => {
  const navigation = useNavigation()
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
      {/* <Image source={{ uri: 'https://drive.google.com/file/d/1zM7OvPgcFw2Vg1cWgHtdyItAwbhwYTed/view?usp=sharing'}}
        style={{ width: 30, height: 30, borderRadius: 30, paddingLeft:}}
      /> */}
      <Pressable onPress={() => navigation.navigate('UsersScreen')}>
        <FontAwesome name="user-circle-o" size={28} color="grey" />
      </Pressable>
      {/* <UserDropDown /> */}
      <Text style={{ flex: 1, fontWeight: 'bold', fontSize: 18, textAlign: 'center' }}>Your Chats</Text>
      <Feather name="camera" size={28} color="grey" style={{ paddingRight: 15}} />
      <Pressable onPress={() => navigation.navigate("Settings")}>
        <AntDesign name="edit" size={28} color="grey" style={{paddingRight: 24}} />
      </Pressable>
    </View>    
  )
}

// Chat Room Header
const ChatHeader = (props) => {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
      
      {/* <FontAwesome name="user-circle-o" size={28} color="grey" /> */}
      <Text style={{ flex: 1, fontWeight: 'bold', fontSize: 18, textAlign: 'center' }}>{props.children}</Text>
      <Feather name="camera" size={28} color="grey" style={{ paddingRight: 15}} />
      <AntDesign name="edit" size={28} color="grey" style={{paddingRight: 80}} />
    </View>
  )
} 


/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="TabOne"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
      }}>
      <BottomTab.Screen
        name="TabOne"
        component={HomeScreen}
        options={({ navigation }: RootTabScreenProps<'TabOne'>) => ({
          title: 'Tab One',
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate('Modal')}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}>
              <FontAwesome
                name="info-circle"
                size={25}
                color={Colors[colorScheme].text}
                style={{ marginRight: 15 }}
              />
            </Pressable>
          ),
        })}
      />
      <BottomTab.Screen
        name="TabTwo"
        component={TabTwoScreen}
        options={{
          title: 'Tab Two',
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}
