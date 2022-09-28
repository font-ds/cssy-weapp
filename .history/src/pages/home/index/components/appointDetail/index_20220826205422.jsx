import {View ,Text} from '@tarojs/components';
import { AtButton } from 'taro-ui'
import './index.scss'

export default function AppointDetail() {
  return (
    <View className='appointDetail'>
      <View>请您仔细阅读下方预约说明后确认</View>
      <View>预约须知：</View>
      <View>
        <Text>
          你要记得这些事你要记得这些事你要记得这些事你要记得这些事你要记得这些事你要记得这些事你要记得这些事你要记得这些事你要记得这些事
        </Text>
      </View>
      <View className='message'>
        <View>预约项目：亲子阅读</View>
        <View>预约时间：2022年8月17日 14:00-15:00</View>
        <View>预约门店：春山拾阅儿童图书馆 (重庆龙湖礼嘉天街A馆3F24-25)</View>
      </View>
      <AtButton className='btn'  type='primary'>确 认 预 约</AtButton>
    </View>
  )
}
