// import {useState} from 'react';
import { View , Image,Text  } from '@tarojs/components'
import Taro from '@tarojs/taro';
import { useDispatch } from 'react-redux';
import { set } from '../../../../../../store/img';

import './index.scss'


export default function BookItem(props) {

  const dispatch=useDispatch()
  const data = props.data
  
  console.log(data)
  if (props.flag) { 
    return (<View className='recommend-view'>
    <Image src={data?.cover}></Image>
    <View className='recommend-right'>
      <View className='recommend-title'><Text className='font-default-style'>{data?.title}</Text><View className='font-default-style'>新上架</View></View>
      <View className='recommend-info'>
        <View>{data?.author}</View>
          <View>{ data?.language}</View>
      </View>
    </View>
  </View>)
  }
  else return (
      <View className='book-item' onClick={() => {
        dispatch(set({url:data.cover,content:data.introduction}))
        let newData = encodeURIComponent(JSON.stringify({ id: data.id, author: data.author, tags: data.tags,title:data.title }))

        Taro.navigateTo({ url: '/pages/home/index/borrow/bookDetail/index?data=' + newData })
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

