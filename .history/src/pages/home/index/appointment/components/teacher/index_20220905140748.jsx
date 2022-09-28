import { ScrollView, View } from '@tarojs/components'
import { AtAvatar } from 'taro-ui'

import './index.scss'
import avator from '../../../../../../assets/avator.png';

export default function Reading () {
  

    return (
      <ScrollView
        scrollY 
        enhanced 
        showScrollbar={false} 
        className='teacher'
      >

        <View className='teacher-item'>
          <View className='teacher-view'>
            <View className='teacher-info'>
              <AtAvatar className='image' circle image={avator}></AtAvatar>
              <View>
                <View>爱情故事的阿伟</View>
                <View>个性化标签</View>
              </View>
            </View>
            <View className='info-right'>
              <View>有234人预约过</View>
              <View>评价</View>
            </View>
          </View>
          <View>只是一段。。只是一段。。只是一段。。只是一段。。只是一段。。只是一段。。只是一段。。只是一段。。只是一段。。只是一段。。只是一段。。只是一段。。只是一段。。</View>
          <View className='appoint'>预约讲师</View>
        </View>
        
      </ScrollView>
    )
  }

