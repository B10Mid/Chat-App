import Header from '../components/Header/Header';
import Sidebar from '../components/Sidebar/Sidebar';
import Chat from '../components/Chat/Chat';
import Login from '../components/Login/Login';
import './App.scss';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {useStateValue } from '../providers/StateProvider';

function App() {
  
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <>
          {/*Header component*/}
          <Header />

          <div className="body">
            {/*Sidebar component*/}
            <Sidebar />

            <Routes>
              <Route path="/channel/:channelId" element={<Chat/>}/>
            </Routes>
          </div>
          </>
        )}
      </Router>
    </div>
  );
}

export default App;