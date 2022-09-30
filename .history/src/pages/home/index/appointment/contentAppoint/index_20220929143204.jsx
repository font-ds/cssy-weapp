import {View ,Image ,Text} from '@tarojs/components';
import Taro,{getCurrentInstance} from '@tarojs/taro';
import { AtButton } from 'taro-ui'

import './index.scss'
import lunbo from '../../../../../assets/lunbo.png';

export default function ContentAppoint() {
  let newData = decodeURIComponent(getCurrentInstance().router.params.data)
  console.log(newData, '解码')
  console.log(JSON.parse(newData),'数据')
  // let data=JSON.parse(getCurrentInstance().router.params.data)
  // console.log(data)
  let data = {}

  return (
    <View className='contentAppoint font-default-style'>
      <Image src={lunbo}></Image>
      <View className='title'>{data?.title}</View>
      <View className='time'>{data?.date} {data?.time}</View>
      <View className='tag'>{data?.type}</View>
      <View className='content-title'>内容介绍：</View>
      <View className='content' style={{marginTop:'8px'}}>
        <Text>
          {data?.content}
        </Text>
      </View>

      <AtButton className='btn'  type='primary' 
        onClick={() => {
          let goData=encodeURIComponent(JSON.stringify(data))
          Taro.navigateTo({ url: '/pages/home/index/components/appointDetail/index?type=1&data=' + goData })
        }}
      >
      </AtButton>
      <View className='num'>已预约{data?.reserved}/{data?.maximum}</View>
    </View>
  )
}
