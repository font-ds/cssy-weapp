import {useState} from 'react';
import { View, Text ,Image } from '@tarojs/components'
import Taro, { getCurrentInstance } from '@tarojs/taro';
import { AtActionSheet,AtButton } from "taro-ui"
import { useSelector } from 'react-redux';

import './index.scss'

export default function Index () {
  const [borrowModal, setBorrowModal] = useState(false)
  const [week,setWeek]=useState(0)
  const data = JSON.parse(decodeURIComponent(getCurrentInstance().router.params.data))
  console.log('data',data)
  const info=useSelector(state=>state.img)
  
    return (
      <View className='book-detail font-default-style'>
        <View style={{display:'flex',flexDirection:'column',flex:1}}>
          <View className='detail-item'>
            <Image src={info.url}></Image>
            <View className='book-right'>
              <View>
                <View>
                  <View className='book-title'>{ data.title }</View>
                  <View className='name'>{data.author}</View>
                  <View style={{display:'flex'}}>{data.tags?.map((item, index) => { 
                    return <View key={index} className='tags'>{ item }</View>
                  })}</View>
                </View>
              </View>
            </View>
          </View>

          <View className='title'>图书介绍</View>
          <View className='detail-content'>
            { info.content }
          </View>
          </View>
        <View>
          <AtButton className='btn'  type='primary' onClick={()=>setBorrowModal(true)}>确 认 预 约</AtButton>
        </View>

        <AtActionSheet isOpened={borrowModal} className='book-time'>
          <View className='borrow-title'>借阅时长选择</View>
          <Text className='close' onClick={()=>setBorrowModal(false)}>X</Text>

          <View className='borrow-choose-time' style={{color:week==1?'white':'',backgroundColor:week==1?'#20C58D':'white'}} onClick={()=>setWeek(1)}>1周</View>
          <View className='borrow-choose-time' style={{color:week==2?'white':'',backgroundColor:week==2?'#20C58D':'white'}} onClick={()=>setWeek(2)}>2周</View>
          <View className='borrow-choose-time' style={{color:week==3?'white':'',backgroundColor:week==3?'#20C58D':'white'}} onClick={()=>setWeek(3)}>3周</View>
          <View className='borrow-choose-time' style={{color:week==4?'white':'',backgroundColor:week==4?'#20C58D':'white'}} onClick={()=>setWeek(4)}>4周</View>

          <AtButton className='borrow-btn' disabled={!week}  type='primary' 
            onClick={() => {
              let newData = {id:data.id,week,title:data.title,type:3}
              Taro.navigateTo({ url: '/pages/home/index/components/appointDetail/index?type=3&data=' + JSON.stringify(newData) })
            }}
          >下 一 步</AtButton>
          
        </AtActionSheet>

      </View>
    )
  }

