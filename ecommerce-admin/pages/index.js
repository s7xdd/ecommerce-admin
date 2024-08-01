import Layout from '@/components/Layout'
import { signIn, signOut, useSession } from 'next-auth/react'

export default function Home() { 
  const {data: session} = useSession()
  if(!session){
    return(
      <>
        <h1>Not signed in</h1>
       
      </>
    )
  }
    return (
      <Layout>
        <div className='text-blue-900 flex justify-between'>
          <h2>Hello, {session.user.name}</h2>
          
          <div className='flex bg-gray-300 text-black gap-1 rounded-lg p-1'>
            <img src={session.user.image} alt='' className='w-6 h-6 rounded-lg'/>
            {session.user.name}

            <button onClick={() => signOut()}>Sign Out</button>
          </div>
          
        </div>
      </Layout>
    )
}