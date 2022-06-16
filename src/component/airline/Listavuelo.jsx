import React,{useState,useEffect} from "react";
import Vuelo from "./Vuelo";
import axios from "axios";

const Listavuelo = ({ statusFli}) => {
  /*const vuelos = [
    { idvuelo: 146, nombre: "Caracas", ruta: "larga" },
    { idvuelo: 1156, nombre: "Caracas", ruta: "larga" },
    { idvuelo: 117, nombre: "Caracas", ruta: "larga" },
  ];*/

  const [datosApi,setdatos] = useState({});
    useEffect(()=>{
          const peticion = async ()=>{
              try{
                const url = 'api.frankfurter.app';
                const {data} = await axios.get(`https://${url}/latest?amount=10&from=GBP&to=USD`);  
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
        
        <button
          className="btn btn-primary"
          onClick={() => {
            statusFli(true);
          }}
        >Regresar</button>
      </div>
     
    </div>
  );
};

export default Listavuelo;
