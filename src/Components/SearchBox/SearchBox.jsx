import "./SearchBox.css";
import { IoSearchOutline } from "react-icons/io5";

const SearchBox = () => {
    return (
        <div className="searchBox">
            <input type="text" placeholder="@eg: House title" />
            <button><IoSearchOutline /></button>
        </div>
    );
};

export default SearchBox;