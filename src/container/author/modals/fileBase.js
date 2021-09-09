import { useState } from 'react';
import FileBase64 from 'react-file-base64';

const FileBase =({setBooks})=>{
     

 
  function getFiles(files){
    setBooks((state)=>({...state, image: files.base64}))

  }
 
return (
      <FileBase64
        multiple={ false }
        onDone={ getFiles.bind(this) } />
    )
  }

export default FileBase;
 


