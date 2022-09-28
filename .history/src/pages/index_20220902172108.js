import {useEffect} from 'react';
import {View,Image} from '@tarojs/components';
import Taro from '@tarojs/taro';
import './index.scss'

import logo from '../assets/index-logo.png';

export default function Index() {

    useEffect(()=>{
        // setTimeout(()=>{
        //     Taro.navigateTo({url:'/pages/login/index'})

        // },1000)
    })

  return (
    <View className='start-index'>
      <Image src={logo}></Image>
      <View className='title'>春山拾阅</View>
      <View className='content'>读与会读之间，你需要一个春山拾阅</View>
      <View className='index-bottom-name'>COPYRIGHT@春山拾阅</View>
    </View>
  )
}
