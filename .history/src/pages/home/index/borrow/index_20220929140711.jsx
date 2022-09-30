import {useEffect,useState} from 'react';
import { View, Text, Swiper, SwiperItem, Image, ScrollView } from '@tarojs/components'
import { AtInput ,AtIcon} from 'taro-ui'
import Taro from '@tarojs/taro';
import {useDispatch} from 'react-redux'
import request from '../../../../utils/request'

import BookItem from './components/bookItem/index';
import './index.scss'
import bottom from '../../../../assets/appoint-bottom.png';

export default function Index () {
  const dispatch=useDispatch()

  // 控制swiper和请求书籍type
  const [swiperCurrent,setSwiperCurrent]=useState(0)
  // 默认列表
  const [normalList,setNormalList]=useState([])
  // 精品列表
  const [vipList,setVipList]=useState([])
  // 输入框内容
  const [keyword,setKeyWord]=useState(null)
  // 默认page
  const [normalPage,setNormalPage]=useState(0)
  // 精品page
  const [vipPage,setVipPage]=useState(0)

  // 获取书籍
  const getBooks=()=>{
    let currentType=swiperCurrent
    let currentPage
    if(currentType==0) currentPage=normalPage
    else currentPage=vipPage
    request({
      url:`/front/book?page=${currentPage}&type=${currentType}`,
      success: function (res) {
        console.log(res)

        if (res.data.status == 0) {
        console.log(res)
          
          if(!currentType) {
            setNormalList([...normalList,...res.data.data.books])
            setNormalPage(normalPage+1)
          }
          else{
            setVipList([...vipList,...res.data.data])
            setVipPage(vipPage+1)
          } 
        }
      },dispatch
    })
  }

  useEffect(()=>{
    getBooks()
  },[])
  

    return (
      <View className='borrow font-default-style'>
        <View className='top-view'>
          <AtInput
            className='search'
            type='text'
            placeholder='搜索您想借阅的书籍'
            value={keyword}
            onChange={e=>setKeyWord(e)}
            onConfirm={(e)=>{
              setKeyWord('')
              Taro.navigateTo({url:`/pages/home/index/borrow/search/index?name=${e}`})
            }}
          >
            <AtIcon value='search' className='search-icon' size='25 ' color='lightgray'></AtIcon>
          </AtInput>
          <View className='totleView'>
            <Text style={{color:swiperCurrent?'rgba(101, 124, 133, 0.6)':'#233941'}} 
              onClick={()=>setSwiperCurrent(0)}
            >推荐</Text>
            <Text style={{color:!swiperCurrent?'rgba(101, 124, 133, 0.6)':'#233941'}}
              onClick={()=>setSwiperCurrent(1)}
            >精品</Text>
          </View>
          <View className={!swiperCurrent?'img-view':'img-view choose-two'}>
            <Image className='choose-bottom' src={bottom} />
          </View>
        </View>
        


        <Swiper
          className='swiper'
          indicatorColor='#999'
          indicatorActiveColor='#333'
          circular
          disableTouch
          current={swiperCurrent}
          onChange={({detail})=>{setSwiperCurrent(detail.current)}}
        >
          <SwiperItem className='swiper-item'>
            <ScrollView  scrollY enhanced showScrollbar={false} className='scroll-view'>
              {
                normalList?.map((item,index)=><BookItem data={item} key={'默认'+index}></BookItem>)
              }
            </ScrollView>
          </SwiperItem>

          <SwiperItem className='swiper-item'>
            <ScrollView  scrollY enhanced showScrollbar={false} className='scroll-view'>
              {
                vipList?.map((item,index)=><BookItem data={item} key={'精品'+index}></BookItem>)
              }
            </ScrollView>
          </SwiperItem>
          
        </Swiper>

      </View>
    )
  }

