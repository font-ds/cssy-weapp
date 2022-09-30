import { useState,useEffect} from 'react'
import { ScrollView, View, Image, Text } from '@tarojs/components'
import { AtAvatar } from 'taro-ui'
import { useDispatch } from 'react-redux';
import Taro from '@tarojs/taro';

import request from '../../../../../../utils/request';
import './index.scss'
import star from '../../../../../../assets/star.png';
import { set } from '../../../../../../store/img';

export default function Reading () {
  const dispatch = useDispatch()
  const [page, setPage] = useState(0)
  const [list, setList] = useState([])
  const [flag,setFlag]=useState(true)
  
  const getList = () => { 
    request(
      {
        url: '/front/tutor?limit=10&state=1&page=' + page,
        success: (res) => {
          if (res.data.status == 0 && flag) { 
              setFlag(false)
              setPage(page + 1)
              if (res.data.data) { 
                if (list.length == 0) setList(res.data.data)
                else setList([...list, ...res.data.data])
                setFlag(true)
              }
            }
        },dispatch
      }
    )
  }

  useEffect(() => {
    getList()
  }, []);


    return (
      <ScrollView
        scrollY 
        enhanced 
        showScrollbar={false} 
        className='teacher font-default-style'
      >
        {
          list?.map((item) => { 
            if(item.state) return <View className='teacher-item' key={item.name}>
            <View className='teacher-view'>
              <View className='teacher-info'>
                <AtAvatar className='image' circle image={item.avatar}></AtAvatar>
                <View style={{paddingLeft:'10px'}}>
                    <View className='teacher-name'>{ item.name }</View>
                  <View style={{marginTop:'-5px'}}>
                    <Image src={star}></Image><Image src={star}></Image><Image src={star}></Image><Image src={star}></Image><Image src={star}></Image>
                    {/* <Text>有609人预约</Text> */}
                  </View>
                    <View className='teacher-tag'>{ item.label }</View>
                </View>
              </View>
                <View className='info-right' onClick={() => { 
                  console.log(1111)
                  dispatch(set({url:item.avatar,times:item.days,content:item.introduction}))
                  let newData = encodeURIComponent(JSON.stringify({ tutor_id: item.tutor_id, name: item.name }))
                  Taro.navigateTo({url: '/pages/home/index/components/appointDetail/index?data='+newData })
                }}
                >
                <Text>+</Text> 预约讲师
              </View>
            </View>
            <View className='teacher-intro'>
              {item.introduction}
            </View>
          </View>
          })
        }
      </ScrollView>
    )
  }

