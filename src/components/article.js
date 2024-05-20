import React from 'react'

export default function Article({title,text}) {
  return (
    <>   
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-zinc-700 mb-4">{text}</p>

    </>
  );
}
