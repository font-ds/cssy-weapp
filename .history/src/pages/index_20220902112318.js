import {useEffect} from 'react';
import {View,Image} from '@tarojs/components';
import Taro from '@tarojs/taro';

export default function Index() {

    useEffect(()=>{
        // setTimeout(()=>{
        //     Taro.navigateTo({url:'/pages/login/index'})

        // },1000)
    })

  return (
    <View className='start-index'>
      <Image src={null}></Image>
    </View>
  )
}
