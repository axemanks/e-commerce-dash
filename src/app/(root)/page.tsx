import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="">
      <p>Hello Admin Dashboard</p>
      <Button className='p-4' size="default" variant="destructive">Click Me</Button>
    </main>
  )
}
