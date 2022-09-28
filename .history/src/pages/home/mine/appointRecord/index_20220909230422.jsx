import {useEffect,useState} from 'react'
import { View, Text } from '@tarojs/components'
import {AtButton} from 'taro-ui';
import {useDispatch,useSelector} from 'react-redux';
import request from '../../../../utils/request'
import {alertShow,alertHidden} from '../../../../store/alertModal';
import AlertModal from '../../../../components/alertModal';
import {show} from '../../../../store/modal'
import Modal from '../../../../components/modal/index'

import './index.scss'

export default function Index () {

  const dispatch=useDispatch()
  // 获取弹窗
  const alertModal=useSelector(state=>state.alertModal)
  const modal=useSelector(state=>state.Modal)
  // 记录列表
  const [list,setList]=useState([])
  // 当前点击取下预约暂存
  const [currentConcel,setCurrentConcel]=useState(null)

  // 获取列表
  const getRecords=()=>{
    request({
      url:'/front/my/reserve',
      success:function(res){
        if(res.statusCode==200) setList(res.data.data)
      },dispatch
    })
  }

  // 取消预约
  const concelRecord=()=>{
    request({
      url:'/front/reserve?reserve_id='+currentConcel,
      method:'del',
      success:function(res){
        if(res.statusCode==200){
          getRecords()
          dispatch(show({
            title:'成功',
            text:['已成功取消预约','您可前往"首页"重新发起预约']
          }))
          dispatch(alertHidden())
        } 
      },dispatch
    })
  }

  // 初始化数据
  useEffect(()=>{
    getRecords()
  },[])

  const concelModal=(id)=>{
    setCurrentConcel(id)
    dispatch(alertShow({
      title:'提示',
      text:['是否取消该书籍借阅','《牧羊少年的奇幻漂流》']
    }))
  }


  
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
                <View className='record-time'>{item.reserve_time}</View>
              </View>
              <View className='btn-view'>
                <AtButton className='record-btn btn-concel'  type='primary' 
                  onClick={()=>concelModal(item.reserve_id)}
                >取消预约</AtButton>
              </View>
            </View>
          )
        }
        
        {
          alertModal?.visible?<AlertModal  concelRecordFunc={concelRecord} />:null
        }
        {
          modal?.visible?<Modal />:null
        }
      </View>
    )
  }

