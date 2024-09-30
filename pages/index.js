// pages/index.js
import { Button } from '@nextui-org/react'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Chatbot Dashboard</h1>
      <Button color="primary">Get Started</Button>
    </div>
  )
}
