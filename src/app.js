import {Provider} from 'react-redux'
// import {Text} from '@tarojs/components';
import {store} from './store/store'
import Modal from './components/modal';
import './app.scss'

function App (props) {  


    return <Provider store={store}>
        {props.children}
        <Modal></Modal>
      </Provider>

  }

export default App
