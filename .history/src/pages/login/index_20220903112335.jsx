// import {useEffect} from 'react';
import {View, Text, Input,Image} from '@tarojs/components';
import Taro from '@tarojs/taro';
import { AtButton } from 'taro-ui'
import './index.scss'

import logo from '../../assets/index-logo.png';
import name from '../../assets/index-name.png';

export default function Login() {

    const getUserInfo=()=>{
          Taro.getSetting({
            success:(res)=>{
                console.log(res)
                Taro.getUserProfile({
                lang: 'zh_CN',
                desc: "获取你的昵称、头像、地区及性别",
                success: response => {
                  console.log(response)
                },
                fail: (rej) => {
                    console.log(rej)
                //拒绝授权
                  console.error("您拒绝了请求");
                  return;
                }
              })
            }
          })
        }
       
    const login= ()=>{
        // await getUserInfo()
        console.log(111)
        Taro.switchTab('/pages/home/index/index')
    }
  

  return (
    <View className='login'>
        <View className='back-left'></View>
        <View className='back-right'></View>
        <Image className='logo' src={logo}></Image>
        <Image className='name' src={name}></Image>
        <Input
          className='input'
          name='phone'
          type='text'
          placeholder='输入您注册会员时的收集号码'
          placeholderClass='ipt-placeholder'
        //   value={this.state.value}
        //   onChange={this.handleChange.bind(this)}
        />

        <Input
          className='input ipt-bottom'
          name='verification'
          type='text'
          placeholder='输入短信验证码'
          placeholderClass='ipt-placeholder'
          //   value={this.state.value}
        //   onChange={this.handleChange.bind(this)}
        />
        <Text className='getCode font-default-style'>获取验证码</Text>
        <AtButton className='btn' type='primary' circle onClick={()=>Taro.navigateTo('/pages/home/index/index')}>登录</AtButton>
        {/* <View className='index-bottom-name'>COPYRIGHT@春山拾阅</View> */}
        
    </View>
  )
}
