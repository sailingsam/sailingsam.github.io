type Project = {
  name: string
  description: string
  link: string
  src?: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  description?: string
  start: string
  end: string
  link: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
  {
    name: 'House Arena V2',
    description:
      'Official app used by Scaler students to see the current leaderboard and past house events-wise points.',
    link: 'https://housearenas.vercel.app/',
    src: '/projects/House-arena-V2.png',
    id: 'project1',
  },
  {
    name: 'ProjeXBio',
    description: 'Developed a scalable REST API using NestJS, PostgreSQL, and Prisma ORM for a college project showcase platform.',
    link: 'https://github.com/projexbio',
    src: '/projects/nestjs-1.webp',
    id: 'project2',
  },
  {
    name: 'House Arena V1',
    description: 'Developed a Web app for my College Houses house events-wise points.',
    link: 'https://housearena.vercel.app/',
    src: '/projects/House-arena-V1.png',
    id: 'project3',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'InterviewBit',
    title: 'Buddy / Mentor / Teaching Assistant',
    description: ' Guiding Students in computer science concepts, project building, and career advice. Helping with problem-solving, code reviews, and introducing best practices in programming, databases, and development tools',
    start: 'May 2025',
    end: 'Present',
    link: 'https://interviewbit.com/',
    id: 'work1',
  },
  {
    company: 'Clearfeed.ai',
    title: 'Software Engineer Intern',
    description: 'Frontend development\n - Developing and enhancing Clearfeed\'s dashboard features using Next.js, React, and TypeScript. Collaborating with design and product teams to create interactive and user-friendly interfaces.',
    start: 'Feb 2025',
    end: 'Apr 2025',
    link: 'https://clearfeed.ai/',
    id: 'work2',
  },
  {
    company: 'Clearfeed.ai',
    title: 'SDET Intern',
    description: 'API Automations\n - Developed Test Cases for New Features: Designed and implemented test cases for the ClearFeed Automation feature from scratch, achieving comprehensive API test coverage.\n - Refactored Legacy Code: Rewrote/debugged outdated scripts, ensuring functionality and improving maintainability.\n \n Data Visualization\n - Developed a Billing ID Metrics Dashboard using Streamlit, fetching and displaying account, collection, and billing related metrics in an interactive UI',
    start: 'Oct 2024',
    end: 'Jan 2025',
    link: 'https://clearfeed.ai/',
    id: 'work3',
  },
  {
    company: 'InterviewBit',
    title: 'Content Analyst Intern',
    start: 'Nov 2023',
    end: 'Jan 2024',
    link: 'https://www.scaler.com/',
    id: 'work4',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Exploring the Intersection of Design, AI, and Design Engineering',
    description: 'How AI is changing the way we design',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-1',
  },
  {
    title: 'How to Export Metadata from MDX for Next.js SEO',
    description: 'A guide on exporting metadata from MDX files to leverage Next.js SEO features.',
    link: '/blog/example-mdx-metadata',
    uid: 'blog-4',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/sailingsam',
  },
  {
    label: 'Twitter',
    link: 'https://x.com/jainsaksham1004',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/sailingsam',
  },
  {
    label: 'Instagram',
    link: 'https://www.instagram.com/_sailingsam',
  },
]

export const EMAIL = 'jainsaksham1004@gmail.com'
