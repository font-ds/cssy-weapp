import { View, Text, Image } from '@tarojs/components'
import {AtButton} from 'taro-ui';
import {useDispatch, useSelector} from 'react-redux';
import {show} from '../../../../store/modal';
import Modal from '../../../../components/modal';

import './index.scss'

import abilite from '../../../../assets/power-abilite.png';
import borrow from '../../../../assets/power-borrow.png';
import read from '../../../../assets/power-read.png';

export default function Index () {

  const dispatch=useDispatch()
  const modal=useSelector(state=>state.modal)

  let vipPower=[
    {imageUrl:read,name:'精品阅读',discribe:'提供精品书籍'},
    {imageUrl:borrow,name:'丰富阅读',discribe:'专享互动阅读'},
    {imageUrl:abilite,name:'专享借阅',discribe:'专享书籍借阅'},
  ]

  const upVip=()=>{
    dispatch(show({
      title:'会员权益说明',
      text:[
        '如若需要开通/续费/升级会员权益',
        '请前往线下门店进行服务',
        '门店地址:春山拾阅儿童图书馆(龙湖',
        '礼嘉天街A馆3FF24-25)',
        '门店电话：18680704968'
      ]
    }))
  }
  
    return (
      <View className='power'>
        <View className='vip-view'>
          <View className='time'>
            <Text className='vip-type'>当前身份</Text>
            <Text className='vip-time font-default-style'>有效至:2022.09.15</Text>
          </View>
          <View className='vip-type'>
            SVIP
          </View>
          <AtButton className='btn'   type='primary' onClick={upVip}>续费/升级</AtButton>
        </View>
        {/* <View className='white-vip'>SVIP</View> */}

        <View className='title font-default-style'>会员权益</View>
        <View className='padding-view'>
          {
            vipPower.map(item=>
              <View className='power-item' key={item.name}>
                <Image src={item.imageUrl}></Image>
                <View className='item-name'>{item.name}</View>
                <View className='item-discribe'>{item.discribe}</View>
              </View>
            )
          }
        </View>
        
        <View className='title'>开通权益说明</View>
        <View className='padding-view'>
          开通权益文案开通权益文案开通权益文案开通权益文案开通权益文案开通权益文案
        </View>

        {
          modal.visible?<Modal />:null
        }
      </View>
    )
  }

