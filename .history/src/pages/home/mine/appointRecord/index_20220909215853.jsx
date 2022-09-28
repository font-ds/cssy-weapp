import {useEffect,useState} from 'react'
import { View, Text } from '@tarojs/components'
import {AtButton} from 'taro-ui';
import {useDispatch,useSelector} from 'react-redux';
import request from '../../../../utils/request'
import {alertShow} from '../../../../store/alertModal';
import AlertModal from '../../../../components/alertModal';

import './index.scss'

export default function Index () {

  const dispatch=useDispatch()
  // 获取弹窗
  const alertModal=useSelector(state=>state.alertModal)
  // 记录列表
  const [list,setList]=useState([])

  // 后去列表
  const getRecords=()=>{
    request({
      url:'/front/my/reserve',
      success:function(res){
        if(res.statusCode==200) setList(res.data.data)
      },dispatch
    })
  }

  // 初始化数据
  useEffect(()=>{
    getRecords()
  },[])

  const concelRecord=()=>{
    dispatch(alertShow({
      title:'提示',
      text:['是否取消该书籍借阅','《牧羊少年的奇幻漂流》']
    }))
  }

    let record=[
      {type:'功能阅读预约',time:'2021/01/18',name:'亲子预约',vip:'预约会员',phone:'18680704968',appointDay:'2022年08月23日', appointTime:'17:00-19:00 17:00-19:00 17:00-19:00 17:00-19:00'}
    ]
  
    return (
      <View className='appoint-record'>
        {
          list.map(item=>
            <View className='record-view font-default-style' key={item.time+item.type}>
              <View className='title'>
                <Text className='title-left'>{item.type?item.type==1?'特色内容':'金牌讲师':'功能阅读'}</Text>
                <Text className='title-right'>{item.time}</Text>
              </View>
              <View className='record-info'>
                <View>预约项目：<Text>{item.type?item.type==1?'特色内容':'金牌讲师':'功能阅读'}</Text></View>
                <View>预约会员：<Text>{item.user_name}</Text></View>
                <View>预约手机：<Text>{item.phone}</Text></View>
                <View>
                  <Text style={{whiteSpace:'nowrap'}}>预约时间：</Text>
                  <Text>{item.reserve_date}</Text>
                </View>
                <View className='record-time'>{'2014-07-24 02:16:02'||item.reserve_time}</View>
              </View>
              <View className='btn-view'>
                <AtButton className='record-btn btn-concel'  type='primary' onClick={concelRecord}>取消预约</AtButton>
              </View>
            </View>
          )
        }
        
        {
          alertModal.visible?<AlertModal />:null
        }
        <AlertModal></AlertModal>
      </View>
    )
  }

