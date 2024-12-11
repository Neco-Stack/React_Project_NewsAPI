interface SearchBarProps {
    setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
    setLanguage: React.Dispatch<React.SetStateAction<string>>;
    onSearch: () => void; 
}

const SearchBar: React.FC<SearchBarProps> = ({setSearchQuery, setLanguage, onSearch}) => {
    return (
        <div>
            <input 
            type="text"
            placeholder="Type to search"
            onChange={(e) => setSearchQuery(e.target.value)}
        />
            <select onChange={(e) => setLanguage(e.target.value)}>
                <option value="en">Englisch</option>
                <option value="de">Deutsch</option>
            </select>
            <button onClick={onSearch}>Search</button>
        </div>
    )
};

export default SearchBar;