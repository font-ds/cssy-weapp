import {useState} from 'react';
import { View, Video } from '@tarojs/components'
import Taro from '@tarojs/taro';
import './index.scss'

let systemInfo=Taro.getSystemInfoSync()
let height=systemInfo.screenHeight-systemInfo.windowHeight

export default function  Index () {
  
  const [currentId,setCurrentId]=useState(null)

  const test=(id)=>{
    console.log(1111,id)
    if(currentId){
      console.log('暂停')
      const videoContext = Taro.createVideoContext(currentId)
      videoContext.stop()
    }
    setCurrentId(id)
  }

    return (
      <View className='online'>
        <View className='online-title' 
          style={{height:height*2,fontSize:height/2+'px',backgroundColor:'red'}}
        >电子书馆</View>
        <View className='video-item'>
          <Video
            className='video'
            id='1'
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

