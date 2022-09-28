import { ScrollView, View,Image,Text } from '@tarojs/components'
import { AtAvatar } from 'taro-ui'

import './index.scss'
import avator from '../../../../../../assets/avator.png';
import star from '../../../../../../assets/star.png';

export default function Reading () {
  

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
              <View>
                <View className='teacher-name'>爱情故事的阿伟</View>
                <View style={{marginTop:'-5px',marginLeft:'10px'}}>
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
          <View>只是一段。。只是一段。。只是一段。。只是一段。。只是一段。。只是一段。。只是一段。。只是一段。。只是一段。。只是一段。。只是一段。。只是一段。。只是一段。。</View>
          <View className='appoint'>预约讲师</View>
        </View>
        
      </ScrollView>
    )
  }

