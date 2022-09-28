import {useState,useEffect} from 'react';
import { ScrollView, View, Image,Text } from '@tarojs/components'
import Taro from '@tarojs/taro';
import {useDispatch} from 'react-redux';
import request from '../../../../../../utils/request';
import './index.scss'
import lunbo from '../../../../../../assets/lunbo.png';
import star from '../../../../../../assets/star.png';
import {getImage} from '../../../../../../utils/cos-wx-sdk'


export default function Reading () {

  const dispatch=useDispatch()
  const [appointNum,setAppointNum]=useState([]) 
  // 列表
  const [contentList,setContentList]=useState([
    {
      imageUrl:getImage('1.png',1,setContentList),
      title:'亲子预约',
      discribe:'亲子服务亲子服务',
      url:'/pages/home/index/appointment/readAppoint/index?title=亲子预约'
    },
    {
      imageUrl:lunbo,
      title:'畅读预约',
      discribe:'畅读服务畅读服务',
      url:'/pages/home/index/appointment/readAppoint/index?title=畅读预约'
    }
  ])
  useEffect(()=>{
    request({
      url:'/front/function/reserve',
      success:function(res){
        console.log(res)
        if(res.statusCode==200) setAppointNum(res.data.data)
      },dispatch
    })
  },[])

  // let content=[
  //   {
  //     imageUrl:getImage('1.png'),
  //     title:'亲子预约',
  //     discribe:'亲子服务亲子服务',
  //     url:'/pages/home/index/appointment/readAppoint/index?title=亲子预约'
  //   },
  //   {
  //     imageUrl:lunbo,
  //     title:'畅读预约',
  //     discribe:'畅读服务畅读服务',
  //     url:'/pages/home/index/appointment/readAppoint/index?title=畅读预约'
  //   }
  // ]

    return (
      <ScrollView
        scrollY 
        enhanced 
        showScrollbar={false} 
        className='reading'
        lowerThreshold={30}
        onScrolltolower={()=>{console.log(111)}}
      >
        {
          contentList.map((item,index)=>{
            return <View key={item.title} className='reding-item' onClick={()=>Taro.navigateTo({url:item.url})}>
            <Image src={getImage('1.png')}></Image>
            <View className='item-title'>{item.title}<Text>有 {appointNum[index]?.number||99} 人预约过</Text></View>
            <View className='item-discribe'>{item.discribe}</View>
            <View className='star'>
              <Image src={star}></Image>
              <Image src={star}></Image>
              <Image src={star}></Image>
              <Image src={star}></Image>
              <Image src={star}></Image>
            </View>
          </View>
          })
        }
        
        
      </ScrollView>
    )
  }

