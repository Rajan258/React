"use client"
import React, {useState} from 'react'
import Header from './component/Header';



const page = () => {
  const [title,settitle] = useState("");
  const [desc,setdesc] = useState("");
  const [mainTask, setmainTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    setmainTask([...mainTask, { title, desc }]);
    settitle("");
    setdesc("");
    console.log(mainTask)
  }

  const deleteHandler = (i) => {
    let copytask = [...mainTask]
    copytask.splice(i,1)
    setmainTask(copytask)
  }  

  let renderTask = <h2> No task Available</h2>

  if (mainTask.length > 0)
  renderTask = mainTask.map((t, i) => {
    return (
      <div className=''>
      <li key={i} className='flex justify-between'>
        <h1>{t.title}</h1>
        <h2>{t.desc}</h2>
        <button onClick={()=>{
        deleteHandler(i)
      }
        }>Delete</button></li>
      </div>
    )
  })

  return (
    <>
    
    <h1 className='text-4xl ml-9 my-9 font-bold'>Projects</h1>
    <div className='tex-center mx-9'>
    <h1 className='text-xl font-bold mt-5'>Todo list</h1>
    <form onSubmit={submitHandler}>
      <input 
      placeholder="Write task" 
      className=' border-2 border-black black px-3 py-1 font-bold text-black me-5 mt-5' 
      value={title}
      onChange={(e) =>{
        settitle(e.target.value)
      }}
      ></input>
      <input 
      placeholder="Write Description" 
      className=' border-2 border-black black px-3 py-1 font-bold text-black' 
      value={desc} 
      onChange={(e) =>{
        setdesc(e.target.value)
      }}
      ></input>
      <button  value="submit" type="submit" className='border-2 py-1 px-3 border-black bg-black ms-5 text-white'>Add Task</button>
    </form>
    <hr className='mt-8'/>
    <div>
      <ul>{renderTask}</ul>
    </div>

    </div>
    </>
  )
}

export default page