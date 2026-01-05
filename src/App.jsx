import { Outlet } from 'react-router'
import './App.css'
import Routes from './components/Routes'
import NavigateTo from './utils/NavigateTo'




function App() {


  return (
    <>
    <NavigateTo></NavigateTo>
    <div className='min-h-screen bg-base pt-12 md:pt-24'>
      <div className='w-full'>
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
