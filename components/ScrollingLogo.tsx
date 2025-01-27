'use client'

import Image from "next/image"
import { useEffect, useState } from "react"

const logos = [
  { src: "/PlatON-NETWORK.png", alt: "PlatON" },
  { src: "/DeworkHub.jpg", alt: "DeworkHub" },
  { src: "/NiftyIN.jpg", alt: "NiftyIN" },
  { src: "/ATON2.png", alt: "ATON" },
  { src: "/DipoleSwap.jpg", alt: "DipoleSwap" },
  { src: "/topwallet2.png", alt: "topwallet" },
]

export default function ScrollingLogoBanner() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return null 
  }

  return (
    <div className="w-full overflow-hidden bg-gray-100 py-4">
      <div className="flex animate-scroll">
        {[...logos, ...logos].map((logo, index) => (
          <div key={index} className="flex-shrink-0 mx-8 flex justify-center items-center">
            <Image
              src={logo.src || "/placeholder.svg"}
              alt={logo.alt}
              width={100}
              height={50}
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

