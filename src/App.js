import 'react-native-gesture-handler';
import React from 'react';
import {
	SafeAreaView,
	StyleSheet,
	ScrollView,
	View,
	Text,
	StatusBar,
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer} from '@react-navigation/native';

const styles = StyleSheet.create({
	scrollView: {
		backgroundColor: Colors.lighter,
	},
	body: {
		backgroundColor: Colors.white,
	},
	section: {
		marginVertical: 20,
		paddingHorizontal: 20,
	},
	title: {
		color: Colors.black,
		fontSize: 24,
		fontWeight: '600',
		marginVertical: 5,
	},
	text: {
		color: Colors.dark,
		fontSize: 18,
		fontWeight: '400',
		marginVertical: 5,
	},
	strong: {
		fontWeight: '700',
	},
});

const App = () => {
	return (
		<NavigationContainer>
			<StatusBar barStyle="dark-content" />
			<SafeAreaView>
				<ScrollView
					contentInsetAdjustmentBehavior="automatic"
					style={styles.scrollView}>
					<View style={styles.body}>
						<View style={styles.section}>
							<Text style={styles.title}>React Native</Text>
							<Text style={styles.text}>
								Edit <Text style={styles.strong}>App.js</Text> to change this screen and then come back to see your edits.
							</Text>
						</View>
					</View>
				</ScrollView>
			</SafeAreaView>
		</NavigationContainer>
	);
};

export default App;
