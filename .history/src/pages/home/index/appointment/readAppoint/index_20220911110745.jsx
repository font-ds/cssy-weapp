import {useState} from 'react';
import {  View ,Swiper ,SwiperItem ,ScrollView} from '@tarojs/components'
import Taro,{getCurrentInstance} from '@tarojs/taro';
import {getTime} from '../../../../../utils/getTime'

import './index.scss'

export default function Reading () {

  const [swiperCurrent,setSwiperCurrent]=useState(0)
  let title=getCurrentInstance().router.params.title
  
  Taro.setNavigationBarTitle({
    title
  })

  getTime(new Date().getTime())

  let topChoose=getTime(new Date().getTime())
  // 模拟生成日期列表
  let dayChoose=[{},{},{},{},{},{},{}]
  // 模拟生成时间段列表
  let timeChoose=[{},{},{},{},{},{}]

  // 点击进入预约下一步
  const next=(period)=>{
    let data={
      type:null,
      date:topChoose[swiperCurrent].time,
      period
    }
    if(title=='亲子预约') data.type=0
    else data.type=1

    Taro.navigateTo({url:`/pages/home/index/components/appointDetail/index?type=0&data=${data}`})
  }

    return (
      <View className='read-appoint font-default-style'>
        <View className='title'>选择预约时段 （您可预约一周内时间段）</View>
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
            dayChoose.map((index)=>(
              <SwiperItem style={{height:'100%'}} key={index}>
                <View className='current-time'>
                  当前预约日期： {topChoose[swiperCurrent].detailTime}
                </View>
                <ScrollView  scrollY enhanced showScrollbar={false} className='scroll-view'>
                  {
                    timeChoose.map((item,timeIndex)=>
                      <View key={item+timeIndex} className='choose-hour' onClick={()=>next(timeIndex)}>
                        <View className='hour-left-view'>
                          <View className='circle'></View>
                          <View className='hour-left'>{10+timeIndex*2}:00--{12+timeIndex*2}:00</View>
                        </View>
                        <View className='num'>
                          <View>已预约</View>
                          <View>234人</View>
                        </View>
                      </View>
                    )
                  }
                  
                  
                </ScrollView>

              </SwiperItem> 
            ))
          }
          </Swiper>
      </View>
    )
  }

