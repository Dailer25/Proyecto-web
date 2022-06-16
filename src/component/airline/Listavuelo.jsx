import React,{useState,useEffect} from "react";
import Vuelo from "./Vuelo";
import axios from "axios";

const Listavuelo = ({sormFly}) => {
  /*const vuelos = [
    { idvuelo: 146, nombre: "Caracas", ruta: "larga" },
    { idvuelo: 1156, nombre: "Caracas", ruta: "larga" },
    { idvuelo: 117, nombre: "Caracas", ruta: "larga" },
  ];*/

  const [datosApi,setdatos] = useState({});
    useEffect(()=>{
          const peticion = async ()=>{
              try{
                const url = 'Localhost:8000.';
                const {data} = await axios.get(`${url}/`);  
                setdatos(data);
              }catch(error){
                console.log(error);
              }

          }
          peticion();
    },[]);

  return (
    <div className="row justify-content-center">
       <div className="col-8">
          <h3>Select your flight</h3>
          <Vuelo datosApi={datosApi}/>
      </div>
     
    </div>
  );
};

export default Listavuelo;
