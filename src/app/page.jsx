'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from './context/authContext'; 

import Navbar from "@/app/components/Navbar";
import HeroSection from "@/app/components/HeroSection";

import Footer from "./components/Footer";

export default function Home() {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login'); 
    }
  }, [user, loading]);

  if (loading || !user) {
    return <div className="text-center mt-10">Loading...</div>;
  }

  return (
    <>
      <Navbar />
      <HeroSection />
      <Footer />
    </>
  );
}