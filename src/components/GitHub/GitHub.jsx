import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

function GitHub() {

    // const [data,setData] = useState([]);
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/imshashwatsingh')
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data);
    //     })
    // },[])



    const data =  useLoaderData();

  return (
    <div 
    className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'
    >GitHub Followers : {data.followers} 
    <img src={data.avatar_url} 
    className='m-2 rounded-full'
    alt="GitHub Image" 
    width={300}
    />
    </div>
  )
}

export default GitHub;


export const githubInfoLoader = async ()=>{
    const response = await fetch('https://api.github.com/users/imshashwatsingh');
    return response.json();
}