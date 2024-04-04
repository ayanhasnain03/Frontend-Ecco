import "./Loader.css"

import React from 'react'

const Loader = ({width="unset",length}) => {
 const skeleton = Array.from({length},(_,idx)=>(
  <div key={idx} className="skeleton-shape"></div>
 ))
  return (
    <div className='skeleton-loader' style={{ width }}>
{skeleton}
    </div>
  )
}

export default Loader