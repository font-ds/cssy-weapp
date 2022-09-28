import {useState} from 'react';
import { View, Text, Swiper, SwiperItem, Image, ScrollView } from '@tarojs/components'
import { AtInput ,AtIcon} from 'taro-ui'
import Taro from '@tarojs/taro';

import BookItem from './components/bookItem/index';
import './index.scss'
import Loading from '../../../../components/loading/index';
import bottom from '../../../../assets/appoint-bottom.png';

export default function Index () {
  
  const [swiperCurrent,setSwiperCurrent]=useState(0)

    return (
      <View className='borrow font-default-style'>
        <AtInput
          className='search'
          type='text'
          placeholder='搜索您想借阅的书籍'
          onConfirm={(e)=>{Taro.navigateTo({url:`/pages/home/index/borrow/search/index?name=${e}`})}}
        >
          <AtIcon value='search' className='search-icon' size='25 ' color='lightgray'></AtIcon>
        </AtInput>
        <View className='totleView'>
          <Text style={{color:swiperCurrent?'rgba(101, 124, 133, 0.6)':'#233941'}} 
            onClick={()=>setSwiperCurrent(0)}
          >推荐</Text>
          <Text style={{color:!swiperCurrent?'rgba(101, 124, 133, 0.6)':'#233941'}}
            onClick={()=>setSwiperCurrent(1)}
          >精品</Text>
        </View>
        <View className={!swiperCurrent?'img-view':'img-view choose-two'}>
          <Image className='choose-bottom' src={bottom} />
        </View>


        <Swiper
          className='swiper'
          indicatorColor='#999'
          indicatorActiveColor='#333'
          circular
          disableTouch
          current={swiperCurrent}
          onChange={({detail})=>{setSwiperCurrent(detail.current)}}
        >
          <SwiperItem className='swiper-item'>
            <ScrollView  scrollY enhanced showScrollbar={false} className='scroll-view'>
              <BookItem></BookItem>
            </ScrollView>
          </SwiperItem>

          <SwiperItem className='swiper-item'>
            <ScrollView  scrollY enhanced showScrollbar={false} className='scroll-view'>
              <Loading></Loading>
              {/* <BookItem></BookItem> */}
              </ScrollView>
          </SwiperItem>
          
        </Swiper>

      </View>
    )
  }

