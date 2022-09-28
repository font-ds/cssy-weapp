import {useState,useEffect} from 'react';
import { View, ScrollView } from '@tarojs/components'
import {getCurrentInstance} from '@tarojs/taro'
import {useDispatch} from 'react-redux'
import request from '../../../../../utils/request'
import { AtInput ,AtIcon} from 'taro-ui'

import './index.scss'
// import Loading from '../../../../components/loading/index';
import lunbo from '../../../../../assets/lunbo.png';
import BookItem from '../components/bookItem';

export default function Index () {

  const dispatch=useDispatch()
  // 书籍列表
  const [list,setList]=useState([])
  // 获取输入框内容
  const [ipt,setIpt]=useState()

  // 获取书籍列表
  const getBooks=(name)=>{
    request({
      url:`/front/book?keyword=${name}`,
      success:function(res){
        if(res.statusCode==200) setList([...list,...res.data.data])
      },dispatch
    })
  }
  
  useEffect(()=>{
    let iptValue=getCurrentInstance().router.params.name
    setIpt(iptValue)
    getBooks(iptValue)
  },[])

    return (
      <View className='search-view'>
        <AtInput
          className='search'
          type='text'
          placeholder='搜索您想借阅的书籍'
          value={ipt}
          onChange={e=>setIpt(e)}
          onConfirm={(e)=>{console.log(e)}}
        >
          <AtIcon value='search' className='search-icon' size='25 ' color='lightgray'></AtIcon>
        </AtInput>
        
       
         
        <ScrollView  scrollY enhanced showScrollbar={false} className='scroll-view'>
          <BookItem></BookItem>
          <BookItem></BookItem>
          <BookItem></BookItem>
          <BookItem></BookItem>
          <BookItem></BookItem>
          <BookItem></BookItem>
          <BookItem></BookItem>
          <BookItem></BookItem>
          <BookItem></BookItem>
          <BookItem></BookItem>
          <BookItem></BookItem>
        </ScrollView>
      </View>
    )
  }

