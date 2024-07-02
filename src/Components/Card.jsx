import React from 'react'
import { motion } from "framer-motion"

const Card = ({data,reference}) => {
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale:1.2}} dragTransition={{bounceStiffness:600,bounceDamping:10}} className='w-44 h-56 relative text-zinc-200 overflow-hidden rounded-[20px] p-4 bg-zinc-700'>
     <i class="ri-file-list-3-line text-xl"></i>
     <p className='text-sm leading-tight mt-5 font-semibold'>{data.decs}</p>
     <div className='footer absolute bottom-0  w-full  left-0'>
      <div className='flex items-center justify-between mb-5 px-4 pt-5'>
        <h5>{data.filesize}</h5>
        {data.close ? <i class="ri-close-circle-line text-lg "></i> :  <i class="ri-download-fill text-lg"></i> }
      </div>
      {
        data.tagpro.isOpen && (
            <div className={`progresstag w-full py-2  ${data.tagpro.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"} flex items-center justify-center`}>
            <h3 className='text-sm font-semibold'>{data.tagpro.tagTitle === "Download Now" ? "Download Now" : "Progressing.."}</h3>

          </div>
        ) 
      }
     
     </div>
    </motion.div>
  )
}

export default Card
