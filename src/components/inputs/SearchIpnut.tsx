import { SearchIcon } from "../../assets";

const SearchInput: React.FC = () => {
  return (
    <div className="relative flex items-center w-full h-10 pl-3">
      <img
        className="relative z-10 w-6 aspect-square"
        src={SearchIcon}
        alt=""
      />
      <input
        className="absolute top-0 left-0 w-full h-full bg-[#828282]"
        type="text"
      />
    </div>
  );
};

export default SearchInput;
