// import React from 'react'
import {Button,View,Image} from '@tarojs/components';
import { AtModal, AtModalHeader, AtModalContent, AtModalAction} from "taro-ui"
import {useDispatch,useSelector} from 'react-redux';
import {hidden} from '../../store/modal';
import './index.scss'
import lunbo from '../../assets/lunbo.png'

export default function Modal() {

  const modal=useSelector(state=>state.modal)
  const dispatch=useDispatch()

  const modalHidden=()=>{
    dispatch(hidden())
  }

  return (
    <AtModal  className='modal' isOpened={modal?.visible}>
      {/* <AtModalHeader>{modal.title}</AtModalHeader> */}
      <AtModalContent className='content'>
        {/* 标题 */}
        {
        modal.title=='关于我们'?<View className='title'>{modal.title}</View>:null
        }
        

        <View style={{textAlign:'center'}}>
          {
            modal.title!='关于我们'?null:<Image className='aboutOur' showMenuByLongpress src={lunbo}></Image>
          }
        </View>

        {modal.text.map(item=>
          <View style={{textAlign:'center'}} key={item}>{item}</View>
        )}
        

      </AtModalContent>
      <AtModalAction> <Button onClick={modalHidden}>确定</Button> </AtModalAction>
    </AtModal>
    
  )
}
