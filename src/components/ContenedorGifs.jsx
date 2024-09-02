import React from 'react'

export const ContenedorGifs = ({gifs}) =>{

  return (
    <>
            <div className='container mt-4'>
                <div className='row'>

                    {gifs.length > 0 ? (
                        gifs.map(({ id, title, url }) => (
                            <div key={id} className='col-md-4 mb-4'>
                                <div className='card'>
                                    <img className='card-img-top' src={url} alt={title} />
                                    <div className='card-body'>
                                        <h5 className='card-title'>{title}</h5>
                                    </div>
                                </div>
                            </div>
          
                        ))
                    ) : (
                    
                        <div className='col-12'>
                            <p className='text-center'> No se han generado Gifs</p>
                        </div>
                    )}
                </div>
            </div>
      
    </>
  )
}
