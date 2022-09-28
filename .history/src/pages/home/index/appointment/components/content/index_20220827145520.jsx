import { ScrollView, Text, View, Image} from '@tarojs/components'
import Taro from '@tarojs/taro';

import './index.scss'
import lunbo from '../../../../../../assets/lunbo.png';

export default function Content () {
  

    return (
      <ScrollView
        scrollY 
        enhanced 
        showScrollbar={false} 
        className='content'
      >

        <View className='content-item' onClick={()=>Taro.navigateTo({url:'/pages/home/index/appointment/contentAppoint/index'})}>
          <Image className='item-left' src={lunbo}></Image>
          <View className='item-right'>
            <Text>111 </Text>
          </View>
        </View>
        
      </ScrollView>
    )
  }

