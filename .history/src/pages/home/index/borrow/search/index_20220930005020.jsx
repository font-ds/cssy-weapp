import {useState,useEffect} from 'react';
import { View, ScrollView } from '@tarojs/components'
import {getCurrentInstance} from '@tarojs/taro'
import {useDispatch} from 'react-redux'
import { AtInput ,AtIcon} from 'taro-ui'

import request from '../../../../../utils/request'

import './index.scss'
import BookItem from '../components/bookItem';

export default function Index () {

  const dispatch=useDispatch()
  // 书籍列表
  const [list, setList] = useState([])
  const [page, setPage] = useState([])
  const [flag,setFlag]=useState(true)
  // 获取输入框内容
  const [ipt,setIpt]=useState()

  // 获取书籍列表 type->是否是重置查询
  const getBooks = (name, type = 0) => {
    if (flag) {
      setFlag(false)
      request({
        url: `/front/book?keyword=${name}&limit=10&page=${page}`,
        success: function (res) {
          if (res.data.status == 0) {
            if (!type) setList(res.data.data.books)
            else setList([...list, ...res.data.data.books])
          }
          setFlag(true)
        }, dispatch
      })
    }
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

