import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaView, StyleSheet, View, Text, StatusBar } from 'react-native';
import { NavigationContainer} from '@react-navigation/native';

const styles = StyleSheet.create({
	body: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	section: {
		marginVertical: 20,
		paddingHorizontal: 20,
	},
	title: {
		color: '#000',
		fontSize: 24,
		fontWeight: '600',
		marginVertical: 5,
	},
	text: {
		color: '#333',
		fontSize: 18,
		fontWeight: '400',
		marginVertical: 5,
	},
	strong: {
		fontWeight: '700',
	},
});

function App() {
	return (
		<NavigationContainer>
			<StatusBar barStyle="dark-content" />
			<SafeAreaView style={styles.body}>
				<View style={styles.section}>
					<Text style={styles.title}>React Native</Text>
					<Text style={styles.text}>
						Edit <Text style={styles.strong}>App.js</Text> to change this screen and then come back to see your edits.
					</Text>
				</View>
			</SafeAreaView>
		</NavigationContainer>
	);
};

export default App;
