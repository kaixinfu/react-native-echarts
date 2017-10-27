


import React, { Component } from 'react';
import {
	AppRegistry,
	StyleSheet,
	Text,
	View,
	ScrollView,
	Image,
	Dimensions,
	Platform
} from 'react-native';
import Echarts from 'native-echarts';
const {width} = Dimensions.get('window');

const chartsTitle = '走势图';
const dataML = [ [5,5,5,5,5,5] ];
const dataJC = [ [5,5,2,2,4,4] ];
const lineStyle = {
	normal: {
		width: 1,
		opacity: 0.5
	}
};
const xData = ['发球', '速度', '经验', '防守', '力量', '技术'];

const lineOption = {
	title: {
		text: chartsTitle,
		left: 'center'
	},
	tooltip: {
		trigger: 'axis'
	},
	xAxis: {
		data: xData
	},
	yAxis: {
		splitLine: {
			show: false
		}
	},
	toolbox: {
		left: 'right',
		feature: {
			dataZoom: {
				yAxisIndex: 'none'
			},
			restore: {},
			saveAsImage: {}
		}
	},
	dataZoom: [{
		startValue: '发球'
	}, {
		type: 'inside'
	}],
	visualMap: {
		top: 30,
		left: 'center',
		orient: 'horizontal',
		pieces: [{
			gt: 0,
			lte: 1,
			color: '#096'
		}, {
			gt: 1,
			lte: 2,
			color: '#ffde33'
		}, {
			gt: 2,
			lte: 3,
			color: '#ff9933'
		}, {
			gt: 3,
			lte: 4,
			color: '#cc0033'
		}, {
			gt: 4,
			lte: 5,
			color: '#660099'
		}],
		outOfRange: {
			color: '#999'
		}
	},
	series : [
		{
			name:'马龙',
			type:'line',
			data:[5,5,5,5,5,5],
			itemStyle: {
				normal: {
					color: 'red'
				}
			},
			markLine: {
				silent: true,
				data: [{
					yAxis: 1
				}, {
					yAxis: 2
				}, {
					yAxis: 3
				}, {
					yAxis: 4
				}]
			}
		},
		{
			name:'吉村真晴',
			type:'line',
			data:[5,5,2,2,4,4]
		}
	]
};

export default class Mine extends Component {
	static navigationOptions = {
		tabBarLabel: '走势图',
		title: 'Mine header',
		tabBarIcon: ({ tintColor }) => (
			<Image
				source={require('../../dist/img/mine.png')}
				style={[styles.icon, {tintColor: tintColor}]}
			/>)
	};
	render() {
		return (
			<ScrollView contentContainerStyle={{top:0,paddingBottom:0}}>
				<Echarts option={lineOption} height={500} width={width} />
			</ScrollView>
		
		);
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
	titleView:{
		height:Platform.OS=='ios'?64:44,
		paddingTop:Platform.OS=='ios'?14:0,
		backgroundColor:'#ff6400',
		justifyContent: 'center',
		alignItems: 'center',
	},
});
