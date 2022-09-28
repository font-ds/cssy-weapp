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
            <View>
              <View>《牧羊少年的奇幻漂流零》</View>
              <View>07月23日 13:00-15:00</View>
            </View>
            <View>

            </View>
          </View>
        </View>
        
      </ScrollView>
    )
  }

