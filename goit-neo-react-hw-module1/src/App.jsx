import { useState } from 'react'
import './App.css'
import Profile from './components/Profile'
import userData from './info/userData.json'
import FriendList from './components/FriendList'
import friends from './info/friends.json'

function App() {


  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
    </>
  );
}

export default App
