import { View, Text ,Image} from '@tarojs/components'
import Taro from '@tarojs/taro';
import {useDispatch, useSelector} from 'react-redux'
import { AtAvatar } from 'taro-ui'
import {show} from '../../../store/modal'
import Modal from '../../../components/modal'
import { getCurrentTime} from '../../../utils/getTime'
import './index.scss'

import record from '../../../assets/mine-record.png';
import borrow from '../../../assets/mine-borrow.png';
import discount from '../../../assets/mine-discount.png';
import about from '../../../assets/mine-about.png';
import link from '../../../assets/mine-link.png';

let systemInfo = Taro.getSystemInfoSync()

export default function Index() {
  const dispatch=useDispatch()
  // 获取用户信息
  let info = useSelector(state => state.info.userInfo)
  console.log(new Date(info.power_expired))
  // console.log(new Date(info.userInfo.power_expired))
  let modal = useSelector(state => state.modal)
  let wxInfo=Taro.getStorageInfoSync('info')
  
  console.log(modal)

    let myServe=[
      {name:'预约记录',imageUrl:record,url:'/pages/home/mine/appointRecord/index'},
      {name:'借阅历史',imageUrl:borrow,url:'/pages/home/mine/lendRecord/index'},
      {name:'优惠券',imageUrl:discount,url:'/pages/home/mine/coupon/index'},
    ]
    let otherServe=[
      {name:'关于我们',imageUrl:about},
      {name:'联系我们',imageUrl:link},
    ]

    // 跳转
    const navitation=(url)=>{
      return ()=>Taro.navigateTo({url})
    }
  
    // 关于我们和联系我们点击操作
    const onClickFunc=(index)=>{
      if(index) Taro.makePhoneCall({phoneNumber:'15824967233'})
      else{
        dispatch(show({
          title:'关于我们',
          text:['保存二维码，打开微信扫一扫','关注我们，获取更多信息']
        }))
      }
    }

    return (
      <View className='mime'>
        <View className='mine-back-1'></View>
        <View className='mine-back-2'></View>
        <View className='mine-back-3'></View>
        <View className='mine-back-4'></View>
        <View className='mine-title' style={{marginTop:systemInfo.statusBarHeight,lineHeight:'44px'}}>会员中心</View>

        <View className='top-view'>
          <AtAvatar className='avator' circle size='large' image={wxInfo.avatarUrl}></AtAvatar>
          <View className='info-name font-default-style'>{info?.name}</View>
          <View className='info-phone font-default-style'>{info?.phone}</View>

          <View className='vip-view'>
            <Text className={info.power ? 'vip-type normal-type' : 'vip-type'} >{info?.power == 1 ? 'VIP' : info?.power == 2 ? 'SVIP' : '普通'}会员<Text className='hr'></Text><Text className='vip-time font-default-style'>{ getCurrentTime(info.power_expired) }到期</Text></Text>
            <Text className='vip-btn' onClick={navitation('/pages/home/mine/power/index')}>查看权益</Text>
          </View>

        </View>

        <View className='bottom-view'>
          <View className='server'>
            {
              myServe.map(item=>{
                return <View className='server-item' key={item.name} onClick={navitation(item.url)}>
                  <Image src={item.imageUrl}></Image>
                  <Text>{item.name}</Text>
                </View>
              })
            }
          </View>

          <View className='other-title'><View></View><Text className='font-default-style'>其他服务</Text></View>
          <View className='other'>
            {
              otherServe.map((item,index)=>{
                return <View key={item.name} onClick={()=>onClickFunc(index)}>
                <Image src={item.imageUrl}></Image>
                <Text className='font-default-style'>{item.name}</Text>
              </View>
              })
            }
            <View style={{width:'30%'}}></View>
          </View>
          
        </View>
        {
          modal.visible?<Modal></Modal>:null
        }
      </View>
    )
  }

