export interface Memoir {
  id: string;
  title: string;
  subtitle: string;
  year: string;
  description: string;
  coverImage: string;
  pdfUrl: string;
}

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  memoir: Memoir | null;
}