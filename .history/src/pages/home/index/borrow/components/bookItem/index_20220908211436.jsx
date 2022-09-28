// import {useState} from 'react';
import { View , Image  } from '@tarojs/components'
import Taro from '@tarojs/taro';


import './index.scss'

import lunbo from '../../../../../../assets/lunbo.png';

export default function BookItem (props) {
  const data=props.data
    return (
        <View className='book-item' onClick={()=>Taro.navigateTo({url:'/pages/home/index/borrow/bookDetail/index'})}>
          <Image src={lunbo}></Image>
          <View className='book-right'>
            <View>
              <View>
                <View className='title'>{data?.title}</View>
                <View className='name'>{data?.author}</View>
              </View>
            </View>
            <View className='discribe'>
              {data?.title.substring(0,30)}
            </View>
          </View>
        </View>
    )
  }

