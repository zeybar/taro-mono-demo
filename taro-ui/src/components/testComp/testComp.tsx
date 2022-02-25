import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'



export default class Timer extends Component<any, any> {

	render() {
		return (
			<View className='timer'>
				<Text>
					TestComp
				</Text>
			</View>
		)
	}
}
