import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import store from 'store/store';
import HomeScreen from 'views/HomeScreen';
import PostDetailScreen from 'views/PostDetailScreen';
import SubredditScreen from 'views/SubredditScreen';
import UserScreen from 'views/UserScreen';

const Stack = createStackNavigator();

function App() {
	return (
		<NavigationContainer>
			<Provider store={store}>
				<StatusBar barStyle="dark-content" />
				<Stack.Navigator
					initialRouteName="Home"
					screenOptions={{
						headerTitle: null,
						headerBackTitleVisible: false,
						// headerTransparent: true,
						// headerStyle: {
						//
						// },
					}}
				>
					<Stack.Screen name="Home" component={HomeScreen} />
					<Stack.Screen name="PostDetail" component={PostDetailScreen} />
					<Stack.Screen name="Subreddit" component={SubredditScreen} />
					<Stack.Screen name="User" component={UserScreen} />
				</Stack.Navigator>
			</Provider>
		</NavigationContainer>
	);
}

export default App;
