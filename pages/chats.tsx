import React from 'react'
import Chat_Sidebar from '../components/Chat_Sidebar'
import Sidebar from '../components/Sidebar'

function chats() {
  return (
    <div>
      <main className='grid grid-cols-10'>
          <Sidebar tweets={[]} />
          <Chat_Sidebar/>
          </main>

    </div>
  )
}

export default chats