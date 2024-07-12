import React from 'react';
import './Home.css';
import Navigator from './Pages/Navigator';
import Sidebar from './Sidebar';
import Chat from './Chat';
function Home() {
    return (
        <div>
            <div className='nav'>
                <Navigator />
            </div>
            <div className="app">
                <Sidebar />
                <Chat />
            </div>
        </div>
    );
}

export default Home
