import React from 'react'

const Location = ({location}) => {
  return (
    <div>
        <div className='flex flex-row justify-center my-6'>
            <p className='text-white text-xl font-extralight'>
            {location.localtime}

            </p>

        </div>
        <div className='flex items-center justify-center my-3'>
            <p className='text-white text-3xl font-medium'>
                {location.name},{location.region}

            </p>
        </div>
    </div>
  )
}

export default Location