const RedBoxButton = (props) => {
  return(
    <li>
      <button className={`flex justify-center items-center bg-red-500 border-2 border-red-500 py-2 px-5 lg:px-8 text-xl text-white font-semibold`}>{props.text}</button>
    </li>
  )
}

export default RedBoxButton
