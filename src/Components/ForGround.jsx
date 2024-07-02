import React, { useRef } from "react";
import Card from "./Card";

const ForGround = () => {
  const ref = useRef(null)
  console.log(ref)
  const data = [
    {
      decs: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      filesize: ".9mb",
      close: true,
      foterFirst:true,
      tagpro: {
        isOpen: true,
        tagTitle: "progressing",
        tagColor: "blue",
      },
    },
    {
      decs: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      filesize: ".9mb",
      close: false,
      foterFirst:false,
      tagpro: {
        isOpen: true,
        tagTitle: "Download Now",
        tagColor: "green",
      },
    },
    {
      decs: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      filesize: ".9mb",
      close: false,
      foterFirst:true,
      tagpro: {
        isOpen: false,
        tagTitle: "Download Now",
        tagColor: "green",
      },
    },
    {
      decs: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      filesize: ".9mb",
      close: false,
      foterFirst:true,
      tagpro: {
        isOpen:true,
        tagTitle: "Download Now",
        tagColor: "green",
      },
    },
    
  ];
  return (
    <div ref={ref} className=" fixed z-3 top-0  left-0 w-full h-full flex gap-5 flex-wrap p-5">
      {
        data.map((items,index)=>{
          return <Card data={items}  reference={ref}/>
        })
      }
       {/* <Card   /> */}
      
    </div>
  );
};

export default ForGround;
