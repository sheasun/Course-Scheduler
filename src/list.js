import { useRouter } from "next/router";
// import Cookies from 'js-cookie';
// import {ShoppingCartIcon, TruckIcon, UserIcon} from '@heroicons/react/outline'

export default function Header({title='Welcome'}){

  const router = useRouter();

//   const logOut = () => {
//     Cookies.remove('token');
//     router.push('/login');
//   }

  return(
    <div className='grid grid-flow-col grid-cols-12 gap-4 p-3 items-center h-20 w-screen bg-blue-200'>
      <div className="col-start-1 col-end-3 p-2 w-fit">
        <p 
          className="text-lg font-bold hover:cursor-pointer"
          onClick={() => router.push('/')}
        >
          Online Store
        </p>
      </div>
      <div 
        className="col-start-3 col-end-4 p-2 w-fit bg-red-200 rounded-xl
        hover:cursor-pointer hover:bg-red-400"
        onClick={() => {router.push('/updateUser')}}
      >
        {/* <UserIcon className="h-8"/> */}
      </div>
      <div className="col-start-6 col-end-8 items-center text-center">
        <p className="font-bold text-3xl">{title}</p>
      </div>
      <div className="flex col-start-9 col-end-10 bg-red-200 justify-center rounded-full 
        hover:cursor-pointer hover:bg-red-400"
        onClick={() => router.push('/deliveries')}
      >
        {/* <TruckIcon className="h-8"/> */}
      </div>
      <div className="flex col-start-10 col-end-11 bg-red-200 justify-center rounded-full 
        hover:cursor-pointer hover:bg-red-400"
        onClick={() => router.push('/cart')}
      >
        {/* <ShoppingCartIcon className="h-8"/> */}
      </div>
      {/* <div className="col-start-11 col-end-12">
        <button className="btn" onClick={()=>{logOut()}}>Log Out</button>
      </div> */}
    </div>
  );
}