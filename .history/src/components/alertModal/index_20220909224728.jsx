// import React from 'react'
import {Button,View} from '@tarojs/components';
import { AtModal, AtModalHeader, AtModalContent, AtModalAction } from "taro-ui"
import {useDispatch,useSelector} from 'react-redux';
import {alertHidden} from '../../store/alertModal';
import './index.scss'


export default function AlertModal(props) {

  // 获取函数
  const {concelRecordFunc}=props

  const alertModal=useSelector(state=>state.alertModal)
  const dispatch=useDispatch()

  const modalHidden=()=>{
    dispatch(alertHidden())
  }

  return (
    <AtModal className='alert-modal' isOpened={alertModal?.visible}>
      <AtModalHeader>{alertModal.title}</AtModalHeader>
      <AtModalContent className='content'>

        {
          alertModal.longTime?
          <>
            {alertModal.text.map(item=>
              <View style={{textAlign:'center'}} key={item}>{item}</View>
            )}
            <View className='borrow-choose-time'>1周</View>
            <View className='borrow-choose-time'>2周</View>
            <View className='borrow-choose-time'>3周</View>
            <View className='borrow-choose-time'>4周</View>
          </>
          :
          alertModal.text.map(item=>
            <View style={{textAlign:'center'}} key={item}>{item}</View>
          )
        }
      </AtModalContent>
      <AtModalAction> 
        <Button onClick={modalHidden}>取消</Button> 
        <Button onClick={concelRecordFunc}>确定</Button> 
      </AtModalAction>
    </AtModal>
    
  )
}
