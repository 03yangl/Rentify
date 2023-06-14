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
    description: 'This property is on an island!'
  },
  {
    label: 'Attire',
    icon: GiIsland,
    description: 'This property is on an island!'
  },
  {
    label: 'Bikes and Scooters',
    icon: TbBeach,
    description: 'Books and Textbooks',
  },
  {
    label: 'Books and Textbooks',
    icon: GiWindmill,
    description: 'This property is has windmills!',
  },
  {
    label: 'Cameras / Video equipment',
    icon: MdOutlineVilla,
    description: 'This property is modern!'
  },
  {
    label: 'Furniture',
    icon: TbMountain,
    description: 'This property is in the countryside!'
  },
  {
    label: 'Gaming',
    icon: TbPool,
    description: 'This is property has a beautiful pool!'
  },  
  {
    label: 'Event Space',
    icon: TbPool,
    description: 'This is property has a beautiful pool!'
  },
  {
    label: 'Storage Space',
    icon: GiIsland,
    description: 'This property is on an island!'
  },
  {
    label: 'Other',
    icon: GiIsland,
    description: 'This property is on an island!'
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