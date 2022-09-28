import {View ,Text} from '@tarojs/components';
import {getCurrentInstance} from '@tarojs/taro';
import {useDispatch,useSelector} from 'react-redux'
import { AtButton } from 'taro-ui'
import request from '../../../../../utils/request'
import './index.scss'

export default function AppointDetail() {

  const dispatch=useDispatch()
  // type 0为功能预约
  let {type,data}=getCurrentInstance().router.params
  if(data!=null) data=JSON.parse(data)
  if(type==0) data.time=`${10+2*data.period}:00-${12+2*data.period}:00`
  console.log(type,data)


  // 预约
  const appoint=()=>{
    // 功能预约
    if(type==0){
      request({
        url:'/front/function/reserve',
        data:{
          type:data.type,
          date:data.time,
          period:data.period
        }
      })
    }
  }

  return (
    <View className='appointDetail'>
      <View className='top-ps'>请您仔细阅读下方预约说明后确认</View>
      <View className='content-view'>
        <View className='title'>预约须知：</View>
        <View className='content'>
            {data?.content}
        </View>
        <View className='message'>
          <View>预约项目：{type!=0?null:data.type?'畅读预约':'亲子阅读'}</View>
          <View>预约时间：{data?.detailTime} {data?.time}</View>
          <View><Text style={{whiteSpace:'nowrap'}}>预约门店：</Text>春山拾阅儿童图书馆 (重庆龙湖礼嘉天街A馆3F24-25)</View>
        </View>
      </View>

      <AtButton className='btn'  type='primary' onClick={appoint}>确 认 预 约</AtButton>
    </View>
  )
}
