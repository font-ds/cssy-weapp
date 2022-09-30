import {View ,Text} from '@tarojs/components';
import Taro,{getCurrentInstance} from '@tarojs/taro';
import {useDispatch,useSelector} from 'react-redux'
import { AtButton } from 'taro-ui'
import AlertModal from '../../../../../components/alertModal/index'
import {alertShow,alertHidden} from '../../../../../store/alertModal'
import Modal from '../../../../../components/modal/index'
import {show} from '../../../../../store/modal'
import request from '../../../../../utils/request'
import { getCurrentTime } from '../../../../../utils/getTime'
import './index.scss'

export default function AppointDetail() {

  const dispatch=useDispatch()
  const alertModal=useSelector(state=>state.alertModal)
  const modal=useSelector(state=>state.modal)
  // type 0为功能预约
  let { type, data } = getCurrentInstance().router.params
  console.log('测试',type,data)
  if(data!=null) data=JSON.parse(data)
  if(type==0) data.time=`${10+2*data.period}:00-${12+2*data.period}:00`
  console.log(type,data)

  // 预约弹窗
  const appointModal=()=>{
    dispatch(alertShow({
      title:'预约确认',
      text:['是否确认预约']
    }))
  }

  // 预约
  const appoint=()=>{
    // 功能预约
    if (type == 0) {
      console.log(data)
      request({
        url: '/front/function/reserve',
        data: {
          type: data.type,
          date: data.time,
          period: data.period
        },
        method: 'post',
        success: res => {
          if (res.statusCode == 200) {
            dispatch(alertHidden())
            dispatch(show({
              title: '成功',
              text: ['已成功完成预约', '可前往“会员中心”查看预约详情']
            }))
          }
          setTimeout(() => {
            Taro.navigateBack(2)
          },2000)
        }, dispatch
      })
    }
    // 内容预约
    else if (type == 1) {
      request({
        url: '/front/feature/reserve',
        data: { id: data.id },
        method: 'post',
        success: res => {
          if (res.statusCode == 200) {
            dispatch(alertHidden())
            dispatch(show({
              title: '成功',
              text: ['已成功完成预约', '可前往“会员中心”查看预约详情']
            }))
          }
          setTimeout(() => {
            Taro.navigateBack(2)
          },2000)
        }, dispatch
      })
    }
    // 书籍借阅
    else if (type == 3) { 
      request({
        url: '/front/borrow',
        data: { book_id: data.id,week:data.week },
        method: 'post',
        success: res => {
          if (res.statusCode == 200) {
            dispatch(alertHidden())
            dispatch(show({
              title: '成功',
              text: ['已成功借阅书籍', '可前往“会员中心”查看借阅详情']
            }))
          }
          setTimeout(() => {
            Taro.navigateBack(2)
          },2000)
        }, dispatch
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
          <View>预约项目：{type!=0?type==3?'《'+data.title+'》':null:data.type?'畅读预约':'亲子阅读'}</View>
          <View>预约时间：{ type!=3?data?.detailTime+' '+data?.time: getCurrentTime(new Date().getTime())+'-'+getCurrentTime(new Date().getTime()+24*3600*1000*data.week*7)}</View>
          <View><Text style={{whiteSpace:'nowrap'}}>预约门店：</Text>春山拾阅儿童图书馆 (重庆龙湖礼嘉天街A馆3F24-25)</View>
        </View>
      </View>

      <AtButton className='btn'  type='primary' onClick={appointModal}>确 认 预 约</AtButton>

      {
        alertModal.visible?<AlertModal appointFunc={appoint}></AlertModal>:null
      }
      {
        modal.visible?<Modal></Modal>:null
      }
    </View>
  )
}
