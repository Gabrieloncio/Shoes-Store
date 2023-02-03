const BoxButton = (props) => {
  return(
    <li>
      <button className={`flex justify-center items-center py-2 px-5 lg:px-8  text-xl border-2 border-red-500 text-red-500 font-semibold`}>{props.text}</button>
    </li>
  )
}

export default BoxButton
