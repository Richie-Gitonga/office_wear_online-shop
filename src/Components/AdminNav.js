import React from 'react'

const AdminNav = () => {
    return(
        <div className='flex'>
            <div>
                <img src='/logo/logo.jpg' alt="" className='w-30 h-30 rounded-full absolute'/>
                <p className='text-4xl font-semibold relative w-32 h-10'>Mtumba</p>
            </div>
            <div>
                <div className='w-64 h-12'>
                    <img src='/logo/search.png' alt='' className='h-10 w-10'/>
                    <img src='/logo/bell.png' alt='' className='h-11 w-14'/>
                    <div>
                        <div className='w-24 h-24 rounded-full'></div>
                        <p></p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AdminNav