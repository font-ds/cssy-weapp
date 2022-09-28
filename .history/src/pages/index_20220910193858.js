import {useEffect} from 'react';
import {View,Image} from '@tarojs/components';
import Taro, { getStorageSync } from '@tarojs/taro';
import {useDispatch} from 'react-redux'
import request from '../utils/request';
import './index.scss'

import logo from '../assets/index-logo.png';
import name from '../assets/index-name.png';

export default function Index() {
  const dispatch=useDispatch()

    useEffect(()=>{
        let token=getStorageSync('token')
        console.log(token)
        if(token){
          // 获取当前时间戳
          let time=new Date()
          if(time<token.token.expires_at) Taro.switchTab({url:'/pages/home/index/index'})
          else{
            request({
              url:'/front/login?refresh_token='+token.refresh_token,
              method:'put',
              useToken:false,
              success:function(res){
                if(res.statusCode==200){
                  Taro.setStorageSync('token',res.data.data)
                  Taro.switchTab({url:'/pages/home/index/index'})
                }else Taro.navigateTo({url:'/pages/login/index'})
              },dispatch
            })
          }
        }
        else Taro.navigateTo({url:'/pages/login/index'})
    })

  return (
    <View className='start-index'>
      <Image className='logo' src={logo}></Image>
      <Image className='title' src={name} ></Image>
      <View className='content'>读与会读之间，你需要一个春山拾阅</View>
      <View className='index-bottom-name'>COPYRIGHT@春山拾阅</View>
    </View>
  )
}
