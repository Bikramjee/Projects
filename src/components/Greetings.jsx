import React from 'react';
const Greetings=(props)=>{
    return(
        <>
            <div className='text-center mt-5'>
                <h1 className='text-primary'>
                आप सभी को दीपावली की बहुत बहुत शुबकामनाएं <span className='text-warning'>{props.vals}</span> और से
                </h1>
            </div>
        </>
    )
}
export default Greetings