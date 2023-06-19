'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { BsSunglasses, BsScooter, BsCameraFill, BsCalendar4Event, BsBox2 } from 'react-icons/bs';
import { ImBooks } from 'react-icons/im'; 
import { FaCouch, FaGamepad, FaShapes} from 'react-icons/fa';
import { RiFridgeLine } from 'react-icons/ri';


import CategoryBox from "../CategoryBox";
import Container from '../Container';


export const categories = [
  {
    label: 'Appliances',
    icon: RiFridgeLine,
    description: 'Tools you only need once!'
  },
  {
    label: 'Attire',
    icon: BsSunglasses,
    description: 'Clothing for cheap!'
  },
  {
    label: 'Bikes / Scooters',
    icon: BsScooter,
    description: 'Helping you get places!',
  },
  {
    label: 'Books',
    icon: ImBooks,
    description: 'Education for a fraction of the cost!',
  },
  {
    label: 'Cameras / Video',
    icon: BsCameraFill,
    description: 'Rolling...'
  },
  {
    label: 'Furniture',
    icon: FaCouch,
    description: 'Enhance your room!'
  },
  {
    label: 'Gaming',
    icon: FaGamepad,
    description: 'Controllers for your next hangout.'
  },  
  {
    label: 'Event Space',
    icon: BsCalendar4Event,
    description: 'To hold ALL your guests!'
  },
  {
    label: 'Storage Space',
    icon: BsBox2,
    description: 'Last minute drop-offs.'
  },
  {
    label: 'Other',
    icon: FaShapes,
    description: '...'
  }
]

const Categories = () => {
  const params = useSearchParams();
  const category = params?.get('category');
  const pathname = usePathname();
  const isMainPage = pathname === '/';

  if (!isMainPage) {
    return null;
  }

  return (
    <Container>
      <div
        className="
          pt-4
          flex 
          flex-row 
          items-center 
          justify-between
          overflow-x-auto
        "
      >
        {categories.map((item) => (
          <CategoryBox 
            key={item.label}
            label={item.label}
            icon={item.icon}
            selected={category === item.label}
          />
        ))}
      </div>
    </Container>
  );
}
 
export default Categories;