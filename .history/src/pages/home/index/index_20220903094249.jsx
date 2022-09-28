import { View,Text , Swiper, SwiperItem,Image, ScrollView } from '@tarojs/components'
import Taro from '@tarojs/taro';
// import { AtButton } from 'taro-ui'

import './index.scss'

import back from '../../../assets/index-back.png';
import lunbo from '../../../assets/lunbo.png';
import Modal from '../../../components/modal';
import borrow from '../../../assets/index-borrow.png';
import record from '../../../assets/index-record.png';

export default function Index () {
  // const count=useSelector(state=>state.count.count)

    return (
      <View className='index'>

      <Image className='index-back' src={back}></Image>

      {/* <View>专属服务</View> */}
      <View className='chooseView'>
        <View className='chooseItem' onClick={()=>Taro.navigateTo({url:'/pages/home/index/appointment/index'})}>
        <Image src={record}></Image>
          <View className='choose-title' style={{marginTop:'-15px'}}>预定服务</View>
          <View className='choose-text font-default-style'>选择专属在馆服务</View>
          <View className='choose-text font-default-style'>预约精品内容</View>
        </View>
        <View className='index-hr'></View>
        <View className='chooseItem' onClick={()=>Taro.navigateTo({url:'/pages/home/index/borrow/index'})}>
          <Image src={borrow}></Image>
          <View className='choose-title' style={{left:'64.27%',marginTop:'-15px'}}>借阅服务</View>
          <View className='choose-text font-default-style'>借阅专属在馆图书</View>
          <View className='choose-text font-default-style'>借阅精品图书</View>
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
