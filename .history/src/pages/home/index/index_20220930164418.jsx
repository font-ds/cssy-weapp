import {useEffect,useState} from 'react'
import { View,Text ,Image } from '@tarojs/components'
import {useDispatch} from 'react-redux'
import Taro from '@tarojs/taro';
import request from '../../../utils/request'
import {setUserInfo} from '../../../store/info'
import BookItem from './borrow/components/bookItem'
import './index.scss'

import back from '../../../assets/index-back.png';
import lunbo from '../../../assets/lunbo.png';
import Modal from '../../../components/modal';
import borrow from '../../../assets/index-borrow.png';
import record from '../../../assets/index-record.png';

export default function Index () {
  const dispatch = useDispatch()
  const [list,setList]=useState([])
  useEffect(()=>{
    // 获取用户信息
    request({
      url:'/front/my',
      success:function(res){
        if(res.statusCode==200) dispatch(setUserInfo({userInfo:res.data.data}))
      },dispatch
    })
    getBooks()
  },[])

  // 获取书籍
  const getBooks = () => {
      request({
        url: `/front/book?page=0&type=0`,
        success: function (res) {
          if (res.data.status == 0) {
            setList(res.data.data)
          }
        }, dispatch
      })
    }
  

    return (
      <View className='index'>

      <Image className='index-back' src={back}></Image>

      {/* <View>专属服务</View> */}
      <View className='chooseView'>
        <View className='chooseItem' onClick={()=>Taro.navigateTo({url:'/pages/home/index/appointment/index'})}>
        <Image src={record}></Image>
          <View className='choose-title' style={{marginTop:'-15px'}}>预定服务</View>
          <View className='choose-text font-default-style'>选择专属在馆服务</View>
          <View className='choose-text font-default-style'>预约精品内容</View>
        </View>
        <View className='index-hr'></View>
        <View className='chooseItem' onClick={()=>Taro.navigateTo({url:'/pages/home/index/borrow/index'})}>
          <Image src={borrow}></Image>
          <View className='choose-title' style={{left:'64.27%',marginTop:'-15px'}}>借阅服务</View>
          <View className='choose-text font-default-style'>借阅专属在馆图书</View>
          <View className='choose-text font-default-style'>借阅精品图书</View>
        </View>
      </View>

      <View className='recommend font-default-style'>近期推荐</View>

      {/* <View className='recommend-view'>
        <Image src={lunbo}></Image>
        <View className='recommend-right'>
          <View className='recommend-title'><Text className='font-default-style'>书籍的奥秘</Text><View className='font-default-style'>新上架</View></View>
          <View className='recommend-info'>
            <View>刘易斯著</View>
            <View>巴黎 法国</View>
          </View>
        </View>
      </View> */}
        {
          list.map((item, index) => { 
            return <BookItem data={item} key={'精品'+index}></BookItem>
          })  
        }

      <Modal></Modal>
      
        
      </View>
    )
  }

