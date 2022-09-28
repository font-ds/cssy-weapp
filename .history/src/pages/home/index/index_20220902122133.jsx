import { View,Text , Swiper, SwiperItem,Image, ScrollView } from '@tarojs/components'
import Taro from '@tarojs/taro';
// import { AtButton } from 'taro-ui'

import './index.scss'
import lunbo from '../../../assets/lunbo.png';
import lunbo1 from '../../../assets/lunbo1.png';
import lunbo2 from '../../../assets/lunbo2.png';
import Modal from '../../../components/modal';

export default function Index () {
  // const count=useSelector(state=>state.count.count)

    return (
      <View className='index'>

        <Swiper
          className='test-h'
          indicatorColor='#999'
          indicatorActiveColor='#333'
          circular
          indicatorDots
          autoplay
        >
        <SwiperItem>
          <Image src={lunbo}></Image>
        </SwiperItem>
        <SwiperItem>
          <Image src={lunbo1}></Image>
        </SwiperItem>
        <SwiperItem>
          <Image src={lunbo2}></Image>
        </SwiperItem>
      </Swiper>

      {/* <View>专属服务</View> */}
      <View className='chooseView'>
        <View className='chooseItem' onClick={()=>Taro.navigateTo({url:'/pages/home/index/appointment/index'})}>
          <Text className='choose-title'>预定服务</Text>
          <Text>选择专属在馆服务</Text>
          <Text>预约精品内容</Text>
        </View>
        <View className='index-hr'></View>
        <View className='chooseItem' onClick={()=>Taro.navigateTo({url:'/pages/home/index/borrow/index'})}>
          <Text className='choose-title' style={{left:'64.27%'}}>借阅服务</Text>
          <Text>借阅专属在馆图书</Text>
          <Text>借阅精品图书</Text>
        </View>
      </View>

      <View className='recommend font-default-style'>近期推荐</View>
      <Modal></Modal>
 
      {/* <ScrollView scrollY style={{height:'4vh'}}>
        <View>123</View>
        <View>1234</View>
        <View>1235</View>
        <View>1236</View>
      </ScrollView> */}
        
      </View>
    )
  }

