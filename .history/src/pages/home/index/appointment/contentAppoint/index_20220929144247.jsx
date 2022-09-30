import {View ,Image ,Text} from '@tarojs/components';
import Taro,{getCurrentInstance} from '@tarojs/taro';
import { AtButton } from 'taro-ui'
import { useSelector } from 'react-redux';

import './index.scss'

export default function ContentAppoint() {
  const info=useSelector(state=>state.img)

  let data=JSON.parse(getCurrentInstance().router.params.data)
  // console.log(data)

  return (
    <View className='contentAppoint font-default-style'>
      <Image src={info?.img}></Image>
      <View className='title'>{data?.title}</View>
      <View className='time'>{data?.date} {data?.time}</View>
      <View className='tag'>{data?.type}</View>
      <View className='content-title'>内容介绍：</View>
      <View className='content' style={{marginTop:'8px'}}>
        <Text>
          {info?.content}
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
