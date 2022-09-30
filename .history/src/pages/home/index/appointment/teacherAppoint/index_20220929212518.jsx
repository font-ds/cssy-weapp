import {useState} from 'react';
import {View ,Swiper ,SwiperItem,ScrollView} from '@tarojs/components';
import Taro, { getCurrentInstance} from '@tarojs/taro';
import { AtAvatar, AtButton } from 'taro-ui'
import { useSelector } from 'react-redux';
import {getTime} from '../../../../../utils/getTime'

import './index.scss'

export default function ContentAppoint() {


  const data =JSON.parse(decodeURIComponent(getCurrentInstance().router.params.data))
  const info = useSelector(state => state.img)
  console.log(info)

  const [swiperCurrent, setSwiperCurrent] = useState(0)
  const [days,setDays]=useState(info.times)
  
  let topChoose=getTime(new Date().getTime())

  return (
    <View className='teacher-appoint'>
      <View className='teacher-info'>
        <AtAvatar className='avator' size='large' circle image={info.url}></AtAvatar>
        <View className='info-right'>
          <View className='info-name'>{ data.name}</View>
          <View className='info-detail'>{ info.content}</View>
        </View>
      </View>

      <View className='time-title'>选择预约时段 （您可预约一周内时间段）</View>

      <View className='choose-time'>
          {
            topChoose.map((item,index)=>(
              <View key={item.english+index}  className='choose-item' onClick={()=>setSwiperCurrent(index)}>
                <View className='top' style={{color:index?'black':'#20C58D'}}>{item.week}</View>
                <View className='bottom' 
                  style={{
                    backgroundColor:swiperCurrent==0&&index==0?'#20C58D':swiperCurrent==index?'rgba(101, 124, 133, 0.2)':'#fffff',
                    color:index?'black':swiperCurrent==0?'white':'#20C58D'
                  }}
                >{item.day}</View>
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
                <View className='current-time'>
                  当前预约日期： {topChoose[swiperCurrent].detailTime}
                </View>
                  <View className='grid-contioner'>
                    {
                      days.times?.map((item, dayIndex) => { 
                        return <View key={'time' + dayIndex} className='hour-item'>
                        {10 + Math.floor(dayIndex / 2)}:{0 + (dayIndex % 2) * 3}0 -{" "}
                        {10 + Math.floor((dayIndex + 1) / 2)}:
                          {0 + ((dayIndex + 1) % 2) * 3}0
                        </View>     
                      })
                    }
                            
                    {/* <View className='hour-item'>10:02-10:30</View>             
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
                    <View className='hour-item'>10:12-10:30</View>               */}
                  </View>
                  
                     
                </ScrollView>

              </SwiperItem> 
            ))
          }
      </Swiper>
      
      <AtButton className='btn' type='primary'
        onClick={() => {
          console.log(info)
          console.log(days)
          // Taro.navigateTo({ url: '/pages/home/index/components/appointDetail/index' })
        }}
      >下 一 步</AtButton>

    </View>
  )
}
