import './App.css'
import { Provider } from 'react-redux'
import store from './redux/store'
import Header from './components/Header'
import 'bootstrap/dist/css/bootstrap.min.css'
import Footer from './components/Footer'
import AppRouter from './router/AppRouter'
import PriceUpdate from './screens/PriceUpdate'

function App() {
  return (
    <Provider store={store}>
      <div>
        <Header />
        <AppRouter />
        {/* <PriceUpdate /> */}
        <Footer />
      </div>
    </Provider>
  )
}

export default App
