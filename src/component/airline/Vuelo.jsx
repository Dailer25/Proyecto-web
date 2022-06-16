import React from 'react'

const style ={
    color:'red',
    
    fontSize:33,
    margin: '3px',
    borderRadius: '6px',
};

const Vuelo = ({datosApi}) => {
  return (
    <div className='row justify-content.center'>
      <div className='col-5'>
        <p style={style}>{datosApi.base}</p>
      </div>
    </div>
  )
}

export default Vuelo