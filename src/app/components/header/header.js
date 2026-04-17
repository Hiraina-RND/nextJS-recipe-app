import headerCss from "./header.module.css"

const Header = ({ handleToggleOrder }) => {
    return (
            <header className={headerCss.header}>
                <div className={headerCss.headerRow}>
                    <h1 className={headerCss.title}>Recipe Book</h1>
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