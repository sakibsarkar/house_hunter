import "./SearchBox.css";
import { IoSearchOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const SearchBox = () => {
    const navigate = useNavigate()
    const handleSearch = (e) => {
        const value = e.target.value
        if (e.keyCode === 13) {
            navigate(`/?search=${value}`)

        }
    }
    return (
        <div className="searchBox">
            <input type="text" placeholder="@eg: House title" onKeyUp={handleSearch} />
            <button><IoSearchOutline /></button>
        </div>
    );
};

export default SearchBox;