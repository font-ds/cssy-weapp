import {useState} from 'react';
import {View ,Swiper ,SwiperItem,ScrollView} from '@tarojs/components';
import Taro from '@tarojs/taro';
import { AtAvatar, AtButton } from 'taro-ui'

import './index.scss'
import avator from '../../../../../assets/avator.png';

export default function ContentAppoint() {

  const [swiperCurrent,setSwiperCurrent]=useState(0)
  
  let topChoose=[
    {english:'THU',chinese:'今天'},
    {english:'THU',chinese:'今天'},
    {english:'THU',chinese:'今天'},
    {english:'THU',chinese:'今天'},
    {english:'THU',chinese:'今天'},
    {english:'THU',chinese:'今天'},
    {english:'THU',chinese:'今天'},
  ]

  return (
    <View className='teacher-appoint'>
      <View className='teacher-info'>
        <AtAvatar className='avator' size='large' circle image={avator}></AtAvatar>
        <View className='info-right'>
          <View>爱讲故事的阿伟</View>
          <View>这是一段金牌讲师的客人介绍，有点东西这是一段金牌讲师的客人介绍，有点东西这是一段金牌讲师的客人介绍，有点东西</View>
        </View>
      </View>

      <View className='time-title'>选择预约时段（您可预约一周内的时间段）</View>

      <View className='choose-time'>
          {
            topChoose.map((item,index)=>(
              <View key={item.english+index}  className='choose-item' onClick={()=>setSwiperCurrent(index)}
                style={{backgroundColor:swiperCurrent==index?'green':'',color:swiperCurrent==index?'white':''}}
              >
                <View>{item.english}</View>
                <View>{item.chinese}</View>
              </View>
            ))
          }
        </View>

      <Swiper
        indicatorColor='#999'
        indicatorActiveColor='#333'
        circular
        disableTouch
        current={swiperCurrent}
        onChange={({detail})=>{setSwiperCurrent(detail.current)}}
        style={{height:'100%'}}
      >
          {
            topChoose.map((index)=>(
              <SwiperItem style={{height:'100%'}} key={index}>
                <ScrollView  scrollY enhanced showScrollbar={false} className='scroll-view'>
                  <View className='grid-contioner'>
                    <View className='hour-item'>10:01-10:30</View>             
                    <View className='hour-item'>10:02-10:30</View>             
                    <View className='hour-item'>10:03-10:30</View>             
                    <View className='hour-item'>10:04-10:30</View>             
                    <View className='hour-item'>10:05-10:30</View>             
                    <View className='hour-item'>10:06-10:30</View>             
                    <View className='hour-item'>10:07-10:30</View>             
                    <View className='hour-item'>10:08-10:30</View>             
                    <View className='hour-item'>10:09-10:30</View> 
                    <View className='hour-item'>10:10-10:30</View>             
                    <View className='hour-item'>10:11-10:30</View>             
                    <View className='hour-item'>10:12-10:30</View> 
                    <View className='hour-item'>10:01-10:30</View>             
                    <View className='hour-item'>10:02-10:30</View>             
                    <View className='hour-item'>10:03-10:30</View>             
                    <View className='hour-item'>10:04-10:30</View>             
                    <View className='hour-item'>10:05-10:30</View>             
                    <View className='hour-item'>10:06-10:30</View>             
                    <View className='hour-item'>10:07-10:30</View>             
                    <View className='hour-item'>10:08-10:30</View>             
                    <View className='hour-item'>10:09-10:30</View> 
                    <View className='hour-item'>10:10-10:30</View>             
                    <View className='hour-item'>10:11-10:30</View>             
                    <View className='hour-item'>10:12-10:30</View>              
                  </View>
                  
                     
                </ScrollView>

              </SwiperItem> 
            ))
          }
      </Swiper>
      
      <AtButton className='btn'  type='primary' 
        onClick={()=>Taro.navigateTo({url:'/pages/home/index/components/appointDetail/index'})}
      >下 一 步</AtButton>
      <View className='choose-num'>
          已选择4个时段，最多选择4个时段
      </View>
    </View>
  )
}
