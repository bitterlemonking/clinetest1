import ClientAuth from '../components/ClientAuth'
import { Suspense } from 'react'

export default function Home() {
  return (
    <main>
      <Suspense fallback={<div>Loading...</div>}>
        <ClientAuth />
      </Suspense>
    </main>
  )
}
