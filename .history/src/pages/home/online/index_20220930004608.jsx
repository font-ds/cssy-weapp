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
    if(currentId){
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
          lowerThreshold={0}
          onScrollToLower={() => { 
            if (!list.length / 10 && flag) { 
              getVideo()
            }
          }}
        >
        {/* {
          list?.map((item, index) => { 
            return <View className='video-item' key={index}>
            <Video
              className='video'
              id='1'
              src='https://library-1313332868.cos.ap-chongqing.myqcloud.com/QQ%E8%A7%86%E9%A2%9120220914173523.mp4?q-sign-algorithm=sha1&q-ak=AKIDvaDN7BHKLIEBaVBROdgnqZhvUJbapbMgZ5HzhwR9rYisrXFMDM4usNladJZWskGl&q-sign-time=1663148242;1663151842&q-key-time=1663148242;1663151842&q-header-list=host&q-url-param-list=&q-signature=ed2fcb5a139e0d9d73028b2d47bd0c4d88ac0baf&x-cos-security-token=a8mTSwqfBrl1GtoVTC23N4I8GvEHX8ka96b5c3538661e31e4a9bb3870c943ffes0oRlYR96w2nnNp6hVYFDUwIBV2fyTSxN8KxLriJo5zlln-f4mYSJDQYFCIW6za0KjdzncDnDmpBjZe_lYzsKMFj6It6e8CB7d3hhPkGX0EmXDvxGfBAohmcYBMzLbqtjrquoFtbldkVrqR7Br72gdFpHnA4XvQIcXPhVPoL0dBrd_TXBcIbzbGHDzeywuXI'
              controls
              // poster='https://blogimages.jspang.com/blogtouxiang1.jpg'
              // id='video'
              enablePlayGesture
              direction='90'
              onPlay={(e)=>test(e.mpEvent.currentTarget.id)}
            />
            <View className='vedio-title font-default-style'>中国影史第一动画电影中国影史第一动画电影中国影史第一动画电影中国影史第啦啦啦啦啦啦...</View>
          </View>
          })
        } */}
        </ScrollView>
        
        <View className='video-item'>
          <Video
            className='video'
            id='1'
            src='https://library-1313332868.cos.ap-chongqing.myqcloud.com/QQ%E8%A7%86%E9%A2%9120220914173523.mp4?q-sign-algorithm=sha1&q-ak=AKIDvaDN7BHKLIEBaVBROdgnqZhvUJbapbMgZ5HzhwR9rYisrXFMDM4usNladJZWskGl&q-sign-time=1663148242;1663151842&q-key-time=1663148242;1663151842&q-header-list=host&q-url-param-list=&q-signature=ed2fcb5a139e0d9d73028b2d47bd0c4d88ac0baf&x-cos-security-token=a8mTSwqfBrl1GtoVTC23N4I8GvEHX8ka96b5c3538661e31e4a9bb3870c943ffes0oRlYR96w2nnNp6hVYFDUwIBV2fyTSxN8KxLriJo5zlln-f4mYSJDQYFCIW6za0KjdzncDnDmpBjZe_lYzsKMFj6It6e8CB7d3hhPkGX0EmXDvxGfBAohmcYBMzLbqtjrquoFtbldkVrqR7Br72gdFpHnA4XvQIcXPhVPoL0dBrd_TXBcIbzbGHDzeywuXI'
            controls
            // poster='https://blogimages.jspang.com/blogtouxiang1.jpg'
            // id='video'
            enablePlayGesture
            direction='90'
            onPlay={(e)=>test(e.mpEvent.currentTarget.id)}
          />
          <View className='vedio-title font-default-style'>中国影史第一动画电影中国影史第一动画电影中国影史第一动画电影中国影史第啦啦啦啦啦啦...</View>
        </View>
        <View className='video-item'>
          <Video
            className='video'
            id='2'
            src='http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400'
            controls
            // poster='https://blogimages.jspang.com/blogtouxiang1.jpg'
            // id='video'
            enablePlayGesture
            direction='90'
            onPlay={(e)=>test(e.mpEvent.currentTarget.id)}
          />
          <View>线上图书</View>
        </View>
      </View>
    )
  }

