import React from 'react'

function sidebar() {
  return (
    <div>
      <div className="h-[100vh] bg-black">
        <div className="max-w-[1200px] w-[90%] mx-auto grid md:grid-cols-12">
            <div className="md:col-span-7 flex items-center h-[100%]">
                <h1>Menu</h1>
            </div>
            <div className="md:col-span-5"></div>

        </div>
      </div>
      
    </div>
  )
}

export default sidebar
