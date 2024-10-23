import React from 'react'

function Openacc({status,dispatch}) {
  return (
    <>
        <button disabled={status==='Noac'?0:1} onClick={()=>dispatch({type:'ok'})}>Open Account</button>
    </>
  )
}

export default Openacc