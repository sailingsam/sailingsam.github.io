'use client'
import { TextEffect } from '@/components/ui/text-effect'
import Link from 'next/link'
import Image from 'next/image'

export function Header() {
  return (
    <header className="mb-8 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <Image
          src="/avatar.webp"
          alt="Saksham Jain"
          width={60}
          height={60}
          className="rounded-full"
        />
        <div>
          <Link href="/" className="font-medium text-black dark:text-white">
            Saksham Jain
          </Link>
          <TextEffect
            as="p"
            preset="fade"
            per="char"
            className="text-zinc-600 dark:text-zinc-500"
            delay={0.5}
          >
            Software Engineer
          </TextEffect>
        </div>
      </div>
    </header>
  )
}
