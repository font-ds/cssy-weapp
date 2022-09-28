import React, {useState} from 'react';
import { View, Text, Swiper, SwiperItem } from '@tarojs/components'

import './index.scss'
import Loading from '../../../../components/loading/index';

const Reading=React.lazy(()=>import('./components/reading/index'))
const Content=React.lazy(()=>import('./components/content/index'))
const Teacher=React.lazy(()=>import('./components/teacher/index'))


export default function Index () {
  
  const [swiperCurrent,setSwiperCurrent]=useState(0)

    return (
      <View className='appointment'>
        <View className='totleView'>
          <Text style={{color:swiperCurrent==0?'green':''}} onClick={()=>setSwiperCurrent(0)}>功能阅读</Text>
          <Text style={{color:swiperCurrent==1?'green':''}} onClick={()=>setSwiperCurrent(1)}>特色内容</Text>
          <Text style={{color:swiperCurrent==2?'green':''}} onClick={()=>setSwiperCurrent(2)}>金牌讲师</Text>
        </View>

        <React.Suspense className='out' fallback={<Loading></Loading>}>
          <Swiper
            className='swiper'
            indicatorColor='#999'
            indicatorActiveColor='#333'
            circular
            disableTouch
            current={swiperCurrent}
            onChange={({detail})=>{setSwiperCurrent(detail.current)}}
          >
            <SwiperItem>
                <Reading></Reading>
            </SwiperItem>
            <SwiperItem>
              <Content></Content>
            </SwiperItem>
            <SwiperItem>
              <Teacher></Teacher>
            </SwiperItem>
          </Swiper>
        </React.Suspense>

      </View>
    )
  }

