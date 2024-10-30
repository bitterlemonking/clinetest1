'use client'

import dynamic from 'next/dynamic'

const AuthComponent = dynamic(() => import('./Auth'), {
  ssr: false,
  loading: () => <div>Loading...</div>
})

export default function ClientAuth() {
  return <AuthComponent />
} 