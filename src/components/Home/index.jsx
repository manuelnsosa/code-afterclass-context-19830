import { React } from 'react';
import PlantsList from '../PlantsList';
import plants from '../../mock/plants';

const Home = () => (
  <div className='relative'>
    <PlantsList plants={plants} />
    {/* <div className='absolute bottom-1/10 right-10 mb-4 mr-4 z-10 hover:animate-ping'>
      <div>
        <Link
          to='/cart'
          title='Wishlist'
          target='_blank'
          className='block w-16 h-16 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12'
        >
          <img
            className='object-cover object-center w-full h-full rounded-full'
            src='heart.png'
            alt='https://www.flaticon.com/free-icons/wishlist'
          />
        </Link>
      </div>
    </div> */}
  </div>
);

export default Home;
