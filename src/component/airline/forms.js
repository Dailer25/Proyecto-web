import {useState} from 'react'
import Listavuelo from "./Listavuelo";
const Forms =()=>{

    const [formAir,setformAir] = useState({
            airportDeparture:"",
            airportArrival:"",
            date:""
        });
    const [statusvuelo,setstatus] = useState(true);
    const cualname = e =>{
        setformAir({
            ...formAir,
            [e.target.name]:e.target.value
        });
    }
    return(
        <>
            <div className="row justify-content-center">
                <div className="col-auto m-4">
                    <h3>Form</h3>
                </div>
            </div>
            {statusvuelo?<form>
                <div className="row justify-content-center" >
                    <div className="col-4">
                        <label className="mb-2">Departure Airport</label>
                        <input type="text" className="form-control" name='airportDeparture' onChange={cualname}></input>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-4">
                        <label className="mb-2 mt-3">Arrival Airport</label>
                        <input type="text" className="form-control" name='airportArrival' onChange={cualname}></input>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-4 ">
                        <label  className="mb-2 mt-3" >Pick a date</label>
                        <input type="date" className="form-control mb-2 " name='date' onChange={cualname}></input>
                    </div>
                </div>
                <div className='row justify-content-center'>
                    <div className='col-4'>
                        <button className='btn btn-block btn-danger mt-4' onClick={()=>{setstatus(false)}}>Enviar</button>
                    </div>
                </div>
            </form>
            :
            <Listavuelo statusFli={setstatus}/>
            }
            
        </>
    )
}
export default Forms