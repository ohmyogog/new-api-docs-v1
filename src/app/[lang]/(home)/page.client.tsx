'use client';

import { useEffect, useState } from 'react';
import { GrainGradient } from '@paper-design/shaders-react';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import { cn } from '@/lib/cn';

export function Hero() {
  const { resolvedTheme } = useTheme();
  const [showShaders, setShowShaders] = useState(false);
  const [imageReady, setImageReady] = useState(false);
  const [logoReady, setLogoReady] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Apply some delay, otherwise on slower devices, it errors with uniform images not being fully loaded.
    setTimeout(() => {
      setShowShaders(true);
    }, 400);
  }, []);

  return (
    <>
      {showShaders && (
        <GrainGradient
          className="animate-fd-fade-in absolute inset-0 duration-800"
          colors={
            resolvedTheme === 'dark'
              ? ['#06B6D4', '#8B5CF6', '#EC4899', '#1E3A8A00']
              : ['#22D3EE', '#A78BFA', '#F9A8D4', '#DBEAFE20']
          }
          colorBack="#00000000"
          softness={1}
          intensity={0.9}
          noise={0.5}
          shape="corners"
        />
      )}

      {/* Logo */}
      {mounted && (
        <div
          className={cn(
            'absolute max-lg:bottom-[-20%] max-lg:left-[-100px] lg:top-[-5%] lg:right-[10%]',
            logoReady ? 'animate-in fade-in zoom-in-95 duration-700' : 'invisible'
          )}
        >
          <Image
            src="/assets/logo.png"
            alt="logo"
            width={500}
            height={500}
            className="drop-shadow-2xl"
            onLoad={() => setLogoReady(true)}
            priority
          />
        </div>
      )}

      {mounted && (
        <Image
          src={
            resolvedTheme === 'dark'
              ? '/assets/dashboard-dark.png'
              : '/assets/dashboard-light.png'
          }
          alt="dashboard-preview"
          width={1200}
          height={800}
          className={cn(
            'absolute top-[460px] left-[20%] max-w-[1200px] rounded-xl border-2',
            'lg:top-[400px]',
            imageReady ? 'animate-in fade-in duration-400' : 'invisible'
          )}
          onLoad={() => setImageReady(true)}
          priority
        />
      )}
    </>
  );
}
