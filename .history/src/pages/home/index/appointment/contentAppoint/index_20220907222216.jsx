import {View ,Image ,Text} from '@tarojs/components';
import Taro,{getCurrentInstance} from '@tarojs/taro';
import { AtButton } from 'taro-ui'

import './index.scss'
import lunbo from '../../../../../assets/lunbo.png';

export default function ContentAppoint() {

  let data=JSON.parse(getCurrentInstance().router.params.data)
  console.log(data)

  return (
    <View className='contentAppoint'>
      <Image src={lunbo}></Image>
      <View className='title'>{data?.title}</View>
      <View className='tag'>{data?.type}</View>
      <View className='time'>{data?.date} {data?.time}</View>
      <View style={{marginTop:'13px'}}>内容介绍：</View>
      <View style={{marginTop:'8px'}}>
        <Text>
          {data?.content}
        </Text>
      </View>

      <AtButton className='btn'  type='primary' 
        onClick={()=>Taro.navigateTo({url:'/pages/home/index/components/appointDetail/index'})}
      >
        确 认 预 约
      </AtButton>
      <View className='num'>已预约{data?.reserved}/{data?.maximum}</View>
    </View>
  )
}
