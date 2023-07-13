import Landing from '@/components/LandingPage/Landing'
import Navbar from '@/components/Navbar/Navbar'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="h-full w-full text-slate-100 bg-slate-900">
      <Navbar/>
      <Landing/>
    </main>
  )
}
