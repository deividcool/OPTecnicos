import Login from './Login'
import Workarea from './Workare'
import reactLogo from './assets/react.svg'
import React, { useContext, useState } from 'react';
import { AuthContext } from './context/AuthContext';
import {ModalCambioStatus, ConfirmacionDialog } from './componentes/Modales';
import toast, { Toaster } from 'react-hot-toast';


function App() {
  const { userlogeado, nombreseleccionado, confirmaciondialog } = useContext(AuthContext)

  return (
    <main className='flex h-full p-0 m-auto bg-neutral-200 w-screen justify-center'>

      {userlogeado ? (
          <Workarea/>
        ):(
          <Login/>
      )}
      <ModalCambioStatus />
      <ConfirmacionDialog mensaje={nombreseleccionado} status={confirmaciondialog}/>
      <Toaster />
    </main>
  )
}

export default App
