import { View, Text } from '@tarojs/components'
import Taro from '@tarojs/taro';
import { AtAvatar } from 'taro-ui'
import './index.scss'

import avator from '../../../assets/avator.png';

export default function Index () {

    let myServe=[
      {name:'预约记录',imageUrl:null,url:'/pages/home/mine/appointRecord/index'},
      {name:'借阅历史',imageUrl:null,url:'/pages/home/mine/lendRecord/index'},
      {name:'优惠券',imageUrl:null,url:'/pages/home/mine/coupon/index'},
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
        <View className='top-view'>
          <View className='user-info'>
            <AtAvatar circle size='large' image={avator}></AtAvatar>
            <View>
              <View>你好我叫阿志</View>
              <View>18680704968</View>
            </View>
          </View>

          <View className='vip-view'>
            <Text>SVIP会员<Text className='hr'></Text><Text>2022.09.15到期</Text></Text>
            <Text onClick={navitation('/pages/home/mine/power/index')}>查看权益</Text>
          </View>

        </View>

        <View className='bottom-view'>
          <View>我的服务</View>
          <View className='server'>
            {
              myServe.map(item=>{
                return <View key={item.name} onClick={navitation(item.url)}>
                  {/* <Image></Image> */}
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
                {/* <Image></Image> */}
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

