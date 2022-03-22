import Hero from '../components/Hero';
import { useSession } from 'next-auth/react';
import Dashboard from './dashboard';

export default function Home() {
  const { data: session } = useSession();
  return <>{!session ? <Hero /> : <Dashboard />}</>;
}
