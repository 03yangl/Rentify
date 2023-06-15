'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { TbBeach, TbMountain, TbPool } from 'react-icons/tb';
import { 
  GiBarn, 
  GiBoatFishing, 
  GiCactus, 
  GiCastle, 
  GiCaveEntrance, 
  GiForestCamp, 
  GiIsland,
  GiWindmill
} from 'react-icons/gi';
import { FaSkiing } from 'react-icons/fa';
import { BsSnow } from 'react-icons/bs';
import { IoDiamond } from 'react-icons/io5';
import { MdOutlineVilla } from 'react-icons/md';

import CategoryBox from "../CategoryBox";
import Container from '../Container';


export const categories = [
  {
    label: 'Appliances',
    icon: GiIsland,
    description: 'Tools you only need once!'
  },
  {
    label: 'Attire',
    icon: GiIsland,
    description: 'Clothing for cheap!'
  },
  {
    label: 'Bikes and Scooters',
    icon: TbBeach,
    description: 'Helping you get places!',
  },
  {
    label: 'Books and Textbooks',
    icon: GiWindmill,
    description: 'Education for a fraction of the cost!',
  },
  {
    label: 'Cameras / Video equipment',
    icon: MdOutlineVilla,
    description: 'Rolling...'
  },
  {
    label: 'Furniture',
    icon: TbMountain,
    description: 'Enhance your room!'
  },
  {
    label: 'Gaming',
    icon: TbPool,
    description: 'Controllers for your next hangout.'
  },  
  {
    label: 'Event Space',
    icon: TbPool,
    description: 'To hold ALL your guests!'
  },
  {
    label: 'Storage Space',
    icon: GiIsland,
    description: 'Last minute drop-offs.'
  },
  {
    label: 'Other',
    icon: GiIsland,
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