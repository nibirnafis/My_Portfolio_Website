import { Outlet } from 'react-router'
import './App.css'
import Routes from './components/Routes'
import NavigateTo from './utils/NavigateTo'
import Notice from './utils/Notice'




function App() {


  return (
    <>

    <div className='min-h-screen bg-base'>
      <Notice></Notice>
      <NavigateTo></NavigateTo>
      <div className='w-full '>
        <Outlet/>
      </div>
      <div className='w-full fixed bottom-0'>
        <Routes />
      </div>
    </div>

    </>
  )
}

export default App
