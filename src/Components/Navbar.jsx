function Navbar(){
    return(
        <nav className="navbar">
            <div>
                <h2>Campus Hub</h2>
            </div>

            <div className="search-bar">
                <input type="text" placeholder="Search Students..."/>
            </div>
            <div>
                <p>Admin</p>
            </div>
        </nav>
    );
}

export default Navbar;
