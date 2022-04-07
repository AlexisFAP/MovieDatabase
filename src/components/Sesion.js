import React, { useEffect, useState } from 'react';
import '../App.css';

function Sesion() {
  const url = "https://api.themoviedb.org/3/authentication/token/new?api_key=bce5299a79631aebbe89221f1c2ca561"
  const [sesion, setSesion] = useState();
  const fetchApi = async () => {
    const response = await fetch(url)
    const responseJSON = await response.json()
    setSesion(responseJSON.request_token)
  }
  const url2 = `https://www.themoviedb.org/authenticate/${sesion}`
  const [sesionAut, setSesionAut] = useState();
  const fetchApiAut = async () => {
    const response = await fetch(url2)
    const responseJSON = await response
    setSesionAut(responseJSON)
  }
  const url3 = `https://api.themoviedb.org/3/authentication/session/new?api_key=bce5299a79631aebbe89221f1c2ca561`
  const [sesionAut2, setSesionAut2] = useState();
  const fetchApiAut2 = async () => {
    const response = await fetch(url3, 
        {method: 'POST', 
        headers:{ "Content-type": "application/json"},
        body: sesion})
    const responseJSON = await response
    setSesionAut2(responseJSON)
  }
  useEffect(() => {
    fetchApi()
    fetchApiAut()
    fetchApiAut2()
  }, [])
  
  return 
}

export default Sesion;
