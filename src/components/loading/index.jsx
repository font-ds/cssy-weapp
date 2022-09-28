import { View} from '@tarojs/components';
import { AtActivityIndicator } from 'taro-ui'

import './index.scss'

export default function Loading() {
  return (
    <View>
        <AtActivityIndicator size={40} mode='center' content='加载中...'></AtActivityIndicator>
    </View>
  )
}
