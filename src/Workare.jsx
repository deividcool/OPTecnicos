import { useContext, useEffect, useState } from 'react';
import Mechanic from './assets/Mechanic.svg'
import { AuthContext } from './context/AuthContext';
import CardServices from './componentes/Card';
import './componentes/stylecard.css';

function Workarea() {
    const {
        infotecnico,
        modelo,
        registro,
        orden,
        sede,
        placa,
        vin,
        operaciones,
        propietario,
        aseguradora,
        celular,
        num_operaciones,
    } = useContext(AuthContext);
    const [loadinOperaciones, setLoadingOperaciones] = useState(false)

    useEffect(() => {
        if (operaciones && operaciones.length > 0) {
            setLoadingOperaciones(true);
        } else {
            setLoadingOperaciones(false);
        }
    }, [operaciones]);
    

    console.log(operaciones)

    return (
        <main className='flex flex-col h-auto w-screen md:w-[450px] bg-slate-50'>
            <header className='flex w-screen h-12 justify-evenly items-center shadow-md top-0 fixed bg-slate-50 md:w-[450px] z-20'>
                <img src={Mechanic} className="w-6 h-6" />
                <h1 className="text-xl font-bold text-neutral-800 uppercase tracking-tighter">
                    Operaciones Tecnico
                </h1>
            </header>
            <main className='w-full justify-start flex flex-col z-10 pt-10 md:w-[450px]'>
                <aside className='flex p-2 flex-col '>
                    <h2 className='font-bold tracking-tighter text-lg text-gray-800'>Informacion Tecnico</h2>
                    <div className='h-px w-20 bg-gray-800'></div>
                    <ul className='w-full columns-2 m-2'>
                        <li className='text-xs text-gray-600 mt-px mb-2 capitalize overflow-hidden text-ellipsis'> <strong>nombre:</strong> {infotecnico.nombre}</li>
                        <li className='text-xs text-gray-600 mt-px mb-2 capitalize overflow-hidden text-ellipsis'> <strong>sede:</strong> {infotecnico.sede}</li>
                        <li className='text-xs text-gray-600 mt-px mb-2 capitalize overflow-hidden text-ellipsis'> <strong>Especialidades:</strong> {infotecnico.Especialidades}</li>
                        <li className='text-xs text-gray-600 mt-px mb-2 capitalize overflow-hidden text-ellipsis'> <strong>estado:</strong> {infotecnico.estado}</li>
                        <li className='text-xs text-gray-600 mt-px mb-2 capitalize overflow-hidden text-ellipsis'> <strong>Numero Orden:</strong> {orden}</li>
                    </ul> 
 
 
                </aside>
                <aside className='flex p-2 pt-0 flex-col w-screen md:w-[450px]'>
                    <h2 className='font-bold tracking-tighter text-lg text-gray-800'>Informacion Cliente</h2>
                    <div className='h-px w-20 bg-gray-800'></div>
                    <ul className='w-full columns-2  flex-1 justify-center items-center p-2'>                        
                        <li className='text-xs text-gray-600 mt-px mb-2 capitalize overflow-hidden text-ellipsis'> <strong>vin:</strong> {vin}</li>                        
                        <li className='text-xs text-gray-600 mt-px mb-2 capitalize overflow-hidden text-ellipsis	max-h-11'> <strong>vehiculo:</strong> {modelo.replace(/%20/g, " ")}</li>
                        <li className='text-xs text-gray-600 mt-px mb-2 capitalize overflow-hidden text-ellipsis	max-h-11'> <strong>placa:</strong> {placa}</li>                    
                        <li className='text-xs text-gray-600 mt-px mb-2 capitalize overflow-hidden text-ellipsis	max-h-11'> <strong>aseguradora:</strong> {aseguradora.replace(/%20/g, " ")}</li>
                    </ul>
                </aside>
                <section className='flex pt-0 pl-2 pr-2 flex-col bg-white w-screen md:w-[450px]'>
                    <h2 className='font-bold tracking-tighter text-lg text-gray-800'>Área Laboral - Numero Operaciones {num_operaciones} </h2>
                    <div className='h-px w-20 bg-gray-800'></div>
                    {loadinOperaciones ? (
                        <div className="horizScroll">
                            {operaciones && operaciones.map((item) => (
                                <CardServices key={item.id_operacion} operaciones={item.id_operacion} nombre_operacion={item.nombre_operacion} buttonstatus={item.botones} status_operacion={item.estado_actual} tiempo_transcurrido={item.tiempo_transcurrido} contar_tiempo={item.contar_tiempo} />
                            ))}                    
                        </div>
                    ):(
                        <span className='text-center text-xl text-slate-900 mt-8'>cargando...</span>
                    )}
                </section>
            </main>


        </main>

    )
}

export default Workarea