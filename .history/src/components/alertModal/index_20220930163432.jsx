// import React from 'react'
import {useState} from 'react'
import {Button,View} from '@tarojs/components';
import { AtModal, AtModalContent, AtModalAction } from "taro-ui"
import {useDispatch,useSelector} from 'react-redux';
import {alertHidden} from '../../store/alertModal';
import './index.scss'


export default function AlertModal(props) {

  // 获取函数
  const {concelRecordFunc,longTimeFunc,concelBorrowFunc,appointFunc}=props

  const dispatch=useDispatch()
  const alertModal=useSelector(state=>state.alertModal)
  // 获取选取时间
  const [time,setTime]=useState()

  // 取消
  const modalHidden=()=>{
    dispatch(alertHidden())
  }
  // 确认
  const confirm=()=>{
    if(alertModal.title=='取消预约') concelRecordFunc()
    else if(alertModal.title=='延长借阅') longTimeFunc(time)
    else if(alertModal.title=='取消借阅') concelBorrowFunc()
    else if (alertModal.title == '预约确认') appointFunc()
    dispatch(alertHidden())
    
    
  }

  return (
    <AtModal className='alert-modal' isOpened={alertModal?.visible}>
      {/* <AtModalHeader>{alertModal.title}</AtModalHeader> */}
      <AtModalContent className='content'>
      <View className='title'>{alertModal.title}</View>
        {
          alertModal.longTime?
          <>
            {alertModal.text.map(item=>
              <View style={{textAlign:'center'}} key={item}>{item}</View>
            )}
            <View className={time==1?'borrow-choose-time time-choose':'borrow-choose-time'} onClick={()=>setTime(1)}>1周</View>
            <View className={time==2?'borrow-choose-time time-choose':'borrow-choose-time'} onClick={()=>setTime(2)}>2周</View>
            <View className={time==3?'borrow-choose-time time-choose':'borrow-choose-time'} onClick={()=>setTime(3)}>3周</View>
            <View className={time==4?'borrow-choose-time time-choose':'borrow-choose-time'} onClick={()=>setTime(4)}>4周</View>
          </>
          :
          alertModal.text.map(item=>
            <View style={{textAlign:'center'}} key={item}>{item}</View>
          )
        }
      </AtModalContent>
      <AtModalAction> 
        <Button onClick={modalHidden}>取消</Button> 
        <Button onClick={confirm}>确定</Button> 
      </AtModalAction>
    </AtModal>
    
  )
}
