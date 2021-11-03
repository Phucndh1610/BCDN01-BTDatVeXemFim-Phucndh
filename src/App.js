
import './App.css';

// redux
import {store} from './redux/configStore';
import {Provider} from 'react-redux';
import BaiTapBookingTicket from './BaiTapBookingTicket/BaiTapBookingTicket'

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BaiTapBookingTicket/>
      </Provider>
    </div>
  );
}

export default App;
