import Nerv from "nervjs";
import Taro from "@tarojs/taro-h5";
import { View, Text } from '@tarojs/components';
export default class Timer extends Taro.Component {
  render() {
    return <View className="timer">
				<Text>
					TestComp
				</Text>
			</View>;
  }
}