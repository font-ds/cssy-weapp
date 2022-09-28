// import {useState} from 'react';
import { View, Image, ScrollView } from '@tarojs/components'

import './index.scss'
// import Loading from '../../../../components/loading/index';
import lunbo from '../../../../../assets/lunbo.png';
import BookItem from '../components/bookItem';

export default function Index () {
  

    return (
  
        <ScrollView  scrollY enhanced showScrollbar={false} className='scroll-view'>
          <BookItem></BookItem>
        </ScrollView>
    )
  }

