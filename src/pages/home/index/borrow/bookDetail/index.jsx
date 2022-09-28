import {useState} from 'react';
import { View, Text ,Image } from '@tarojs/components'
import Taro from '@tarojs/taro';
import { AtActionSheet,AtButton } from "taro-ui"

import './index.scss'
import lunbo from '../../../../../assets/lunbo.png';

export default function Index () {
  
  const [borrowModal,setBorrowModal]=useState(false)

    return (
      <View className='book-detail font-default-style'>
        <View style={{display:'flex',flexDirection:'column',flex:1}}>
          <View className='detail-item'>
            <Image src={lunbo}></Image>
            <View className='book-right'>
              <View>
                <View>
                  <View className='book-title'>夏日终曲</View>
                  <View className='name'>[美]安德烈·艾席蒙</View>
                </View>
              </View>
              <View className='discribe'>
                {'没有人喜欢孤独。但是我已经学会如何与孤独共存。没有人喜欢孤独。但是没有人喜欢孤独'.substring(0,30)}
              </View>
            </View>
          </View>

          <View className='title'>图书介绍</View>
          <View className='detail-content'>
            没有人喜欢孤独。但是我已经学会如何与孤独共存。
          </View>
          </View>
        <View>
          <AtButton className='btn'  type='primary' onClick={()=>setBorrowModal(true)}>确 认 预 约</AtButton>
        </View>

        <AtActionSheet isOpened={borrowModal} className='book-time'>
          <View className='borrow-title'>借阅时长选择</View>
          <Text className='close' onClick={()=>setBorrowModal(false)}>X</Text>

          <View className='borrow-choose-time'>1周</View>
          <View className='borrow-choose-time'>2周</View>
          <View className='borrow-choose-time'>3周</View>
          <View className='borrow-choose-time'>4周</View>

          <AtButton className='borrow-btn'  type='primary' 
            onClick={()=>Taro.navigateTo({url:'/pages/home/index/components/appointDetail/index'})}
          >下 一 步</AtButton>
          
        </AtActionSheet>

      </View>
    )
  }

