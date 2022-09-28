import {useState} from 'react';
import {View, Text, Input,Image} from '@tarojs/components';
import Taro from '@tarojs/taro';
import {useDispatch} from 'react-redux';
import { AtButton } from 'taro-ui'
import request from '../../utils/request';
import './index.scss'

import logo from '../../assets/index-logo.png';
import name from '../../assets/index-name.png';

export default function Login() {

  const dispatch=useDispatch()

  const [phone,setPhone]=useState()
  const [code,setCode]=useState()
  const [psType,setPsType]=useState(0)
  const [downSecond,setDownSecond]=useState(null)

  // 获取用户信息
    const getUserInfo=(token)=>{
          Taro.getSetting({
            success:(res)=>{
                console.log(res)
                Taro.getUserProfile({
                lang: 'zh_CN',
                desc: "获取你的昵称、头像、地区及性别",
                success: response => {
                  Taro.setStorageSync('token',token)
                  console.log(response)
                  Taro.setStorageSync('info',response)
                  Taro.switchTab({url:'/pages/home/index/index'})
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
       
    // 登录
    const login= ()=>{
        request({
          url:'/front/login',
          method:'post',
          data:{
            phone,code
          },
          success:function(res){
            if(res.statusCode==200){
              if(res.status==1) setPsType(2)
              else getUserInfo(res.data.data)
            }
          },dispatch
        })
    }

    // 获取验证码
    const getCode=()=>{
      if(downSecond) return
      request({
        url:`/front/login?phone=${phone}`,
        success:function(res){
          if(res.statusCode==200){
            if(!res.data.status) setPsType(1)
            else downTime()
          }
        },dispatch
      })
    }

    // 验证码60秒时间
    const downTime=()=>{
      let second=5
      let timer=setInterval(()=>{
        if(second==1){
          setDownSecond(null)
          clearInterval(timer)
        } 
        else {
          setDownSecond(second--)
        } 
      },1000)
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
          type='number'
          placeholder='输入您注册会员时的收集号码'
          placeholderClass='ipt-placeholder'
          maxlength={11}
          onInput={e=>setPhone(e.detail.value)}
        />

        <Input
          className='input ipt-bottom'
          name='verification'
          type='text'
          placeholder='输入短信验证码'
          placeholderClass='ipt-placeholder'
          onInput={e=>setCode(e.detail.value)}
          maxlength={6}
        />
        <Text className='getCode font-default-style'
          style={{color:!downSecond?'#20C58D':'rgba(101, 124, 133, 0.6)'}}
          onClick={getCode}
        >{downSecond?downSecond+'后重试':'获取验证码'}</Text>
        <Text className='login-ps'>
          {!psType?null:psType==1?'会员账号不存在，请重试':'验证码错误，请重试'}
        </Text>
        <AtButton className='btn' type='primary' circle onClick={login}>登录</AtButton>
        {/* <View className='index-bottom-name'>COPYRIGHT@春山拾阅</View> */}
        
    </View>
  )
}
