import { View, Text ,Image} from '@tarojs/components'
import Taro from '@tarojs/taro';
import { AtAvatar } from 'taro-ui'
import './index.scss'

import avator from '../../../assets/avator.png';
import record from '../../../assets/mine-record.png';
import borrow from '../../../assets/mine-borrow.png';
import discount from '../../../assets/mine-discount.png';

let systemInfo=Taro.getSystemInfoSync()

export default function Index () {

    let myServe=[
      {name:'预约记录',imageUrl:record,url:'/pages/home/mine/appointRecord/index'},
      {name:'借阅历史',imageUrl:borrow,url:'/pages/home/mine/lendRecord/index'},
      {name:'优惠券',imageUrl:discount,url:'/pages/home/mine/coupon/index'},
    ]
    let otherServe=[
      {name:'关于我们',imageUrl:null},
      {name:'联系我们',imageUrl:null},
    ]

    // 跳转
    const navitation=(url)=>{
      return ()=>Taro.navigateTo({url})
    }
  
    return (
      <View className='mime'>
        <View className='mine-back-1'></View>
        <View className='mine-back-2'></View>
        <View className='mine-back-3'></View>
        <View className='mine-back-4'></View>
        <View className='mine-title' style={{marginTop:systemInfo.statusBarHeight,lineHeight:'44px'}}>会员中心</View>

        <View className='top-view'>
          <AtAvatar className='avator' circle size='large' image={avator}></AtAvatar>
          <View className='info-name font-default-style'>你好我叫阿志</View>
          <View className='info-phone font-default-style'>18680704968</View>

          <View className='vip-view'>
            <Text className='vip-type'>SVIP会员<Text className='hr'></Text><Text className='vip-time font-default-style'>2022.09.15到期</Text></Text>
            <Text className='vip-btn' onClick={navitation('/pages/home/mine/power/index')}>查看权益</Text>
          </View>

        </View>

        <View className='bottom-view'>
          <View className='server'>
            {
              myServe.map(item=>{
                return <View key={item.name} onClick={navitation(item.url)}>
                <Image src={item.imageUrl}></Image>

                  <Text>{item.name}</Text>
                </View>
              })
            }
          </View>

          <View>其他服务</View>
          <View className='server'>
            {
              otherServe.map(item=>{
                return <View key={item.name}>
                <Image src={item.imageUrl}></Image>
                <Text>{item.name}</Text>
              </View>
              })
            }
            <View></View>
          </View>
          
        </View>
        
      </View>
    )
  }

