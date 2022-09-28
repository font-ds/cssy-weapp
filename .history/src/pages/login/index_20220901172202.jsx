// import {useEffect} from 'react';
import {View, Text} from '@tarojs/components';
import Taro from '@tarojs/taro';
import { AtInput, AtButton } from 'taro-ui'
import './index.scss'

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
       
    const login=async ()=>{
        // await getUserInfo()
        Taro.switchTab('/pages/home/index/index')
    }
  

  return (
    <View className='login'>
        <AtInput
          className='input'
          name='phone'
          type='text'
          placeholder='输入您注册会员时的手机号码'
          placeholderTextColor='lightgrey'
        //   value={this.state.value}
        //   onChange={this.handleChange.bind(this)}
        />

        <AtInput
          clear
          className='input'
          name='verification'
          type='text'
          placeholder='输入短信验证码'
          placeholderTextColor='lightgrey'
        //   value={this.state.value}
        //   onChange={this.handleChange.bind(this)}
        >
            <Text>获取验证码</Text>
        </AtInput>
        <AtButton className='btn' type='primary' circle onClick={login}>登录</AtButton>
    </View>
  )
}
