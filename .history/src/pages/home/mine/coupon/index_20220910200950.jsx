import {useState,useEffect} from 'react'
import {useDispatch} from 'react-redux'
import { View, Text } from '@tarojs/components'
import { AtInput ,AtButton} from 'taro-ui'
import request from '../../../../utils/request'


import './index.scss'

export default function Index () {

  const dispatch=useDispatch()
  // 优惠券列表
  const [list,setList]=useState([])

  // 获取优惠券列表
  const getList=()=>{
    request({
      url:'/front/my/coupon',
      success:res=>{
        if(res.statusCode==200) setList(res.data.data)
      },dispatch
    })
  }

  // 初始化数据
  useEffect(()=>{
    getList()
  },[])

  let couponItems=[
    {name:'暑假盛宴大促销优惠券',type:'折扣券',time:'2018.04.11-2018.05.11',money:'10',low:0},
    {name:'暑假盛宴大促销优惠券',type:'折扣券',time:'2018.04.11-2018.05.11',money:'10',low:0},
  ]
  
    return (
      <View className='coupon font-default-style'>
        <AtInput
          clear
          type='text'
          maxLength='12'
          placeholder='请输入优惠券兑换码'
          // value={this.state.value}
          onChange={()=>{}}
          className='coupon-ipt'
        >
        </AtInput>
        <AtButton type='primary' circle className='coupon-btn'>兑换</AtButton>
        
        <View className='coupon-title'>我的优惠券</View>

        {
          list?.map(item=>
              <View className='coupon-item' key={item.coupon_id}>
                <View className='money-view'>
                  <Text>¥</Text>
                  <View className='money'>{item.amount}</View>
                  <View className='limit'>无金额门槛</View>
                </View>
                <View className='info-view'>
                  <View>
                    <Text>{item.name}</Text>
                    <View className='tag'>折扣券</View>
                  </View>
                  <View className='info-time'>{item.phone}</View>
                  <View className='use-view'><Text>到店消费出示</Text></View>
                </View>
              </View>
            )
        }
    
      </View>
    )
  }

