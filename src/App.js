import './App.scss';
import Home from './pages/Home';
import NavBar from './Sections/NavBar';
import { SideBarContext } from './contexts/context';
import { useState } from 'react';

const App = () => {
const [sideBar, setSideBar] = useState(window.innerWidth > 600 ? true : false)

  return (
    <div className='app'>
      <SideBarContext.Provider value={{sideBar, setSideBar}}>
        <div className="cover" style={{display: sideBar ? 'block' : 'none'}} onClick={() => {setSideBar(false)}}></div>
        <NavBar/>
        <Home/>
      </SideBarContext.Provider>
    </div>
  );
}

export default App;