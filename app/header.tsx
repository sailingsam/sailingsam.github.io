'use client'
import { TextEffect } from '@/components/ui/text-effect'
import Link from 'next/link'
import Image from 'next/image'
import { CalendarIcon } from 'lucide-react'

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
      <div>
        <a
          href="https://cal.com/sailingsam"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-zinc-100 px-3 py-2 text-sm font-medium text-zinc-900 transition-colors hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700"
        >
          <CalendarIcon className="h-4 w-4" />
          Schedule a call
        </a>
      </div>
    </header>
  )
}
