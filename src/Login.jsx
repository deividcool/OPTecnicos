import React, { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg'
import Logoconse from './assets/Logoconse.svg'





function Login() {
    const [registro,setRegistro] = useState(""); 
    const [orden,setOrden] = useState("");
    const [sede,setSede] = useState("");
    const [placa,setPlaca] = useState("");
    const [vin,setVin] = useState("");
    const [propietario,setPropietario] = useState("");
    const [aseguradora,setAseguradora] = useState("");
    const [celular,setCelular] = useState(""); 
    const [modelo,setModelo] = useState(""); 
    const [cedula, setCedula] = useState('');
    const [codigo, setCodigo] = useState('');

    const handleCodigoChange = (event) => {
        const inputValue = event.target.value;
    
        // Utiliza una expresión regular para eliminar caracteres no numéricos
        const numericValue = inputValue.replace(/\D/g, '');
    
        // Actualiza el estado con el valor numérico
        setCodigo(numericValue);
      };
    
      

    const handleCedulaChange = (event) => {
        const inputValue = event.target.value;
    
        // Utiliza una expresión regular para eliminar caracteres no numéricos
        const numericValue = inputValue.replace(/\D/g, '');
    
        // Actualiza el estado con el valor numérico
        setCedula(numericValue);
      };
    
    useEffect(() => {
        
        const url = new URL(window.location.href);
        const searchParams = url.search;
      
        const parts = searchParams.split("~");

        const keyValuePairs = parts.map(part => {
            const [key, value] = part.split("=");
            return { key, value };
          });

        

        console.log(keyValuePairs);

        var valores = {};

        // Recorrer el objeto y almacenar los valores en el objeto "valores"
        for (var i = 0; i < keyValuePairs.length; i++) {
            valores[keyValuePairs[i].key] = keyValuePairs[i].value;
        }

        console.log(valores["orden"])
        
        setRegistro(valores["?registro"])
        setOrden(valores["orden"])
        setSede(valores["sede"])
        setPlaca(valores["placa"])
        setVin(valores["vin"])
        setPropietario(valores["propietario"])
        setAseguradora(valores["aseguradora"])
        setCelular(valores["celular"])
        setModelo(valores["modelo"])

    }, []);


  return (
       <section className='flex flex-1 p-4 m-auto h-screen flex-col justify-center'>
           
            <div className='flex bg-white w-full h-5/6 mt-2 rounded-xl justify-center items-center p-4 flex-col'>
                <div className='flex w-full flex-col items-center'>
                    <h1 className='text-2xl text-neutral-800 font-bold tracking-tighter uppercase'>Ingreso Tecnico</h1>
                    <h2 className='text-xl text-neutral-800 font-bold tracking-tighter uppercase'>!Bienvenido!</h2>
                </div>
                <div className='flex justify-center items-center'>
                    <img src={Logoconse} className='h-24 w-full'/>
                </div>
                <ul className='w-full columns-2 bg-slate-200 flex-1 rounded-t-xl'>
                    <li className='text-base text-gray-600 ml-1 mt-px capitalize overflow-hidden text-ellipsis	'> <strong>propietario:</strong> {propietario.replace(/%20/g, " ")}</li>
                    <li className='text-base text-gray-600 ml-1 mt-px capitalize overflow-hidden text-ellipsis	'> <strong>orden:</strong> {orden}</li>
                    <li className='text-base text-gray-600 ml-1 mt-px capitalize overflow-hidden text-ellipsis	'> <strong>sede:</strong> {sede.replace(/%20/g, " ")}</li>
                    <li className='text-base text-gray-600 ml-1 mt-px capitalize overflow-hidden text-ellipsis	max-h-6'> <strong>placa:</strong> {placa}</li>
                    <li className='text-base text-gray-600 ml-1 mt-px capitalize overflow-hidden text-ellipsis'> <strong>vin:</strong> {vin}</li>
                    <li className='text-base text-gray-600 ml-1 mt-px capitalize overflow-hidden text-ellipsis	max-h-11'> <strong>aseguradora:</strong> {aseguradora.replace(/%20/g, " ")}</li>
                    <li className='text-base text-gray-600 ml-1 mt-px capitalize overflow-hidden text-ellipsis	max-h-6'> <strong>celular:</strong> {celular}</li>
                    <li className='text-base text-gray-600 ml-1 mt-px capitalize overflow-hidden text-ellipsis	max-h-6'> <strong>modelo:</strong> {modelo.replace(/%20/g, " ")}</li>
                </ul>
                <div className='flex flex-1 flex-col w-full'>
                    <div className='flex w-full h-16 mt-2 rounded-md pl-2 pr-2 flex-col justify-evenly'>
                        <h4 className='text-sm text-neutral-800 tracking-tighter capitalize'>Cedula</h4>
                        <input
                            type='number'
                            placeholder='Cedula'
                            required
                            value={cedula}
                            onChange={handleCedulaChange}
                            className='flex w-full bg-white text-zinc-800 text-left justify-start items-start border border-blue-300 rounded-lg p-2 focus:outline-none focus:border-blue-500'
                        />
                    </div>
                    <div className='flex w-full h-16 mt-2 rounded-md pl-2 pr-2 flex-col justify-evenly'>
                        <h4 className='text-sm text-neutral-800 tracking-tighter capitalize'>codigo</h4>
                        <input
                            type='number'
                            placeholder='Cedula'
                            required
                            value={codigo}
                            onChange={handleCodigoChange}
                            className='flex w-full bg-white text-zinc-800 text-left justify-start items-start border border-blue-300 rounded-lg p-2 focus:outline-none focus:border-blue-500'
                        />
                    </div>
                    <div className='flex w-full h-16 mt-2 rounded-md pl-2 pr-2 flex-col justify-evenly'>
                        <button type="submit" className='bg-sky-600 h-10 rounded-lg border-none'>
                            <span>INGRESAR</span>
                        </button>
                    </div>
                </div>
            </div>
            
       </section>
    )
}

export default Login