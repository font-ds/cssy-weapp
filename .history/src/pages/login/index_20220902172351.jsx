// import {useEffect} from 'react';
import {View, Text, Input,Image} from '@tarojs/components';
import Taro from '@tarojs/taro';
import { AtButton } from 'taro-ui'
import './index.scss'

import logo from '../../assets/index-logo.png';

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
        Taro.switchTab('/pages/home/index/index')
    }
  

  return (
    <View className='login'>
        <View className='back-left'></View>
        <View className='back-right'></View>
        <Image src={logo}></Image>
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
          className='input'
          name='verification'
          type='text'
          placeholder='输入短信验证码'
          placeholderClass='ipt-placeholder'
          style={{top:'404px'}}
        //   value={this.state.value}
        //   onChange={this.handleChange.bind(this)}
        />
        <Text className='getCode font-default-style'>获取验证码</Text>
        <AtButton className='btn' type='primary' circle onClick={login}>登录</AtButton>
        <View className='index-bottom-name'>COPYRIGHT@春山拾阅</View>
        
    </View>
  )
}
