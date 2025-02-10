"use client"

import Hero from "@/components/Hero"
import SpecialMessage from "@/components/SpecialMessage"
import { useRef } from "react"

const Page = () => {
  const heroRef = useRef<HTMLDivElement>(null)
  const specialMessageRef = useRef<HTMLDivElement>(null)

  const handleScrollClick = () => {
    specialMessageRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  const handleBackToTopClick = () => {
    heroRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div>
      <div ref={heroRef}>
        <Hero onScrollClick={handleScrollClick} />
      </div>
      <div ref={specialMessageRef}>
        <SpecialMessage onBackToTopClick={handleBackToTopClick} />
      </div>
    </div>
  )
}

export default Page