import {useState,useEffect} from 'react';
import { View, Video,ScrollView } from '@tarojs/components'
import Taro from '@tarojs/taro';
import request from '../../../utils/request';

import './index.scss'

let systemInfo=Taro.getSystemInfoSync()


export default function  Index () {
  
  const [currentId, setCurrentId] = useState(null)
  const [page, setPage] = useState(0)
  const [flag, setFlag] = useState(true)
  const [list,setList]=useState([])
  
  const getVideo = () => { 
    request({
      url: '/front/video?limit=5&page=' + page,
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
      }
    })
  }

  const test=(id)=>{
    if(currentId && currentId!=id){
      const videoContext = Taro.createVideoContext(currentId)
      videoContext.stop()
    }
    setCurrentId(id)
  }

  useEffect(() => {
    getVideo()
  }, []);

    return (
      <View className='online'>
        <View className='online-title' 
          style={{marginTop:systemInfo.statusBarHeight,lineHeight:'44px'}}
        >电子书馆</View>
        <ScrollView
          scrollY
          enhanced
          showScrollbar={false}
          onScrollToLower={() => { 
            if (!list.length / 5 && flag) { 
              getVideo()
            }
          }}
        >
        {
          list?.map((item, index) => { 
            return <View className='video-item' key={index}>
            <Video
              className='video'
              id={item.video_id}
              src={item.key}
              controls
              poster={item.cover}
              enablePlayGesture
              direction='90'
              onPlay={(e)=>test(e.mpEvent.currentTarget.id)}
            />
              <View className='vedio-title font-default-style'>{ item.title}</View>
          </View>
          })
        }
        </ScrollView>
      </View>
    )
  }

