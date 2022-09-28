import {useState} from 'react';
import {  View ,Swiper ,SwiperItem ,ScrollView} from '@tarojs/components'
import Taro from '@tarojs/taro';

import './index.scss'

export default function Reading () {

  const [swiperCurrent,setSwiperCurrent]=useState(0)
  
  // console.log(getCurrentInstance())

  // Taro.setNavigationBarTitle({
  //   title:getCurrentInstance().router.params.title
  // })
  Taro.setNavigationBarTitle({
    title:'亲子预约'
  })

  let topChoose=[
    {english:'六',chinese:'今天'},
    {english:'日',chinese:'明天'},
    {english:'一',chinese:'后天'},
    {english:'二',chinese:'29'},
    {english:'三',chinese:'30'},
    {english:'四',chinese:'1'},
    {english:'五',chinese:'2'},
  ]

  let timeChoose=[
    {},{},{},{},{},{},{}
  ]

    return (
      <View className='read-appoint font-default-style'>
        <View className='title'>选择预约时段 （您可预约一周内时间段）</View>
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
            timeChoose.map((index)=>(
              <SwiperItem style={{height:'100%'}} key={index}>
                <View className='current-time'>
                  当前预约日期： 2022年8月17日
                </View>
                <ScrollView  scrollY enhanced showScrollbar={false} className='scroll-view'>
                  {
                    timeChoose.map((item,timeIndex)=>
                      <View key={item+timeIndex} className='choose-hour' onClick={()=>Taro.navigateTo({url:'/pages/home/index/components/appointDetail/index'})}>
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

