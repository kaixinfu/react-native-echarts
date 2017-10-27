# react-native-echarts

## Contains

- [x] [react-native](http://reactnative.cn/)
- [x] [native-echarts](https://www.npmjs.com/package/native-echarts)
- [x] native-echarts Demo

## Warning

> `@remobile/react-native-echarts` ??react class???????????????

### ????native-echarts

>  npm install native-echarts --save

| ??  | ?? |
| ------------- | ------------- |
|  option (object)  | echarts??????  |
|  width (number) | ?????  |
|  height (number)| ?????

```
import React, { Component } from 'react';
import {
    AppRegistry,
	StyleSheet,
	Text,
	View,
	Platform,
	Image
} from 'react-native';

import {Container, Content, Button} from 'native-base';
import Echarts from 'native-echarts';

	constructor(props) {
		super(props);
		this.state = {
			apple:[2, 4, 7, 2, 2, 7, 13, 16],
			organ: [6, 9, 9, 2, 8, 7, 17, 18],
		}
	}

	render() {
		const option = {
			//???????????????????
			tooltip : {
				trigger: 'axis'
			},
			//????????????
			legend: {
				data:['??','??']
			},
			//????
			toolbox: {
				//??icon?????
				//orient: 'vertical',
				show : true,
				showTitle:true,
				feature : {
					//show???????readOnly????
					dataView : {show: true, readOnly: false},
					magicType : {
						//???  ???    ???? ????
						type: ['line', 'bar','stack','tiled'],
					},

				}
			},
			xAxis : [
				{
					//??????????????????????????
					boundaryGap:true,
					type : 'category',
					name : '??',
					data : ['1?','2?','3?','4?','5?','6?','7?','8?']
				}
			],
			yAxis : [
				{
					type : 'value',
					name : '??(kg)'
				}
			],
			//??????
			color:['rgb(249,159,94)','rgb(67,205,126)'],
			//???????????????????
			series : [
				{
					name:'??',
					//???
					type:'bar',
					data:this.state.apple
				},
				{
					name:'??',
					type:'bar',
					data:this.state.organ
				}
			]
		};
		const { navigate } = this.props.navigation;
		return (
			<View style={styles.container}>
			<View>
				<Echarts option={option} height={1000} width={width}/>
			</View>
				<View style={{justifyContent: 'center'}}>
				<View>
						<Button small success onPress={() => navigate('Item', {callback: (data)=>{
							console.log('..........go'); // ?????'????'
						} ,user: 'Lucy' })}>
							<Text> Click Me to scence1! </Text>
						</Button>
				</View>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex:1,
	},
	icon: {
		width: 26,
		height: 26,
	},
	titleView:{
		height:Platform.OS=='ios'?64:44,
		paddingTop:Platform.OS=='ios'?14:0,
		backgroundColor:'#ff6400',
		justifyContent: 'center',
		alignItems: 'center',
	},
	title:{
		color:'white',
		fontSize:30,
		textAlign:'center',
	},
});

```
## Install

> `git clone git@github.com:liukaixin01/react-native-echarts.git`

> `npm install`

## Dev

> ios `react-native run-ios`

> android `react-native run-android`
