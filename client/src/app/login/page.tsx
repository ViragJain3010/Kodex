'use client';

import { useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Github, Mail, Lock, User, AlertCircle, Loader2, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import API_BASE_URL from '@/utils/config';

export default function LoginPage() {
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [oauthLoading, setOauthLoading] = useState<'google' | 'github' | null>(null);
  const { login } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      await login(identifier, password);
      setIsSuccess(true);
      // Wait for 2 seconds to let the user see the beautiful animation
      setTimeout(() => {
        router.push('/');
      }, 2000);
    } catch (err: any) {
      setError(err.message || 'Failed to login');
      setIsLoading(false);
    }
  };

  const handleOAuthLogin = (provider: 'google' | 'github') => {
    setOauthLoading(provider);
    // Redirect to backend OAuth route
    window.location.href = `${API_BASE_URL}/auth/${provider}`;
  };

  return (
    <div className="flex-1 flex items-center justify-center p-4 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <Card className="border-cyan-500/30 bg-gray-900/60 backdrop-blur-xl shadow-2xl shadow-cyan-500/10">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold text-center text-white">
              Welcome Back
            </CardTitle>
            <CardDescription className="text-center text-gray-400">
              Enter your credentials to access your account
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {isSuccess ? (
              <div className="py-8 flex flex-col items-center justify-center space-y-4">
                <div className="relative">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="h-16 w-16 bg-cyan-500 rounded-full flex items-center justify-center"
                  >
                    <CheckCircle2 className="h-10 w-10 text-white" />
                  </motion.div>
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="absolute -inset-2 border-2 border-cyan-500 rounded-full opacity-50"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-white">Login Successful!</h3>
                  <p className="text-gray-400 mt-2 flex items-center justify-center gap-2">
                    <Loader2 className="h-4 w-4 animate-spin text-cyan-400" />
                    Redirecting you to home...
                  </p>
                </div>
              </div>
            ) : (
              <>
                {error && (
                  <div className="p-3 rounded-md bg-red-500/10 border border-red-500/50 flex items-center gap-2 text-red-500 text-sm">
                    <AlertCircle className="h-4 w-4" />
                    <span>{error}</span>
                  </div>
                )}
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="identifier" className="text-gray-300">
                      Email or Username
                    </Label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="identifier"
                        placeholder="Enter your email or username"
                        className="pl-10 bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-500 focus:border-cyan-500 focus:ring-cyan-500"
                        value={identifier}
                        onChange={e => setIdentifier(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <Label htmlFor="password" className="text-gray-300">
                        Password
                      </Label>
                      <Link
                        href="/forgot-password"
                        className="text-xs text-cyan-400 hover:text-cyan-300 transition-colors"
                      >
                        Forgot password?
                      </Link>
                    </div>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="password"
                        type="password"
                        placeholder="••••••••"
                        className="pl-10 bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-500 focus:border-cyan-500 focus:ring-cyan-500"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-cyan-600 hover:bg-cyan-500 text-white font-semibold transition-all duration-300"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Logging in...
                      </>
                    ) : (
                      'Login'
                    )}
                  </Button>
                </form>

                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t border-gray-700"></span>
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-gray-900 px-2 text-gray-400">Or continue with</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <Button
                    variant="outline"
                    className="bg-transparent border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white"
                    onClick={() => handleOAuthLogin('github')}
                    disabled={isLoading || oauthLoading !== null}
                  >
                    {oauthLoading === 'github' ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                      <>
                        <Github className="mr-2 h-4 w-4" />
                        GitHub
                      </>
                    )}
                  </Button>
                  <Button
                    variant="outline"
                    className="bg-transparent border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white"
                    onClick={() => handleOAuthLogin('google')}
                    disabled={isLoading || oauthLoading !== null}
                  >
                    {oauthLoading === 'google' ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                      <>
                        <Mail className="mr-2 h-4 w-4" />
                        Google
                      </>
                    )}
                  </Button>
                </div>
              </>
            )}
          </CardContent>
          <CardFooter>
            {!isSuccess && (
              <p className="text-center w-full text-sm text-gray-400">
                Don&apos;t have an account?{' '}
                <Link href="/signup" className="text-cyan-400 hover:text-cyan-300 font-semibold">
                  Sign up
                </Link>
              </p>
            )}
          </CardFooter>
        </Card>
      </motion.div>
    </div>
  );
}
