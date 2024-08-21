interface ModalProps {
  show: boolean;
}

const Modal: React.FC<ModalProps> = ({ show }) => {
  return (
    <div
      className={`${
        show ? "flex" : "hidden"
      } absolute right-0 bg-white bottom-24 w-[450px] aspect-square rounded-xl`}
    ></div>
  );
};

export default Modal;
