import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const Rating = (props) => {

    // let i = 1;

    // while(i <= 4){
    //   i+=1
    // }
    const rate = [1,2,3,4,5]

  return (
    <div className='flex flex-row px-2'>
       {
        rate.map(i =>
          <FontAwesomeIcon
          key={i}
          icon={faStar}
          className='sm:h-10 sm:w-10'
          color={props.rate >= i ? 'orange':'gray'}
          />
        )
       }
    </div>
  )
}

export default Rating