import { useState, useEffect, useRef } from "react";

const Nav = () => {
  const [isPackagesOpen, setIsPackagesOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [submittedQuery, setSubmittedQuery] = useState("");
  const navRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsPackagesOpen(false);
        setIsSearchOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const togglePackagesMenu = () => {
    setIsPackagesOpen(!isPackagesOpen);
  };

  const toggleSearchBar = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const handleSearchIconDoubleClick = (e) => {
    e.preventDefault();
    toggleSearchBar();
  };

  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedQuery(searchInput);
    setSearchInput(""); // Clear the search bar input
  };

  const navStyle = {
    backgroundColor: "#F3F4F6",
    borderBottom: "2px solid black",
    borderTop: "2px solid black",
    borderRadius: "2px",
    paddingBottom: "4px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    fontSize: "15px",
  };

  const menuStyle = {
    display: "flex",
  };

  const menuItemStyle = {
    margin: "0 10px",
  };

  const searchButtonStyle = {
    cursor: "pointer",
    marginLeft: "10px",
  };

  const searchBarStyle = {
    display: "flex",
    alignItems: "center",
    marginLeft: "10px",
  };

  return (
    <div>
      <div style={navStyle} ref={navRef}>
        <div className="flex items-center">
          <div>
            <svg
              className="mb-0 text-primary"
              width="15"
              height="15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              onDoubleClick={handleSearchIconDoubleClick}
            >
              {/* ... SVG path ... */}
            </svg>
          </div>
          <div className="ml-2">
            <h3 className="text-gray-800 font-sans font-medium text-base">
              Tour Planner
            </h3>
          </div>
        </div>
        <div className="mr-8" style={menuStyle}>
          <a href="#" style={menuItemStyle}>
            Home
          </a>
          <div
            style={{ position: "relative" }}
            onClick={() => togglePackagesMenu()}
          >
            <a
              href="#"
              style={menuItemStyle}
              onClick={(e) => {
                e.preventDefault();
                togglePackagesMenu();
              }}
            >
              Packages
            </a>
            {isPackagesOpen && (
              <div
                style={{
                  position: "absolute",
                  top: "100%",
                  left: "0",
                  display: "flex",
                  flexDirection: "column",
                  background: "white",
                  border: "1px solid #ccc",
                  borderRadius: "2px",
                  zIndex: "1",
                }}
              >
                <a
                  href="#"
                  style={{ padding: "10px", borderBottom: "1px solid #ccc" }}
                >
                  Solo Package
                </a>
                <a
                  href="#"
                  style={{ padding: "10px", borderBottom: "1px solid #ccc" }}
                >
                  Couple Package
                </a>
                <a
                  href="#"
                  style={{ padding: "10px", borderBottom: "1px solid #ccc" }}
                >
                  Family Package
                </a>
                <a href="#" style={{ padding: "10px" }}>
                  Friends Package
                </a>
              </div>
            )}
          </div>
          <div
            style={searchBarStyle}
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            <div
              style={searchButtonStyle}
              onDoubleClick={handleSearchIconDoubleClick}
            >
              🔍
            </div>
            {isSearchOpen && (
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Search..."
                  onChange={handleInputChange}
                  value={searchInput}
                />
                <button type="submit">Submit</button>
              </form>
            )}
          </div>
        </div>
      </div>
      {submittedQuery && (
        <div>
          <p>Submitted Query: {submittedQuery}</p>
        </div>
      )}
    </div>
  );
};

export default Nav;
