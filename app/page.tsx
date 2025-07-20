import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { APP_CONFIG } from '@/lib/constants';

export default function Home() {
  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900'>
      <div className='container mx-auto px-4 py-16 sm:px-6 lg:px-8'>
        {/* Header */}
        <div className='mb-16 text-center'>
          <h1 className='mb-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl dark:text-white'>
            {APP_CONFIG.name}
          </h1>
          <p className='mx-auto mb-8 max-w-2xl text-xl text-gray-600 dark:text-gray-300'>
            {APP_CONFIG.description}
          </p>
          <div className='mb-8 flex flex-wrap justify-center gap-2'>
            <Badge variant='default'>Next.js 15</Badge>
            <Badge variant='secondary'>React 19</Badge>
            <Badge variant='outline'>TypeScript</Badge>
            <Badge variant='outline'>Tailwind CSS</Badge>
            <Badge variant='outline'>Shadcn/ui</Badge>
          </div>
        </div>

        {/* Features Grid */}
        <div className='mb-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
          <Card>
            <CardHeader>
              <CardTitle className='flex items-center gap-2'>
                🚀 Ready to Use
              </CardTitle>
              <CardDescription>
                Modern Next.js setup with the latest technologies
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className='space-y-1 text-sm text-gray-600 dark:text-gray-300'>
                <li>• Next.js 15 with React 19</li>
                <li>• TypeScript configuration</li>
                <li>• Tailwind CSS v4</li>
                <li>• Shadcn/ui components</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className='flex items-center gap-2'>
                🛠️ Code Quality
              </CardTitle>
              <CardDescription>
                Comprehensive tools for maintaining clean code
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className='space-y-1 text-sm text-gray-600 dark:text-gray-300'>
                <li>• ESLint + Prettier</li>
                <li>• Husky Git hooks</li>
                <li>• TypeScript strict mode</li>
                <li>• Automated formatting</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className='flex items-center gap-2'>
                📁 Well Organized
              </CardTitle>
              <CardDescription>
                Clean project structure and conventions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className='space-y-1 text-sm text-gray-600 dark:text-gray-300'>
                <li>• Component library setup</li>
                <li>• Utility functions</li>
                <li>• Constants & configuration</li>
                <li>• Environment variables</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Component Examples */}
        <div className='mb-16'>
          <h2 className='mb-8 text-center text-3xl font-bold text-gray-900 dark:text-white'>
            Component Examples
          </h2>
          <div className='grid grid-cols-1 gap-8 md:grid-cols-2'>
            <Card>
              <CardHeader>
                <CardTitle>UI Components</CardTitle>
                <CardDescription>
                  Pre-configured Shadcn/ui components ready to use
                </CardDescription>
              </CardHeader>
              <CardContent className='space-y-4'>
                <div className='flex flex-wrap gap-2'>
                  <Button variant='default'>Default</Button>
                  <Button variant='secondary'>Secondary</Button>
                  <Button variant='outline'>Outline</Button>
                  <Button variant='ghost'>Ghost</Button>
                </div>
                <div className='flex flex-wrap gap-2'>
                  <Badge>Default</Badge>
                  <Badge variant='secondary'>Secondary</Badge>
                  <Badge variant='outline'>Outline</Badge>
                  <Badge variant='destructive'>Destructive</Badge>
                </div>
                <Input placeholder='Example input field...' />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Quick Start</CardTitle>
                <CardDescription>
                  Get started with these simple commands
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className='space-y-3 text-sm'>
                  <div className='rounded-md bg-gray-100 p-3 font-mono dark:bg-gray-800'>
                    pnpm run setup
                  </div>
                  <div className='rounded-md bg-gray-100 p-3 font-mono dark:bg-gray-800'>
                    pnpm run dev
                  </div>
                  <div className='rounded-md bg-gray-100 p-3 font-mono dark:bg-gray-800'>
                    pnpm run ui:add button
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className='text-center'>
          <div className='inline-flex flex-col gap-4 sm:flex-row'>
            <Button asChild size='lg'>
              <Link href='https://github.com/GuilhermeVozniak/base-next-app'>
                View on GitHub
              </Link>
            </Button>
            <Button variant='outline' size='lg' asChild>
              <Link href='/docs'>Read Documentation</Link>
            </Button>
          </div>
          <p className='mt-4 text-sm text-gray-500 dark:text-gray-400'>
            Start building amazing applications with this solid foundation
          </p>
        </div>
      </div>
    </div>
  );
}
