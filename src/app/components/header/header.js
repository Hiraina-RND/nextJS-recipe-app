import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import headerCss from "./header.module.css"
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Header = ({ handleToggleOrder, findRecipeByName }) => {
    return (
            <header className={headerCss.header}>
                <div className={headerCss.headerRow}>
                    <h1 className={headerCss.title}>Recipe Book</h1>
                    <div className={headerCss.searchBar}>
                        <input
                        className={headerCss.searchInput}
                        type="text"
                        placeholder="Search a recipe by name . . ."
                        onChange={(e) => findRecipeByName(e.target.value)}
                        />
                        <FontAwesomeIcon className={headerCss.searchIcon} icon={faSearch} />
                    </div>
                    <button
                        type="button"
                        className={headerCss.headerToggleBtn}
                        onClick={handleToggleOrder}
                    >
                        Reverse order
                    </button>
                </div>
            </header>
    );
}

export default Header;