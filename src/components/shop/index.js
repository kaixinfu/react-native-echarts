


import React, { Component } from 'react';
import {
	AppRegistry,
	StyleSheet,
	Text,
	View,
	ScrollView,
	Image,
	Dimensions
} from 'react-native';
import Echarts from 'native-echarts';
const {width} = Dimensions.get('window');

const chartsTitle = '分析图';
const dataML = [ [5,5,5,5,5,5] ];
const dataJC = [ [5,5,2,2,4,4] ];
const lineStyle = {
	normal: {
		width: 1,
		opacity: 0.5
	}
};
const xData = ['发球', '速度', '经验', '防守', '力量', '技术'];
const radarOption = {
	backgroundColor: 'rgba(178,123,122,0.3)',
	title: {
		text: chartsTitle,
		left: 'center',
		textStyle: {
			color: '#000',
			fontSize: 30
		},
		top:25
	},
	legend: {
		bottom: 5,
		left: 'center',
		data: ['霍华德', '奥尼尔'],
		itemGap: 10,
		textStyle: {
			color: '#000',
			fontSize: 30
		},
		selectedMode: 'single',
		inactiveColor: '#777'
	},
	
	radar: {
		indicator: [
			{name: '发球', max: 15},
			{name: '速度', max: 5},
			{name: '经验', max: 25},
			{name: '防守', max: 5},
			{name: '力量', max: 35},
			{name: '技术', max: 55}
		],
		radius: '60%',
		shape: 'polygon',
		splitNumber: 5,
		name: {
			textStyle: {
				color: '#000',
				fontSize: 40
			}
		},
		splitLine: {
			lineStyle: {
				color: 'white'
			}
		},
		splitArea: {
			show: true,
			areaStyle: {
				color: ['rgba(210,177,203,0.5)','rgba(210,177,203,0.5)']
			}
		},
		axisLine: {
			lineStyle: {
				color: 'white'
			}
		}
	},
	series: [
		{
			name: '马龙',
			type: 'radar',
			lineStyle: lineStyle,
			data: dataML,
			symbol: 'none',
			itemStyle: {
				normal: {
					color: '#6a7bb8'
				}
			},
			areaStyle: {
				normal: {
					opacity: 0.7
				}
			}
		},
		{
			name: '吉村真晴',
			type: 'radar',
			lineStyle: lineStyle,
			data: dataJC,
			symbol: 'none',
			itemStyle: {
				normal: {
					color: '#6a7bb8'
				}
			},
			areaStyle: {
				normal: {
					opacity: 0.7
				}
			}
		}
	]
};

export default class Shop extends Component {
	static navigationOptions = {
		tabBarLabel: '分析图',
		title: 'Shop header',
		tabBarIcon: ({ tintColor }) => (
			<Image
				source={require('../../dist/img/shop.png')}
				style={[styles.icon, {tintColor: tintColor}]}
			/>)
	};
	render() {
		return (
			<ScrollView contentContainerStyle={{top:0,paddingBottom:0}}>
				<Echarts option={radarOption} height={800} width={width} />
			</ScrollView>
		
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	icon: {
		width: 26,
		height: 26,
	},
});
