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
import Dimensions from 'Dimensions';
const {width} = Dimensions.get('window');

import Item from './item'

export default class HomeScreen extends Component {

	static navigationOptions = {
		tabBarLabel: 'Home',
		title: 'Home header',
		tabBarIcon: ({ tintColor }) => (
		<Image
			source={require('../../dist/img/home.png')}
			style={[styles.icon, {tintColor: tintColor}]}
		/>
	)
};

	constructor(props) {
		super(props);
		this.state = {
			apple:[2, 4, 7, 2, 2, 7, 13, 16],
			organ: [6, 9, 9, 2, 8, 7, 17, 18],
		}
	}

	render() {
		const option = {
			//点击某一个点的数据的时候，显示出悬浮窗
			tooltip : {
				trigger: 'axis'
			},
			//可以手动选择现实几个图标
			legend: {
				data:['苹果','橘子']
			},
			//各种表格
			toolbox: {
				//改变icon的布局朝向
				//orient: 'vertical',
				show : true,
				showTitle:true,
				feature : {
					//show是否显示表格，readOnly是否只读
					dataView : {show: true, readOnly: false},
					magicType : {
						//折线图  柱形图    总数统计 分开平铺
						type: ['line', 'bar','stack','tiled'],
					},

				}
			},
			xAxis : [
				{
					//就是一月份这个显示为一个线段，而不是数轴那种一个点点
					boundaryGap:true,
					type : 'category',
					name : '时间',
					data : ['1月','2月','3月','4月','5月','6月','7月','8月']
				}
			],
			yAxis : [
				{
					type : 'value',
					name : '销量(kg)'
				}
			],
			//图形的颜色组
			color:['rgb(249,159,94)','rgb(67,205,126)'],
			//需要显示的图形名称，类型，以及数据设置
			series : [
				{
					name:'苹果',
					//默认显
					type:'bar',
					data:this.state.apple
				},
				{
					name:'橘子',
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
							console.log('..........go'); // 打印值为：'回调参数'
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
