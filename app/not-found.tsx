import Button from '@/components/ui/Button'
import Container from '@/components/ui/Container'
import Heading from '@/components/ui/Heading'
import React from 'react'

const NotFound = () => {
  return (
      <main className=' relative '>
          <div className='w-full h-px bg-outline '/>
          <Container  className='flex flex-col h-[calc(100vh-120px)]  border-x border-outline  items-center justify-center'>
              <Heading className='lg:text-6xl font-bold mb-4 ml-0 text-neutral-900 dark:text-neutral-50'>404</Heading>
              <p className='text-lg text-neutral-600 dark:text-neutral-400'>Page Not Found</p>
              <Button href='/' tag='link' variant='primary' size='sm' className='flex items-center gap-2 rounded-lg group relative mt-4'>Back to Home</Button>
        </Container>
    </main>
  )
}

export default NotFound



