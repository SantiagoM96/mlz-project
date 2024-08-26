import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { navLinks } from "../constants";
import menu from "../assets/icons/nav/menu.svg"
import close from "../assets/icons/nav/close.svg"
import search from "../assets/icons/nav/search.svg"
import logo from "../assets/logo.png"
import arrow from "../assets/icons/nav/keyboard_arrow_down.svg"

const Header = () => {
    const [navIsOpen, setNavIsOpen] = useState(false);

    const toggleNavbar = () => setNavIsOpen(prev => !prev);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

    const toggleDropdown = (label: string) => {
        setActiveDropdown(prev => prev === label ? null : label);
    };

    const location = useLocation();
    useEffect(() => {
        setNavIsOpen(false);
    }, [location.pathname]);

    return (
        <>
            <header className="w-full h-full bg-[#236999] flex-center lg:static max-h-[110px] z-[1001] fixed bg-primary">
                <section className="w-full h-full max-w-[1232px] p-4 flex-between z-[1000] relative bg-[#236999]">
                    <div id="menu-buttons-wrapper" className="w-full lg:w-auto flex-between bg-[#236999]">
                        <Link to="/" className="w-[142px] md:w-[170px]">
                            <img src={logo} alt="logo" className="" />
                        </Link>

                        <button aria-label={navIsOpen ? "Close menu" : "Open menu"} className="lg:hidden cursor-pointer z-40" onClick={toggleNavbar}>
                            <img src={`${navIsOpen ? close : menu}`} alt={`${navIsOpen ? "close-menu" : "open-menu"}-icon`} />
                        </button>
                    </div>

                    <nav id="nav-menu-wrapper" className="text-white w-full hidden lg:block lg:flex-center" >
                        <ul className="flex-center gap-2">
                            {navLinks.map((link) =>
                            (
                                <li key={link.label} className="font-semibold cursor-pointer transition-colors duration-300 h-12 px-8 flex-center hover:bg-[#1F5A85] rounded">
                                    <NavLink to={link.url}>{link.label}</NavLink>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <div className="hidden lg:flex">
                        <form>
                            <div className="relative">
                                <div className="absolute inset-y-0 flex items-center ps-4 pointer-events-none">
                                    <img src={search} alt="" />
                                </div>
                                <input type="text" placeholder="Buscar" className="w-full md:w-80 h-12 py-2 px-4 ps-14 text-gray-900 border-none outline-none rounded" />
                            </div>
                        </form>
                    </div>
                </section>
                <nav id="mobile-nav-menu-wrapper" className={`${navIsOpen ? " translate-y-0" : " -translate-y-[150%]"} 
                  bg-white min-h-screen top-[110px] left-0 absolute w-full lg:hidden p-6
                    z-[999] transform transition-transform duration-[700ms] easy-in`} >
                    <ul className="flex flex-col gap-4">
                        {navLinks.map(link => (
                            <li key={link.label} className="flex flex-col">
                                <div
                                    className="flex items-center justify-between cursor-pointer"
                                    onClick={() => toggleDropdown(link.label)}
                                >
                                    <div className="flex items-center gap-2">
                                        <div className="bg-[#F3F7FC] w-10 h-10 p-2 rounded">
                                            <img src={link.icon} alt={`${link.label} Icon`} />
                                        </div>
                                        <a href={link.url} className="font-semibold text-[#236999]">{link.label}</a>
                                    </div>
                                    {link.subItems && (
                                        <img
                                            src={arrow}
                                            alt="Arrow Down Icon"
                                            className={`${activeDropdown === link.label ? "rotate-180" : ""} transition-transform duration-100`}
                                        />
                                    )}
                                </div>
                                {link.subItems && (
                                    <ul
                                        className={`flex flex-col gap-2 overflow-hidden transition-all duration-500 ease-out
                                            ${activeDropdown === link.label ? "py-6 h-auto" : "py-0 h-0"
                                            }`}
                                    >
                                        {link.subItems.map((subItem) => (
                                            <li key={subItem.label} className="flex items-center gap-2">
                                                <NavLink to={subItem.url} className="text-gray-700">
                                                    {subItem.label}
                                                </NavLink>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}
                    </ul>
                </nav>
            </header >
        </>
    );
};

export default Header;
