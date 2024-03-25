/* eslint-disable react/prop-types */
import { PacmanLoader, RotateLoader, ScaleLoader } from 'react-spinners'

const Loader = () => {
  return (
    <div
      className={` min-h-[calc(100vh-116px)]
      flex 
      flex-col 
      justify-center 
      items-center `}
    >
        <PacmanLoader  size={30} color='#F92FD3' />
    </div>
  )
}

export default Loader