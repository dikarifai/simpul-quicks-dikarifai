import { FeatherIcon } from "../../assets";
interface ToogleProps {
  src: string;
  className?: React.HTMLAttributes<HTMLDivElement> | string;
  onClick?: () => void;
  style?: React.CSSProperties;
}

const Toogle: React.FC<ToogleProps> = ({ src, className, onClick, style }) => {
  return (
    <div
      className={`${className} aspect-square rounded-full flex justify-center items-center cursor-pointer`}
      onClick={onClick}
      style={style}
    >
      <img src={src} alt={src} />
    </div>
  );
};

export default Toogle;
