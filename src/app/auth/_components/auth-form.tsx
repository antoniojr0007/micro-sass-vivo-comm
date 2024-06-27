'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { toast } from '@/components/ui/use-toast'
import { PlusIcon } from '@radix-ui/react-icons'
import { signIn } from 'next-auth/react'
import { useForm } from 'react-hook-form'

export default function AuthForm() {
  const form = useForm()

  const handleSubmit = form.handleSubmit(async (data) => {
    try {
      await signIn('nodemailer', { email: data.email, redirectUrl: false })
      toast({
        title: 'Magic Link Sent',
        description: 'Check your email for the magic link to login',
      })
    } catch (error) {
      toast({
        title: 'Error',
        description: 'An error occurred. Please try again',
      })
    }
  })

  return (
    <div className="flex min-h-screen items-center justify-center bg-purple-600 dark:bg-gray-950">
      <div className="mx-auto w-full max-w-md space-y-8 rounded-lg bg-white p-8 shadow-lg dark:bg-gray-900">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight">Sign in</h1>
          <p className="mt-2 text-gray-500 dark:text-gray-400">
            Sign in to your account to access the email composer.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Input
              id="email"
              type="email"
              placeholder="name@example.com"
              required
              {...form.register('email')}
            />
          </div>
          <Button
            type="submit"
            className="w-full"
            disabled={form.formState.isSubmitting}
          >
            {form.formState.isSubmitting ? 'Sending...' : ' Send Magic Link'}
          </Button>
        </form>
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-gray-300 dark:border-gray-700" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="bg-white px-2 text-gray-500 dark:bg-gray-900 dark:text-gray-400">
              Or sign in with
            </span>
          </div>
        </div>

        <div className="space-y-4">
          <Button variant="outline" className="w-full">
            <PlusIcon className="mr-2 h-5 w-5" />
            Sign in with Google
          </Button>
          <Button variant="outline" className="w-full">
            <PlusIcon className="mr-2 h-5 w-5" />
            Sign in with Outlook
          </Button>
          <Button variant="outline" className="w-full">
            <PlusIcon className="mr-2 h-5 w-5" />
            Sign in with Proton
          </Button>
        </div>
      </div>
    </div>
  )
}
