import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import Logoconse from './assets/Logoconse.svg'
import toast, { Toaster } from 'react-hot-toast';
import { AuthContext } from './context/AuthContext';


function Login() {
    const { 
    registro,
    orden,
    sede,
    placa,
    vin,
    propietario,
    aseguradora,
    celular,
    modelo,
    handlelogin,
    cedula,
    setCedula,
    loading,
    codigo,
    setCodigo,
    handleCodigoChange,
    handleCedulaChange,
} = useContext(AuthContext);

   
    

    


  return (
       <section className='flex flex-1 m-auto h-screen flex-col justify-center'>
           
            <div className='flex bg-white w-full h-full justify-center items-center flex-col pl-4 pr-4'>
                <div className='flex w-full flex-col items-center mt-4'>
                    <h1 className='text-xl text-neutral-800 font-bold tracking-tighter uppercase'>Ingreso Tecnico</h1>
                    <h2 className='text-xs -mt-1 text-neutral-800 font-bold tracking-tighter uppercase'>!Bienvenido!</h2>
                </div>
                <div className='flex justify-center items-center -m-1 -mb-1'>
                    <img src={Logoconse} className='h-20 w-full'/>
                </div>
                <ul className='w-full columns-2 bg-slate-200 h-48 md:w-96 justify-center items-center p-2'>
                    <li className='text-xs text-gray-600 mt-px mb-2 capitalize overflow-hidden text-ellipsis	max-h-11'> <strong>placa:</strong> {placa}</li>
                    <li className='text-xs text-gray-600 mt-px mb-2 capitalize overflow-hidden text-ellipsis	'> <strong>orden:</strong> {orden}</li>
                    <li className='text-xs text-gray-600 mt-px mb-2 capitalize overflow-hidden text-ellipsis	max-h-11'> <strong>modelo:</strong> {modelo.replace(/%20/g, " ")}</li>                    
                    <li className='text-xs text-gray-600 mt-px mb-2 capitalize overflow-hidden text-ellipsis'> <strong>vin:</strong> {vin}</li>                    
                    <li className='text-xs text-gray-600 mt-px mb-2 capitalize overflow-hidden text-ellipsis	max-h-11'> <strong>aseguradora:</strong> {aseguradora.replace(/%20/g, " ")}</li>
                </ul>
                <div className='flex flex-1 flex-col w-full md:w-96'>
                    <div className='flex w-full h-16 mt-px rounded-md pl-2 pr-2 flex-col justify-evenly'>
                        <h4 className='text-sm text-neutral-800 tracking-tighter capitalize'>Cedula</h4>
                        <input
                            type='number'
                            placeholder='Cedula (Numeros)'
                            required
                            value={cedula}
                            onChange={handleCedulaChange}
                            className='flex w-full bg-white text-zinc-800 text-left justify-start items-start border border-blue-300 rounded-lg p-2 focus:outline-none focus:border-blue-500'
                        />
                    </div>
                    <div className='flex w-full h-16 mt-px rounded-md pl-2 pr-2 flex-col justify-evenly'>
                        <h4 className='text-sm text-neutral-800 tracking-tighter capitalize'>codigo</h4>
                        <input
                            type='number'
                            placeholder='Codigo (Numeros)'
                            required
                            value={codigo}
                            onChange={handleCodigoChange}
                            className='flex w-full bg-white text-zinc-800 text-left justify-start items-start border border-blue-300 rounded-lg p-2 focus:outline-none focus:border-blue-500'
                        />
                    </div>
                    <div className='flex w-full h-16 mt-px rounded-md pl-2 pr-2 flex-col justify-center'>
                        <button 
                            type="submit" 
                            onClick={handlelogin} 
                            className='bg-sky-600 h-10 rounded-lg border-none flex justify-center items-center'
                            disabled={loading}    
                        >
                            
                            {loading ? (                    
                                <svg
                                    className="animate-spin h-5 w-5 rounded-full"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M12 2.99988V5.99988M12 20.9999V17.9999M4.20577 16.4999L6.80385 14.9999M21 11.9999H18M16.5 19.7941L15 17.196M3 11.9999H6M7.5 4.20565L9 6.80373M7.5 19.7941L9 17.196M19.7942 16.4999L17.1962 14.9999M4.20577 7.49988L6.80385 8.99988" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            ) : (
                                <span className='text-lg tracking-tighter text-slate-50 font-bold'>INGRESAR</span>
                            )}

                        </button>
                    </div>
                </div>
            </div>
            <Toaster />
       </section>
    )
}

export default Login