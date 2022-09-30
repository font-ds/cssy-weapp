// import {useState} from 'react';
import { View , Image  } from '@tarojs/components'
import Taro from '@tarojs/taro';
import { useDispatch } from 'react-redux';
import { set } from '../../../../../../store/img';

import './index.scss'


export default function BookItem(props) {

  const dispatch=useDispatch()
  const data = props.data
  
  console.log(data)
    return (
      <View className='book-item' onClick={() => {
        dispatch(set({url:data.cover,content:data.introduction}))
        let newData = { id: data.id, author: data.newData, tags: data.tags,title:data.title }

        Taro.navigateTo({ url: '/pages/home/index/borrow/bookDetail/index?data=' + JSON.stringify(newData) })
      }}
      >
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

