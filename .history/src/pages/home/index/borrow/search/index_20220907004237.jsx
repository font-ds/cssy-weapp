// import {useState} from 'react';
import { View, Image, ScrollView } from '@tarojs/components'
import { AtInput ,AtIcon} from 'taro-ui'

import './index.scss'
// import Loading from '../../../../components/loading/index';
import lunbo from '../../../../../assets/lunbo.png';
import BookItem from '../components/bookItem';

export default function Index () {
  

    return (
      <View className='search-view'>
        <AtInput
          className='search'
          type='text'
          placeholder='搜索您想借阅的书籍'
          onConfirm={(e)=>{console.log(e)}}
        >
          <AtIcon value='search' className='search-icon' size='25 ' color='lightgray'></AtIcon>
        </AtInput>
        
       
         
        <ScrollView  scrollY enhanced showScrollbar={false} className='scroll-view'>
          <BookItem></BookItem>
        </ScrollView>
      </View>
    )
  }

