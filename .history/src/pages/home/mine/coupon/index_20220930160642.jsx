import {useState,useEffect} from 'react'
import {useDispatch} from 'react-redux'
import { View, Text } from '@tarojs/components'
import { AtInput ,AtButton} from 'taro-ui'
import request from '../../../../utils/request'


import './index.scss'
import Modal from '../../../../components/modal'

export default function Index () {

  const dispatch=useDispatch()
  // 优惠券列表
  const [list,setList]=useState([])
  // 优惠券输入框
  const [iptValue,setIptValue]=useState()

  // 获取优惠券列表
  const getList=()=>{
    request({
      url:'/front/my/coupon',
      success:res=>{
        if(res.statusCode==200) setList(res.data.data)
      },dispatch
    })
  }

  // 领取优惠券
  const getCoupon=()=>{
    console.log(iptValue)
    setIptValue('')
    request({
      url: '/front/my/coupon?key='+iptValue,
      method: 'post',
      success: res => { 
        console.log(res)
      },dispatch
    })
  }

  // 初始化数据
  useEffect(()=>{
    getList()
  },[])
  
    return (
      <View className='coupon font-default-style'>
        <AtInput
          // clear
          type='text'
          maxLength='12'
          placeholder='请输入优惠券兑换码'
          value={iptValue}
          onChange={e=>setIptValue(e)}
          className='coupon-ipt'
        >
        </AtInput>
        <AtButton type='primary' circle className='coupon-btn' onClick={getCoupon}>兑换</AtButton>
        
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
        <Modal></Modal>
      </View>
    )
  }

