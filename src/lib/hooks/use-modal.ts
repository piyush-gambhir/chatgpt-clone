import { useState } from "react";

type Modal = {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
};

export default function useModal(): Modal {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = (): void => setIsOpen(true);
  const closeModal = (): void => setIsOpen(false);

  return { isOpen, openModal, closeModal };
}
