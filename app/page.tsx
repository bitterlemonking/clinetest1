import Auth from '../components/Auth'

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center">
      <div className="flex-1 flex flex-col gap-20 max-w-4xl px-3 py-16">
        <div className="flex flex-col gap-16">
          <div className="flex flex-col gap-6 text-center">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold">
              Welcome to My Fullstack App
            </h1>
            <p className="text-lg sm:text-xl text-gray-600">
              Built with Next.js, Supabase, and Vercel
            </p>
          </div>
        </div>
        <Auth />
      </div>
    </main>
  )
}
