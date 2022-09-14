import './App.scss';
import Home from './pages/Home';
import NavBar from './Sections/NavBar';
import { SideBarContext } from './contexts/context';
import { useState } from 'react';

const App = () => {
const [sideBar, setSideBar] = useState(true)

  return (
    <div className='app'>
      <SideBarContext.Provider value={{sideBar, setSideBar}}>
        <NavBar/>
        <Home/>
      </SideBarContext.Provider>
    </div>
  );
}

export default App;