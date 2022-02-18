import { React } from 'react';
import { Link } from 'react-router-dom';
import PlantsList from '../PlantsList';
import plants from '../../mock/plants';

const Home = () => (
  <div className='relative'>
    <PlantsList plants={plants} />
    <div className='absolute bottom-0/300 right-6 mb-4 mr-4 z-10'>
      <div>
        <Link
          to='/cart'
          title='Follow me on twitter'
          target='_blank'
          className='block w-16 h-16 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12'
        >
          <img
            className='object-cover object-center w-full h-full rounded-full'
            src='https://www.imore.com/sites/imore.com/files/styles/large/public/field/image/2019/12/twitter-logo.jpg'
            alt='twitter'
          />
        </Link>
      </div>
    </div>
  </div>
);

export default Home;
