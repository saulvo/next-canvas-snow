import dynamic from 'next/dynamic';
import Image from 'next/image';
import img from '../public/photo.png';
const Snowfall = dynamic(() => import('../components/Snowfall'));

export default function Home() {
  return (
    <main>
      <Image src={img} alt='Saul Vo' className='photo' />
      <Snowfall />
    </main>
  );
}
