import {useEffect} from 'react';
import {View} from '@tarojs/components';
import Taro from '@tarojs/taro';

export default function Index() {

    useEffect(()=>{
        setTimeout(()=>{
            Taro.switchTab({url:'/pages/home/login/index'})

        },1000)
    })

  return (
    <View>开屏页</View>
  )
}
