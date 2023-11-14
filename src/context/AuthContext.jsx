import axios from "axios";
import React, { createContext, useState, useEffect } from "react";
import { BASE_URL } from '../databases/api';
import toast, { Toaster } from 'react-hot-toast';


export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
    const [ userlogeado, setUserlogeado ] = useState(false);
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
    const [ infotecnico ,setInfotecnico ] = useState([]);
    const [ operaciones ,setOperaciones ] = useState([]);
    const [ abrirModal , setAbrirModal] = useState(false);
    const [ contentmodal , setContentModal] = useState([]);
    const [ idbuttonAccion , setIdButtonAccion] = useState('');
    const [ idorden , setIdOrden] = useState('');
    const [ num_operaciones , setNumeroOperaciones] = useState('');
    const [loading, setLoading] = useState(false);
    const [isloadingButton, setIsloadingButton] = useState(false);

    


    
    
    

    useEffect(() => {
        
        const url = new URL(window.location.href);
        const searchParams = url.search;
      
        const parts = searchParams.split("~");

        const keyValuePairs = parts.map(part => {
            const [key, value] = part.split("=");
            return { key, value };
          });

        var valores = {};

        // Recorrer el objeto y almacenar los valores en el objeto "valores"
        for (var i = 0; i < keyValuePairs.length; i++) {
            valores[keyValuePairs[i].key] = keyValuePairs[i].value;
        }
        
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

    const handlelogin = () =>{
        setLoading(true)
                    
        if(cedula == '' || codigo  == ''){
            {cedula ? toast.error('Ingrese Codigo') : toast.error('Ingrese Cedula')  }
            setLoading(false)
        }else{
            axios
            .post(`${BASE_URL}`, {
                tag:"operaciones",
                identificacion: cedula,
                codigo: codigo,
                orden:registro,
            })
            .then(res => {
                if(res.data && res.data.resultado == 'ok'){
                    setInfotecnico(res.data.tecnico)
                    const operacioness = [];

                    for (let i = 0; i < res.data.operaciones.length; i++) {
                    const operacion = res.data.operaciones[i];
                    operacioness.push(operacion);
                    }
                    setOperaciones(operacioness)
                    setNumeroOperaciones(res.data.operaciones.length)
                    toast.success('Logeado')
                    setUserlogeado(true);
                    setLoading(false)
                }else{
                    toast.error('El tecnico no existe o no está asociado al taller de la OT suministrada')
                    setLoading(false)
                }
            })
            .catch(e => {
                toast.error('El tecnico no existe o no está asociado al taller de la OT suministrada')
                console.log("error conexiones " + e);
                setLoading(false)
            })
        }
        
    }
   

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


    const handleidbutton = (id , orden ) => {
        console.log(id)
        console.log(orden)
        console.log(cedula)
        console.log(codigo)
        console.log(registro)
        setIsloadingButton(true)
        setIdButtonAccion(id)
        setIdOrden(orden)
        axios
            .post(`${BASE_URL}`, {
                tag:"accion",
                identificacion: cedula,
                codigo: codigo,
                orden:registro,
                actividad: orden,
                accion:id,
            })
            .then(res => {
                if (res.data && res.data.confirmar == 'true'){
                    setAbrirModal(true);
                    setContentModal(res.data);
                    setIsloadingButton(false)
                }else{
                    axios
                    .post(`${BASE_URL}`, {
                        tag:"operaciones",
                        identificacion: cedula,
                        codigo: codigo,
                        orden:registro,
                    })
                    .then(res => {
                        if(res.data && res.data.resultado == 'ok'){
                            setInfotecnico(res.data.tecnico)
                            const operacioness = [];
        
                            for (let i = 0; i < res.data.operaciones.length; i++) {
                            const operacion = res.data.operaciones[i];
                            operacioness.push(operacion);
                            }
                            setOperaciones(operacioness)
                            setIsloadingButton(false)
                        }
                    })
                    .catch(e => {
                        toast.error('El tecnico no existe o no está asociado al taller de la OT suministrada')
                        console.log("error conexiones " + e);
                    })
                }
                
                if(res.data && res.data.resultado == '0'){
                    toast.error(res.data.mensaje)
                    console.log(res.data);
                }
            })
            .catch(e => {
                console.log("error conexiones " + e);
            })
        
    }

    const handleconfirmarmotivopausa = (motivoSeleccionado) => {
        setAbrirModal(false);
        setContentModal([]);
        console.log(cedula);
        console.log(codigo);
        console.log(registro);
        console.log(idorden);
        console.log(idbuttonAccion);
        console.log(motivoSeleccionado);
        setOperaciones([]);


        axios
        .post(`${BASE_URL}`, {
            tag:"confirmar",
            identificacion: cedula,
            codigo: codigo,
            orden:registro,
            actividad: idorden,
            accion:idbuttonAccion,
            motivo:motivoSeleccionado,
        })
        .then(res => {     
            setAbrirModal(false); 
            if (res.data && res.data.resultado == 'ok') {
                axios
                .post(`${BASE_URL}`, {
                    tag:"operaciones",
                    identificacion: cedula,
                    codigo: codigo,
                    orden:registro,
                })
                .then(res => {
                    if(res.data && res.data.resultado == 'ok'){
                        setInfotecnico(res.data.tecnico)
                        const operacioness = [];
    
                        for (let i = 0; i < res.data.operaciones.length; i++) {
                        const operacion = res.data.operaciones[i];
                        operacioness.push(operacion);
                        }
                        setOperaciones(operacioness)
                    }
                })
                .catch(e => {
                    toast.error('El tecnico no existe o no está asociado al taller de la OT suministrada')
                    console.log("error conexiones " + e);
                })
            }    
            console.log(res.data);
        })
        .catch(e => {
            console.log("error conexiones " + e);
        })
    }

    const handleclosemodal = () => {
        setAbrirModal(false);
        setContentModal([]);
    }

    return (
        <AuthContext.Provider
            value={{
                userlogeado,
                registro,
                orden,
                sede,
                placa,
                vin,
                propietario,
                aseguradora,
                celular,
                modelo,
                cedula,
                codigo,
                infotecnico,
                operaciones,
                abrirModal,
                contentmodal,
                num_operaciones,
                loading,
                isloadingButton,
                handleidbutton,
                setCedula,
                setCodigo,
                handlelogin,
                handleCodigoChange,
                handleCedulaChange,
                handleconfirmarmotivopausa,
                handleclosemodal,
            }}>
            {children}
        </AuthContext.Provider>
    );
}