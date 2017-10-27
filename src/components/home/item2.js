import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {Container, Content, Button, Icon} from 'native-base';

export default class Item2 extends Component {

	static navigationOptions = ({navigation}) => {
		let {state,goBack} = navigation;

		// 用来判断是否隐藏或显示header
		const visible= state.params.isVisible;
		let header;
		if (visible === true){
			header = null;
		}
		const headerStyle = {backgroundColor:'#4ECBFC'};
		const headerTitle = 'Scence2';
		const headerTitleStyle = {fontSize: 20,color:'white',fontWeight:'500'}
		const headerBackTitle = false;
		const headerLeft = (
			<TouchableOpacity onPress={() => goBack()} style={{flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', paddingLeft: 10}}>
				<View styale={{paddingLeft: 10}}>
					<Text>go Scence1!</Text>
				</View>
			</TouchableOpacity>
		);
		const headerRight = (
			<View style={{flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', paddingLeft: 10}}>
				<View>
					<Text>右侧 !</Text>
				</View>
			</View>
		);
		return {headerStyle,headerTitle,headerTitleStyle,headerBackTitle,headerLeft,headerRight,header}
	};

render() {
	console.log('...........scence2')
	const { navigate , goBack} = this.props.navigation;
	return (
		<Container style={styles.container}>
			<View>
				<Button small success onPress={() => navigate('Item3', {user: 'Lucy' })}>
					<Text> Click Me to Scence3! </Text>
				</Button>
			</View>
		</Container>
	)
}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	icon: {
		width: 26,
		height: 26,
	},
});
