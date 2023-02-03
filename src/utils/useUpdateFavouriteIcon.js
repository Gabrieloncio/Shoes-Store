import { useState, useEffect } from 'react'
import localforage from 'localforage'

const useFavouriteIcon = (name, color) => {
  const [value, setValue] = useState(
    localforage.getItem(`${name}-${color}`).then((data) => {
      return data
    })
  )
  const UpdateValue = () => {
    if(value == null){
      setValue(true)
    }
    setValue(!value)
  }

  // useEffect(() => {
    // localforage.getItem(`${name}-${color}`).then((data) => {
      // setValue(data)
    // })
  // }, [])

  useEffect(()=>{
    localforage.getItem(`${name}-${color}`).then(()=>{
      localforage.setItem(`${name}-${color}`, value)
    })
  },[value])
  return [value, UpdateValue]
}

export default useFavouriteIcon