/* eslint-disable  @typescript-eslint/no-explicit-any */
import { useCallback, useEffect, useState } from "react"
import { ListItemType } from "../types/ListItem.type";

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const URL = process.env.REACT_APP_PATH_API!

export default function useApi ():any{

   const [data, setData] = useState<any[]>([])
   const [isLoading, setIsLoading] = useState(false);
   
   const fetchData = useCallback(async () => {
     setIsLoading(true)

     try{
       const response = await fetch(URL)
       if(!response.ok){
         throw new Error('Something went wrong!')
       }
      const data = await response.json() 

      const loadedTasks:any = []

      data.forEach((data:any) => loadedTasks.push(data))
      setData(loadedTasks)
     }catch(err){
       console.log(err)
     }
     setIsLoading(false)
   },[])

   useEffect(() => {
     fetchData()
   },[fetchData])


   const deleteData = (id:string) => {
     fetch(`${URL}/${id}`, {method:'DELETE'})
   }

   const postData = (item: ListItemType) => {
     fetch(URL, {
       method: 'POST',
       headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json'
       },
       body: JSON.stringify(item)
     })
   }

   const putData = (item:ListItemType) => {
     fetch(`${URL}/${item.id}`, {
       method: 'PUT',
       headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json'
       },
       body: JSON.stringify(item)
     })

   }

   

    return { data, loading: isLoading, deleteData, postData, putData }

}