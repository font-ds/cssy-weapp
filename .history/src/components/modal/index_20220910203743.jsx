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
      {
        modal.title!='关于我们'?<AtModalHeader>{modal.title}</AtModalHeader>:null
      }
      <AtModalContent className='content'>
        {
          modal.title!='关于我们'?null:<Image className='aboutOur' src={lunbo}></Image>
        }
        {modal.text.map(item=>
          <View style={{textAlign:'center'}} key={item}>{item}</View>
        )}
        

      </AtModalContent>
      <AtModalAction> <Button onClick={modalHidden}>确定</Button> </AtModalAction>
    </AtModal>
    
  )
}
