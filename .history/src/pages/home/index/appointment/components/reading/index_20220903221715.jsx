import { ScrollView, View, Image,Text } from '@tarojs/components'
import Taro from '@tarojs/taro';
import './index.scss'
import lunbo from '../../../../../../assets/lunbo.png';
import star from '../../../../../../assets/star.png';

export default function Reading () {
  
  let content=[
    {
      imageUrl:lunbo,
      title:'亲子预约',
      discribe:'亲子服务亲子服务',
      num:'243',
      url:'/pages/home/index/appointment/readAppoint/index?title=亲子预约'
    },
    {
      imageUrl:lunbo,
      title:'畅读预约',
      discribe:'畅读服务畅读服务',
      num:'243',
      url:'/pages/home/index/appointment/readAppoint/index?title=畅读预约'
    }
  ]

    return (
      <ScrollView
        scrollY 
        enhanced 
        showScrollbar={false} 
        className='reading'
        lowerThreshold={30}
        onScrolltolower={()=>{console.log(111)}}
      >

        {
          content.map(item=>{
            return <View key={item.title} className='reding-item' onClick={()=>Taro.navigateTo({url:item.url})}>
            <Image src={lunbo}></Image>
            <View className='item-title'>{item.title}<Text>有 {item.num} 人预约过</Text></View>
            <View className='item-discribe'>{item.discribe}</View>
            <View className='star'>
              <Image src={star}></Image>
              <Image src={star}></Image>
              <Image src={star}></Image>
              <Image src={star}></Image>
              <Image src={star}></Image>
            </View>
          </View>
          })
        }
        
        
      </ScrollView>
    )
  }

