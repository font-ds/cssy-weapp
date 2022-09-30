// import {useState} from 'react';
import { View , Image  } from '@tarojs/components'
import Taro from '@tarojs/taro';
import { useDispatch } from 'react-redux';

import './index.scss'


export default function BookItem(props) {
  // const dispatch=useDispatch()
  const data = props.data
  
  console.log(data)
    return (
      <View className='book-item' onClick={() => { let newData = {id:data.id}; Taro.navigateTo({ url: '/pages/home/index/borrow/bookDetail/index?data=' + data }) }}>
          <Image src={data?.cover}></Image>
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

