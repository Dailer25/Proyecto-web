import React, {useState} from 'react'
import Listavuelo from "./Listavuelo";
import Header from './header';
import {FaPlaneDeparture,FaPlaneArrival} from 'react-icons/fa';
import {MdDateRange} from 'react-icons/md'

const Forms =()=>{

    const [formAir,setformAir] = useState({
            airportDeparture:"",
            airportArrival:"",
            date:""
        });
    const [statusvuelo,setstatus] = useState(true);
    const obj ={
        name:'',
        name2:'',
        date:''
    }
    const cambi=()=>{
        obj.name=formAir.airportDeparture
        obj.name2=formAir.airportArrival
        obj.date=formAir.date
    }
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
                    <h3>Airline Nort-South</h3>
                </div>
            </div>
            {statusvuelo?<form>
                <div className="row justify-content-center" >
                    <div className="col-4">
                        <label className="mb-2">Departure Airport</label>
                        <FaPlaneDeparture/>
                        <input type="text" className="form-control" name='airportDeparture' onChange={cualname}></input>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-4">
                        <label className="mb-2 mt-3">Arrival Airport</label>
                        <FaPlaneArrival/>
                        <input type="text" className="form-control" name='airportArrival' onChange={cualname}></input>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-4 ">
                        <label  className="mb-2 mt-3" >Pick a date</label>
                        <MdDateRange/>
                        <input type="date" className="form-control mb-2 " name='date' onChange={cualname}></input>
                    </div>
                </div>
                <div className='row justify-content-center'>
                    <div className='col-4'>
                        <button className='btn btn-block btn-danger mt-4' onClick={()=>{setstatus(false)}}>Send</button>
                    </div>
                </div>
            </form>
            :
                <>
                    {  
                        cambi()
                    }
                        <div className='row justify-content-center'>
                            <div className='col-6'>
                                <Header formFly={obj}/>
                            </div>
                        </div>       
                        <div className='row justify-content-center'>
                            <div className='col-6'>
                                <Listavuelo sormFly={obj}/>
                            </div>
                        </div>
                        <div className='row justify-content-center'>
                            <div className='col-5'>
                                {
                                    <button
                                    className="btn btn-danger"
                                    onClick={() => {
                                        setstatus(true);
                                    }}
                                    >Back</button>
                                }
                            </div>
                        </div>
                    {console.log(obj)}
                </>    
            }
        </>
    )
    
}
export default Forms
