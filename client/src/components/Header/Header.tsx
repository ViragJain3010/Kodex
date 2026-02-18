'use client';

import { memo } from 'react';
import { useTheme } from 'next-themes';
import { Sun, Moon, LogOut, User as UserIcon, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import KodexLogo from './KodexLogo';
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import { usePathname } from 'next/navigation';

const Header = memo(() => {
  const { theme, setTheme } = useTheme();
  const { user, logout } = useAuth();
  const pathname = usePathname();
  const router = useRouter();
  const [isNavigating, setIsNavigating] = useState(false);

  const isAuthPage = ['/login', '/signup', '/forgot-password', '/reset-password'].includes(
    pathname
  );

  const handleLoginClick = () => {
    setIsNavigating(true);
    router.push('/login');
  };

  useEffect(() => {
    setIsNavigating(false);
  }, [pathname]);

  return (
    <header className="bg-background/20 backdrop-blur-sm border-b border-border sticky top-0 z-10 shadow-md">
      <div className="container mx-auto flex justify-between items-center py-3 px-4">
        <Link href="/">
          <KodexLogo />
        </Link>
        {!isAuthPage && (
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="bg-transparent border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-gray-900"
            >
              {theme === 'dark' ? (
                <Sun className="h-[1.2rem] w-[1.2rem]" />
              ) : (
                <Moon className="h-[1.2rem] w-[1.2rem]" />
              )}
              <span className="sr-only">Toggle theme</span>
            </Button>

            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="relative h-10 w-10 rounded-full border border-border"
                  >
                    <UserIcon className="h-5 w-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end" forceMount>
                  <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium leading-none">{user.username}</p>
                      <p className="text-xs leading-none text-muted-foreground">{user.email}</p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={logout} className="text-red-500 focus:text-red-500">
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button
                className="bg-cyan-500 hover:bg-cyan-600 text-white border-none min-w-[80px]"
                onClick={handleLoginClick}
                disabled={isNavigating}
              >
                {isNavigating ? <Loader2 className="h-4 w-4 animate-spin" /> : 'Login'}
              </Button>
            )}
          </div>
        )}
      </div>
    </header>
  );
});

Header.displayName = 'Header';

export default Header;
