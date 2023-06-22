import { create } from 'zustand';
import useRentModal from './useRentModal';
import { categories } from '../components/navbar/Categories';

interface EditModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  listingId: string;
}

const useEditModal = create<EditModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
  listingId: '',
  setListingId: (id: string) => set(() => ({listingId: id}))
}));


export default useEditModal;
