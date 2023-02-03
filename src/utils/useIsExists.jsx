import { useState } from 'react'
import localforage from 'localforage'

const useIsExists = (key) =>{
  const valuesToRead = localforage.getItem('myFavourites').then(data =>{return console.log(data)})
}