
//Utilizando mi propio custom Hook

import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

    const {data: images, loading} = useFetchGifs(category) ;

  return (
    <>
       <h3 className="card animate__animated animate__fadeIn">{category}</h3>

        {loading && <p className="card animate__animated animate__flash">Loading</p>}

       <div className="card-grid">       
            {
              images.map(img => (
                   <GifGridItem 
                     key = {img.id}
                     {...img} 
                   />
              ))         
            }
       </div>
    </>
  )
}

/* Version inicial
import React, { useState, useEffect } from 'react'
import { GifGridItem } from './GifGridItem';
import { getGifs } from '../helpers/getGifs';

export const GifGrid = ({category}) => {

    const [images, setImages] = useState([]);

    useEffect(() => {
        getGifs(category)
        .then(imgs => setImages(imgs));
    },[category])   

  return (
    <>
       <h3>{category}</h3>
       <div className="card-grid">       
            {
              images.map(img => (
                   <GifGridItem 
                     key = {img.id}
                     {...img} 
                   />
              ))         
            }
       </div>
    </>
  )
}
*/