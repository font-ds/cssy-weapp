import {useEffect,useState} from 'react';
import { ScrollView, Text, View, Image} from '@tarojs/components'
import {useDispatch} from 'react-redux'
import Taro from '@tarojs/taro';
import request from '../../../../../../utils/request';
import './index.scss'
import lunbo from '../../../../../../assets/lunbo.png';
import time from '../../../../../../assets/content-time.png';

export default function Content () {
  const dispatch=useDispatch()
  const [list,setList]=useState([])
  
  useEffect(()=>{
    request({
      url:'/front/feature/reserve',
      success:function(res){
        console.log('content',res)
        if(res.data.status==0) {
          setList(res.data.data)
        }
      },dispatch
    })
  },[])

    return (
      <ScrollView
        scrollY 
        enhanced 
        showScrollbar={false} 
        className='content font-default-style'
      >
        {
          list?.map((item,index)=>
          <View className='content-item' key={item.title+index} 
            onClick={()=>Taro.navigateTo({url:'/pages/home/index/appointment/contentAppoint/index?data='+encodeURIComponent(JSON.stringify(item))})}
          >
            {/* <Image className='item-left' src={item.cover}></Image> */}
            <Image className='item-left' src={lunbo}></Image>
            <View className='item-right'>
              <View>
                <View className='content-title'>《{item.title}》</View>
                <View className='content-time'>{item.data} {item.time}</View>
              </View>
              <View className='content-bottom'>
                <Text>#{item.type}</Text>
                <View>
                  <Image src={time}></Image>
                  已预约{item.reserved}/{item.maximum}
                </View>
              </View>
            </View>
          </View>
        )
        }
        
        
      </ScrollView>
    )
  }

