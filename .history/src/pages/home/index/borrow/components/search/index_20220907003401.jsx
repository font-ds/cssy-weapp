// import {useState} from 'react';
import { View, Image, ScrollView } from '@tarojs/components'

import './index.scss'
// import Loading from '../../../../components/loading/index';
import lunbo from '../../../../../assets/lunbo.png';

export default function Index () {
  

    return (
  
        <ScrollView  scrollY enhanced showScrollbar={false} className='scroll-view'>
          <View className='book-item'>
            <Image src={lunbo}></Image>
            <View className='book-right'>
              <View>
                <View>
                  <View>夏日终曲</View>
                  <View>[美]安德烈·艾席蒙</View>
                </View>
              </View>
              <View>
                {'没有人喜欢孤独。但是我已经学会如何与孤独共存。没有人喜欢孤独。但是没有人喜欢孤独'.substring(0,30)}
              </View>
            </View>
          </View>
        </ScrollView>
    )
  }

