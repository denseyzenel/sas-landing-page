//Immediate return functional component(returns whatever is written within it)
//Displays whatever is written here inside a long rectangle yellow box in the top
//base-bol makes text bolder; text-p4 is a primary 4 colour; then transition the colours
//duration for transition in ms; //cursor pointed then changes the colour to p1 when hovered
//max-lg:h5 transition which only appears on mobile devices
//max-lg:relative to work on mobile devices
//max-lg:min-h-screen -takes full height of the screen
//max-lg:my-auto to make things appear on screen
//button is for mobile devices which will be hidden until clicking on hamburger button
//in react we add functionality by useState
// div classname=dot, creates a dot in the top
//li class name=nav logo; the logo appears inside the rectangle at top
// div className=w-full to make it span across the screen; opacity-0 so that it only appears when we click on three lines only in mobile
        //this displays whatever is written inside <header>, on the top left of the screen
        //class name is fixed so that it stays on top left
        //z makes it appear on top of other elements while scrolling
        //w-full so tht it extends to the full screen
        //py-padding to give it some space from top and bottom
        //NAV LINK-needs REACT SCROLL package(to scroll to diff elements on screen
        //npm install react-scroll; prettier; --save clsx
        //Div= h-14 is 56 pixels; center all the items;
        //max-lg(to reuse on mobile and laptop devices):px-5 ->applies padding to devices larger than 124 pixels(large devices)
        //A= lg:hidden (hidden on large devices); cursor-pointer makes it clickable
        //z-2 so that it shows on top of other elements
import { Link as LinkScroll } from "react-scroll";
import { useEffect, useState } from "react";
import clsx from "clsx";

const Header = () => {
    const [hasScrolled, setHasScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setHasScrolled(window.scrollY > 32);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const NavLink = ({ title }) => (
        <LinkScroll
            onClick={() => setIsOpen(false)}
            to={title}
            offset={-100}
            spy
            smooth
            activeClass="nav-active"
            className="base-bold text-p4 uppercase transition-colors duration-500 cursor-pointer hover:text-p1 max-lg:my-4 max-lg:h5"
        >
            {title}
        </LinkScroll>
    );

    return (
        <header
            className={clsx(
                "fixed top-0 left-0 z-50 w-full py-10 transition-all duration-500 max-lg:py-4",
                hasScrolled && "py-2 bg-black-100 backdrop-blur-[8px]",
            )}
        >
            <div className="container flex h-14 items-center max-lg:px-5">
                <a className="lg:hidden flex-1 cursor-pointer z-2">
                    <img src="/images/xora.svg" width={115} height={55} alt="logo" />
                </a>

                <div
                    className={clsx(
                        "w-full max-lg:fixed max-lg:top-0 max-lg:left-0 max-lg:w-full max-lg:bg-s2 max-lg:opacity-0",
                        isOpen ? "max-lg:opacity-100" : "max-lg:pointer-events-none",
                    )}
                >
                    <div className="max-lg:relative max-lg:flex max-lg:flex-col max-lg:min-h-screen max-lg:p-6 max-lg:overflow-hidden sidebar-before max-md:px-4">
                        <nav className="max-lg:relative max-lg:z-2 max-lg:my-auto">
                            <ul className="flex max-lg:block max-lg:px-12">
                                <li className="nav-li">
                                    <NavLink title="features" />
                                    <div className="dot" />
                                    <NavLink title="pricing" />
                                </li>

                                <li className="nav-logo">
                                    <LinkScroll
                                        to="hero"
                                        offset={-250}
                                        spy
                                        smooth
                                        className={clsx(
                                            "max-lg:hidden transition-transform duration-500 cursor-pointer",
                                        )}
                                    >
                                        <img
                                            src="/images/xora.svg"
                                            width={160}
                                            height={55}
                                            alt="logo"
                                        />
                                    </LinkScroll>
                                </li>

                                <li className="nav-li">
                                    <NavLink title="faq" />
                                    <div className="dot" />
                                    <NavLink title="download" />
                                </li>
                            </ul>
                        </nav>

                        <div className="lg:hidden block absolute top-1/2 left-0 w-[960px] h-[380px] translate-x-[-290px] -translate-y-1/2 rotate-90">
                            <img
                                src="/images/bg-outlines.svg"
                                width={960}
                                height={380}
                                alt="outline"
                                className="relative z-2"
                            />
                            <img
                                src="/images/bg-outlines-fill.png"
                                width={960}
                                height={380}
                                alt="outline"
                                className="absolute inset-0 mix-blend-soft-light opacity-5"
                            />
                        </div>
                    </div>
                </div>

                <button
                    className="lg:hidden z-2 size-10 border-2 border-s4/25 rounded-full flex justify-center items-center"
                    onClick={() => setIsOpen((prevState) => !prevState)}
                >
                    <img
                        src={`/images/${isOpen ? "close" : "magic"}.svg`}
                        alt="magic"
                        className="size-1/2 object-contain"
                    />
                </button>
            </div>
        </header>
    );
};

export default Header;