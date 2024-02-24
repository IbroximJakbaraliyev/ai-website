import React, { useEffect, useState } from 'react'

export const Card = () => {
  const [mainCard, setMainCard ] = useState([]);

  useEffect(() => {
    const getReuest = () =>
      fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((json) => setMainCard(json));

    return () => {
      getReuest();
    };
  }, []);

  return (
    <div className='album py-5 bg-light'>
     <div className="container">
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        {mainCard.map(item => (
          <div className="col">
            <div className="card shadow-sm p-3">
              <div className="card-title">
                <h4 className='text-muted text-center'>Product #{item.id}</h4>
              </div>
              <img src={item.image} alt={item.title} className="bg-placeholder card-image-top" />
            </div>
          </div>
        ))}
      </div>
     </div>
    </div>
  )
};
