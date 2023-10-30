import reactLogo from './assets/react.svg'

function Workarea() {


  return (
    <main>
        <header className='h-12 z-10'>
        <img src={reactLogo} className="w-6 h-6" />
        <h1 class="text-xl font-bold text-neutral-800 uppercase tracking-tighter">
            Operaciones Tecnico
        </h1> 
        </header>
        <aside className='flex mt-12 h-80 w-full p-4 flex-col'>
        <h2 className='font-bold tracking-tighter text-lg text-gray-800'>Informacion Tecnico</h2>
        <div className='h-px w-20 bg-gray-800'></div>
        <ul className='w-full columns-2 p-4'>
        <li class='text-base text-gray-600 ml-4 mt-px capitalize'> <strong>nombre:</strong> deivid veloza</li>
        <li class='text-base text-gray-600 ml-4 mt-px capitalize'> <strong>cc:</strong> 33333333</li>
        <li class='text-base text-gray-600 ml-4 mt-px capitalize'> <strong>telefono:</strong> +57 3303030303</li>
        <li class='text-base text-gray-600 ml-4 mt-px capitalize'> <strong>correo:</strong> correo@correo.com</li>
        <li class='text-base text-gray-600 ml-4 mt-px capitalize'> <strong>Numero Orden:</strong> 525558566</li>
        <li class='text-base text-gray-600 ml-4 mt-px capitalize'> <strong>vehiculo:</strong> nissan GTR</li>
        </ul>

        </aside>
    </main>

    )
}

export default Workarea