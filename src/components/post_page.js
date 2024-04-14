import React,{useState} from 'react'
import Footer from './footer'
import Header from './header'
import { pContext } from "../context/profilecontext";
import { useContext } from "react";






export default function Postpage() {

  const a=useContext(pContext);
  const {post }= a;


  const [selectedFile, setSelectedFile] = useState(null);
  const [imagePreview, setImagePreview] = useState('');
  const [description, setdescription]=useState("")
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    setImagePreview(URL.createObjectURL(file));
    console.log("sdkjfhlkdjf222222222",selectedFile)
  };

  const handleUpload = async () => {
    // post("sdj","sdjk",selectedFile,"description gardcoded")
   }

  return (
    <div className='flex flex-col items-center  h-[100vh] w-full bg-[#000000] border-[2px] border-[#4e4e4e] overflow-y-scroll'>
        <div className='bg-[#1e1e1e00] w-[90%]   items-center mt-10'>

       <div className='w-[80%] mt-5 mb-5'>      <input type="file" className=' bg-[#434343] text-[#dcdcdc]' onChange={handleFileChange} /></div> 


      {imagePreview && <img className='w-full max-h-[20rem] ' src={imagePreview} alt="Selected"  />}
      <div>
                      <label for="description" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                      <textarea type="text" name="description" id="description" value={description} onChange={e => setdescription(e.target.value)}  class="bg-[#434343] border border-gray-300 text-[#ffffff] sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="" required=""/>
                  </div>

<button onClick={handleUpload} class="w-full mt-5 mb-5 bg-[#6dff66] text-[#000000] bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 border-[2px] border-[#000000] ">Post</button>
{/* {piyush && (
        <img
          src={`data:image/jpeg;base64,${piyush}`}
          alt="Piyush Image"
          style={{ maxWidth: '100%', maxHeight: '100%' }}
        />
      )} */}
    </div>
    </div>
  )
}
