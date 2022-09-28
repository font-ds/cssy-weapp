// import {useState} from 'react';
import { View , Image  } from '@tarojs/components'
import Taro from '@tarojs/taro';


import './index.scss'

import lunbo from '../../../../../../assets/lunbo.png';

export default function BookItem () {
    return (
        <View className='book-item'>
          <Image src={lunbo}></Image>
          <View className='book-right'>
            <View>
              <View>
                <View className='title'>夏日终曲</View>
                <View className='name'>[美]安德烈·艾席蒙</View>
              </View>
            </View>
            <View className='discribe'>
              {'没有人喜欢孤独。但是我已经学会如何与孤独共存。没有人喜欢孤独。但是没有人喜欢孤独'.substring(0,30)}
            </View>
          </View>
        </View>
    )
  }

