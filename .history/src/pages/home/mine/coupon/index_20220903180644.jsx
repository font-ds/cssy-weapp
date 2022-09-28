import { View, Text } from '@tarojs/components'
import { AtInput ,AtButton,AtTag} from 'taro-ui'

import './index.scss'

export default function Index () {

  let couponItems=[
    {name:'暑假盛宴大促销优惠券',type:'折扣券',time:'2018.04.11至2018.05.11',money:'10',low:0}
  ]
  
    return (
      <View className='coupon font-default-style'>
        <AtInput
          clear
          type='text'
          maxLength='12'
          placeholder='请输入优惠券兑换码'
          // value={this.state.value}
          onChange={()=>{}}
          className='coupon-ipt'
        >
          {/* <Text>兑换</Text> */}
        </AtInput>
        <AtButton type='primary' circle className='coupon-btn'>兑换</AtButton>
        
        <View>我的优惠券</View>

        {
          couponItems.map(item=>
              <View className='coupon-item' key={item.name+item.time}>
                <View className='money-view'>
                  <View>¥<Text className='money'>{item.money}</Text></View>
                  <View>无金额门槛</View>
                </View>
                <View className='info-view'>
                  <View>
                    <AtTag className='tag' type='primary' >{item.type}</AtTag>
                    <Text>{item.name}</Text>
                  </View>
                  <View>
                    <Text>{item.time}</Text>
                    {/* <AtButton type='primary' circle className='use-btn'>使用优惠券</AtButton> */}
                  </View>
                </View>
              </View>
            )
        }
    
      </View>
    )
  }

