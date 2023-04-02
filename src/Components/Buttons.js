import React from 'react'

const Buttons = () => {
  const cities=[
    {
      id:1,
      title:'London'
    },
    {
      id:2,
      title:'Varanasi'
    },
    {
      id:3,
      title:'Kanpur'
    },
    {
      id:4,
      title:'Delhi'
    },
    {
      id:5,
      title:'Lucknow'
    },
    {
      id:6,
      title:'Bihar'
    }
  ]
  return (
    <div className='flex items-center justify-around my-6'>
      {
        cities.map((city)=>(
          <button className="text-white text-lg font-medium" key={city.id}>
            {city.title}
          </button>
        ))
      }
    </div>
  )
}

export default Buttons;