import Login from './Login'
import Workarea from './Workare'
import reactLogo from './assets/react.svg'
import React, { useContext, useState } from 'react';
import { AuthContext } from './context/AuthContext';
import ModalCambioStatus from './componentes/Modales';
import toast, { Toaster } from 'react-hot-toast';


function App() {
  const { userlogeado } = useContext(AuthContext)

  return (
    <main className='flex flex-1 p-0 m-auto bg-neutral-200 h-auto w-screen justify-center'>

      {userlogeado ? (
          <Workarea/>
        ):(
          <Login/>
      )}
      <ModalCambioStatus />
      <Toaster />
    </main>
  )
}

export default App
