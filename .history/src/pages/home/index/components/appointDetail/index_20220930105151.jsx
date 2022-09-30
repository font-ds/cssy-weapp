import {View ,Text} from '@tarojs/components';
import {getCurrentInstance} from '@tarojs/taro';
import {useDispatch,useSelector} from 'react-redux'
import { AtButton } from 'taro-ui'
import AlertModal from '../../../../../components/alertModal/index'
import {alertShow,alertHidden} from '../../../../../store/alertModal'
import Modal from '../../../../../components/modal/index'
import {show} from '../../../../../store/modal'
import request from '../../../../../utils/request'
import { getCurrentTime ,getAppointCurrent} from '../../../../../utils/getTime'
import './index.scss'

export default function AppointDetail() {

  const dispatch=useDispatch()
  const alertModal=useSelector(state=>state.alertModal)
  const modal=useSelector(state=>state.modal)
  // type 0为功能预约
  let { type, data } = getCurrentInstance().router.params
  if(data!=null) data=JSON.parse(data)
  if (type == 0) data.time = `${10 + 2 * data.period}:00-${12 + 2 * data.period}:00`
  if (type == 2) { 
    data.date=getAppointCurrent(new Date().getTime()+data.date*24000*3600)
  }
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
              title: '预约成功',
              text: ['已成功完成预约', '可前往“会员中心”查看预约详情']
            }))
          }
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
              title: '预约成功',
              text: ['已成功完成预约', '可前往“会员中心”查看预约详情']
            }))
          }
        }, dispatch
      })
    }
    else if (type == 2) { 
      let periods = []
      data.periods.map(item => { 
        if (item === 1) return periods.push(true)
        else return periods.push(false)
      })
      request({

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
              title: '借阅成功',
              text: ['已成功借阅书籍', '可前往“会员中心”查看借阅详情']
            }))
          }
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
          <View>预约项目：{type!=0?type==3?'《'+data.title+'》':type==1?'内容预约-'+data.title:'专业导读师预约':data.type?'畅读预约':'亲子阅读'}</View>
          <View>预约时间：{
            type != 3 ? type == 2 ? data.date + ' ' + data.periods.map(item => { 
              return `${10 + Math.floor(item / 2)}:${0 + (item % 2) * 3}0 
              ${10 + Math.floor((item + 1) / 2)}:
              ${0 + ((item + 1) % 2) * 3}0`
            }) :
              data?.detailTime + ' ' + data?.time :
            getCurrentTime(new Date().getTime()) + '-' + getCurrentTime(new Date().getTime() + 24 * 3600 * 1000 * data.week * 7)}</View>
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
