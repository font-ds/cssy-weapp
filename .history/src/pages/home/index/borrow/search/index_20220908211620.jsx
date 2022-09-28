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

  // 获取书籍列表 type->是否是重置查询
  const getBooks=(name,type=0)=>{
    request({
      url:`/front/book?keyword=${name}`,
      success:function(res){
        if(res.statusCode==200) {
          if(type) setList(res.data.data)
          else setList([...list,...res.data.data])
        }
      },dispatch
    })
  }
  
  // 初始化输入框内容和请求书籍
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
          onConfirm={(e)=>{getBooks(e,1)}}
        >
          <AtIcon value='search' className='search-icon' size='25 ' color='lightgray'></AtIcon>
        </AtInput>
        
       
         
        <ScrollView  scrollY enhanced showScrollbar={false} className='scroll-view'>
          {
            list?.map((item,index)=><BookItem data={item} key={'搜索'+index}></BookItem>)
          }
        </ScrollView>
      </View>
    )
  }

