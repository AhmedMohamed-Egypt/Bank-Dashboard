import { useEffect, useState } from "react"



 function fetchSalary(){
     const [dataSalary,setDataSalary] = useState([])
     const [errorSalary,setErrorSalary] = useState(null)
     const [loadSalary,setLoadSalary] = useState(false)

useEffect(()=>{
    async function  getData(){
        try{
            setLoadSalary(true)
            const data = await fetch('http://localhost:8000/dataSlary')
            const res = await data.json()
            if(data.ok){
                setDataSalary(res)

                setLoadSalary(false)
            }else {
                throw new Error('Connection Error')
            }
    
        }catch(error){
            error.message = 'There is an error'
            setErrorSalary(error.message)
        }
        
        
      }
      getData()
},[])
   
  
  return {dataSalary,errorSalary,loadSalary}
 
}



export {fetchSalary}