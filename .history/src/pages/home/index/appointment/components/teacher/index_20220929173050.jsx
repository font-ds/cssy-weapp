import { useState,useEffect} from 'react'
import { ScrollView, View, Image, Text } from '@tarojs/components'
import { AtAvatar } from 'taro-ui'
import {useDispatch} from 'react-redux';
import request from '../../../../../../utils/request';
import './index.scss'
import avator from '../../../../../../assets/avator.png';
import star from '../../../../../../assets/star.png';

export default function Reading () {
  const dispatch = useDispatch()
  const [page, setPage] = useState(0)
  const [list,setList]=useState([])
  
  const getList = () => { 
    request(
      {
        url: '/front/tutor?limit=10&state=1&page=' + page,
        success: (res) => {
          if (res.data.status == 0) { 
            setPage(page+1)
            if (list.length == 0) setList(res.data.data)
            else setList([...list,...res.data.data])
          }
        },dispatch
      }
    )
  }

  useEffect(() => {
    getList
  }, []);


    return (
      <ScrollView
        scrollY 
        enhanced 
        showScrollbar={false} 
        className='teacher font-default-style'
      >

        <View className='teacher-item'>
          <View className='teacher-view'>
            <View className='teacher-info'>
              <AtAvatar className='image' circle image={avator}></AtAvatar>
              <View style={{paddingLeft:'10px'}}>
                <View className='teacher-name'>爱情故事的阿伟</View>
                <View style={{marginTop:'-5px'}}>
                  <Image src={star}></Image><Image src={star}></Image><Image src={star}></Image><Image src={star}></Image><Image src={star}></Image>
                  <Text>有609人预约</Text>
                </View>
                <View className='teacher-tag'>个性化标签</View>
              </View>
            </View>
            <View className='info-right'>
              <Text>+</Text> 预约讲师
            </View>
          </View>
          <View className='teacher-intro'>
          这是一段属于专业导读师这是一段属于专业导读师这是一段属于专业导读师这是一段属于专业导读师这是一段属...
          </View>
        </View>
        
      </ScrollView>
    )
  }

