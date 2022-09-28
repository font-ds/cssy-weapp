import {useEffect,useState} from 'react';
import { ScrollView, Text, View, Image} from '@tarojs/components'
import Taro from '@tarojs/taro';
import request from '../../../../../../utils/request';
import './index.scss'
import lunbo from '../../../../../../assets/lunbo.png';
import time from '../../../../../../assets/content-time.png';

export default function Content () {
  
  const [list,setList]=useState([])
  
  useEffect(()=>{
    request({
      url:'/front/feature/reserve',
      success:function(res){
        console.log('content',res)
        if(res.statusCode==200) {
          setList(res.data.data)
        }
      }
    },[])
  })

    return (
      <ScrollView
        scrollY 
        enhanced 
        showScrollbar={false} 
        className='content font-default-style'
      >
        <View className='content-item' onClick={()=>Taro.navigateTo({url:'/pages/home/index/appointment/contentAppoint/index'})}>
          <Image className='item-left' src={lunbo}></Image>
          <View className='item-right'>
            <View>
              <View className='content-title'>《牧羊少年的奇幻漂流零》</View>
              <View className='content-time'>07月23日 13:00-15:00</View>
            </View>
            <View className='content-bottom'>
              <Text>#手偶剧</Text>
              <View>
                <Image src={time}></Image>
                已预约23/45
              </View>
            </View>
          </View>
        </View>
        
      </ScrollView>
    )
  }

