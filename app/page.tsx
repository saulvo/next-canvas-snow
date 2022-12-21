import dynamic from 'next/dynamic';
import Image from 'next/image';
import img from '../public/photo.png';
const SnowFall = dynamic(() => import('../components/SnowFall'));

export default function Home() {
  return (
    <main>
      <Image src={img} alt='' className='photo' />
      <SnowFall />
    </main>
  );
}
