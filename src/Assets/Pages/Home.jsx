import React, {useState} from 'react'
import Tasks from '../Components/Tasks'
const Home = () => {
  const [data,setData] =useState([{id:1,heading:'daily todo',detail:"this is discription"},{id:2,heading:'daily todo',detail:"this is discription"},{id:3,heading:'daily todo',detail:"this is discription"}]);
  return (
    <>
    <div className="tasks">
       <Tasks data={data} />
    </div>
    </>
  )
}

export default Home
