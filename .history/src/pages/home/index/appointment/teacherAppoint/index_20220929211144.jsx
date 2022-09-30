import {useState} from 'react';
import {View ,Swiper ,SwiperItem,ScrollView} from '@tarojs/components';
import Taro, { getCurrentInstance} from '@tarojs/taro';
import { AtAvatar, AtButton } from 'taro-ui'
import { useSelector } from 'react-redux';


import './index.scss'

export default function ContentAppoint() {


  const data = decodeURIComponent(getCurrentInstance().router.params.data)
  console.log('111',data)
  const info=useSelector(state=>state.img)

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
        <AtAvatar className='avator' size='large' circle image={info.url}></AtAvatar>
        <View className='info-right'>
          <View className='info-name'>{ data.name}</View>
          <View className='info-detail'>{ info.introduction}</View>
        </View>
      </View>

      <View className='time-title'>选择预约时段 （您可预约一周内时间段）</View>

      <View className='choose-time'>
      {
            topChoose.map((item,index)=>(
              <View key={item.english+index}  className='choose-item' onClick={()=>setSwiperCurrent(index)}>
                <View className='top' style={{color:index?'black':'#20C58D'}}>{item.english}</View>
                <View className='bottom' 
                  style={{
                    backgroundColor:swiperCurrent==0&&index==0?'#20C58D':swiperCurrent==index?'rgba(101, 124, 133, 0.2)':'#fffff',
                    color:index?'black':swiperCurrent==0?'white':'#20C58D'
                  }}
                >{item.chinese}</View>
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
                  <View className='current-time'>当前预约日期：2022年8月17日</View>
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

    </View>
  )
}
