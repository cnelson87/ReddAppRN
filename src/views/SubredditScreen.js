import React from 'react';
import { SafeAreaView, View, Text, Button } from 'react-native';

import axios from 'config/axios';
import styles from 'styles/styles';

class SubredditScreen extends React.Component {

	state = {
		sidebarData: null
	};

	render() {
		const { navigation } = this.props;
		const { sidebarData } = this.state;

		return (
			<SafeAreaView style={styles.body}>
				<View style={styles.section}>
					<Text style={styles.title}>Subreddit Screen</Text>
					<Text style={styles.text}>
						Edit <Text style={styles.strong}>/views/SubredditScreen.js</Text> to change this screen and then come back to see your edits.
					</Text>
					<Button
						title="Go to Home"
						onPress={() => navigation.popToTop()}
					/>
					<Button
						title="Go to PostDetail"
						onPress={() => navigation.push('PostDetail')}
					/>
					<Button
						title="Go to Subreddit"
						onPress={() => navigation.push('Subreddit')}
					/>
					<Button
						title="Go to User"
						onPress={() => navigation.push('User')}
					/>
				</View>
			</SafeAreaView>
		);
	}
}

export default SubredditScreen;