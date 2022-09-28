import {useState} from 'react';
import {View, Text, Input,Image} from '@tarojs/components';
import Taro from '@tarojs/taro';
import {useDispatch} from 'react-redux';
import { AtButton } from 'taro-ui'
import request from '../../utils/request';
import './index.scss'

import logo from '../../assets/index-logo.png';
import name from '../../assets/index-name.png';
import username from '../../assets/username.png'
import password from '../../assets/password.png'

export default function Login() {

  const dispatch=useDispatch()

  const [phone,setPhone]=useState()
  const [code,setCode]=useState()
  const [psType,setPsType]=useState(0)
  const [downSecond,setDownSecond]=useState(null)

  // 获取用户信息
    const getUserInfo=(token)=>{
          Taro.getSetting({
            success:()=>{
                Taro.getUserProfile({
                lang: 'zh_CN',
                desc: "获取你的昵称、头像、地区及性别",
                success: response => {
                  // 本地存储token
                  Taro.setStorageSync('token',token)
                  // 本地存储微信信息
                  Taro.setStorageSync('info',response)
                  Taro.switchTab({url:'/pages/home/index/index'})
                },
                fail: () => {
                //拒绝授权
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
          useToken:false,
          data:{
            phone,code
          },
          success:function(res){
            console.log(res)
            // if(res.statusCode==200){
              if(res.status==1) setPsType(2)
              else if(!res.status) setPsType(1)
              else getUserInfo(res.data.data)
            // }
          },dispatch
        })
    }

    // 验证码60秒时间
    const downTime=()=>{
      let second=59
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


    // 临时限制
    let canGetCode=true
    // 获取验证码
    const getCode=()=>{
      if(!canGetCode) return

      if(downSecond) return

      const regExp = new RegExp("^1[3578]\\d{9}$")
      if(!regExp.test(phone)) return setPsType(3)

      canGetCode=false

      request({
        url:`/front/login?phone=${phone}`,
        useToken:false,
        success:function(res){
          console.log(res)
          if(res.statusCode==200){
            if(res.data.status) setPsType(1)
            else downTime()
            canGetCode=true
          }
        },dispatch
      })
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
        <Image className='username-icon' src={username}></Image>
        <Input
          className='input ipt-bottom'
          name='verification'
          type='text'
          placeholder='输入短信验证码'
          placeholderClass='ipt-placeholder'
          onInput={e=>setCode(e.detail.value)}
          maxlength={6}
        />
        <Image className='password-icon' src={password}></Image>
        <Text className='getCode font-default-style'
          style={{color:!downSecond?'#20C58D':'rgba(101, 124, 133, 0.6)'}}
          onClick={getCode}
        >{downSecond?downSecond+'后重试':'获取验证码'}</Text>
        <Text className='login-ps'>
          {!psType?null:psType==1?'会员账号不存在，请重试':psType==2?'验证码错误，请重试':'请输入正确的手机号'}
        </Text>
        <AtButton className='btn' type='primary' circle onClick={login}>登录</AtButton>
        {/* <View className='index-bottom-name'>COPYRIGHT@春山拾阅</View> */}
        
    </View>
  )
}
