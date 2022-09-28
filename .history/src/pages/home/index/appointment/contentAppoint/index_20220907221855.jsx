import {View ,Image ,Text} from '@tarojs/components';
import Taro,{getCurrentInstance} from '@tarojs/taro';
import { AtButton } from 'taro-ui'

import './index.scss'
import lunbo from '../../../../../assets/lunbo.png';

export default function ContentAppoint() {

  let data=getCurrentInstance().router.params.data


  return (
    <View className='contentAppoint'>
      <Image src={lunbo}></Image>
      <View className='title'>《牧羊少年的奇幻漂流》精品剧场演绎</View>
      <View className='tag'>手偶剧</View>
      <View className='time'>07月23日 13:00-15:00</View>
      <View style={{marginTop:'13px'}}>内容介绍：</View>
      <View style={{marginTop:'8px'}}>
        <Text>
          这是一段内容介绍这是一段内容介绍这是一段内容介绍这是一段内容介绍这是一段内容介绍这是一段内容介绍这是一段内容介绍这是一段内容介绍这是一段内容介绍
        </Text>
      </View>

      <AtButton className='btn'  type='primary' 
        onClick={()=>Taro.navigateTo({url:'/pages/home/index/components/appointDetail/index'})}
      >
        确 认 预 约
      </AtButton>
      <View className='num'>已预约23/45</View>
    </View>
  )
}
