import React, { useState } from 'react'

export const WheatherApp = () => {
    
    // https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
    const urlBase =  'https://api.openweathermap.org/data/2.5/weather'
    const API_KEY =  'a992e0d14b263b537cf6c8429fd5b901'


    const [ciudad, setCiudad] = useState('')
    const [dataClima, setDataClima] = useState(null)
    const difKelvin = 273.15
    
    
    
    
    const handleCambioCiudad = (e) => {   

     setCiudad(e.target.value)


  }


  const handleSubmit = (e) => {


        e.preventDefault();
        fetchClima()


  }


  const fetchClima = async() => {

    try{

        const response = await  fetch(`${urlBase}?q=${ciudad}&appid=${API_KEY}`)
        const data = await  response.json()
        
        setDataClima(data)
        console.log(data)
    }catch(error){

        console.log('ocurrio un problema', error)

    }


  }
  
  
  
    return (
    <div className='container'>

    <h1>Aplicacion del Clima</h1>

        <form  onSubmit={handleSubmit}>

            <input 
            type="text"  
            value={ciudad}
            onChange={handleCambioCiudad}
            
            />
            <button type="submit">Buscar</button>


       
        </form>
        {   

        

                                dataClima && (

                                    <div>

                                            <h2>{dataClima.name}</h2>
                                            <p>Temperatura: {parseInt(dataClima?.main?.temp - difKelvin)}</p>
                                    </div>

                                )

                }

    </div>
  )
}

