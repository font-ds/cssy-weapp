import { View,Text , Swiper, SwiperItem,Image, ScrollView } from '@tarojs/components'
import Taro from '@tarojs/taro';
// import { AtButton } from 'taro-ui'

import './index.scss'
import lunbo from '../../../assets/lunbo.png';
import lunbo1 from '../../../assets/lunbo1.png';
import lunbo2 from '../../../assets/lunbo2.png';
import Modal from '../../../components/modal';
import borrow from '../../../assets/index-borrow.png';
import record from '../../../assets/index-record.png';

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
        <Image src={record}></Image>

          <View className='choose-title'>预定服务</View>
          <View>选择专属在馆服务</View>
          <View>预约精品内容</View>
        </View>
        <View className='index-hr'></View>
        <View className='chooseItem' onClick={()=>Taro.navigateTo({url:'/pages/home/index/borrow/index'})}>
          <Image src={borrow}></Image>
          <View className='choose-title' style={{left:'64.27%'}}>借阅服务</View>
          <View>借阅专属在馆图书</View>
          <View>借阅精品图书</View>
        </View>
      </View>

      <View className='recommend font-default-style'>近期推荐</View>

      <View className='recommend-view'>
        <Image src={lunbo}></Image>
        <View className='recommend-right'>
          <View className='recommend-title'><Text className='font-default-style'>书籍的奥秘</Text><View className='font-default-style'>新上架</View></View>
          <View className='recommend-info'>
            <View>刘易斯著</View>
            <View>巴黎 法国</View>
          </View>
        </View>
      </View>

      <Modal></Modal>
      
        
      </View>
    )
  }

