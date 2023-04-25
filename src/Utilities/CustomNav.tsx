import { AppBar } from "@mui/material";
import { useEffect, useState } from "react";
import { Navbar, NavLink, NavMenu } from '../Components/Miscellaneous/NavbarElements.component';
import { NavbarState } from "../Interfaces/ICustomNav";
import logo from '../Assets/Personal_Logo_Transparent.png'

const CustomNavbar: React.FC = () => {
    const [state, setState] = useState<NavbarState>({
        prevScrollPos: window.pageYOffset,
        visible: true,
    });

    useEffect(() => {
        const handleScroll = () => {
            const { prevScrollPos } = state;
            const currentScrollPos = window.pageYOffset;
            const visible = prevScrollPos > currentScrollPos || currentScrollPos < 10;

            setState({
                prevScrollPos: currentScrollPos,
                visible,
            });
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, [state.prevScrollPos, state.visible]);

    return (
        <AppBar position="fixed" style={{ transform: state.visible ? 'translateY(0)' : 'translateY(-100%)', transition: 'transform 0.3s ease' }} enableColorOnDark>
            <Navbar>
                <NavMenu>
                    {/* <NavLink
                    customNavLink = "/home"
                    >
                        <img src={logo} alt="Logo" style={{ width: "2em", height: "auto" }}></img>
                    </NavLink> */}
                    <NavLink
                    customNavLink = "/"
                    >
                        Home
                    </NavLink>
                    <NavLink
                    customNavLink = "/about"
                    >
                        About
                    </NavLink>
                    <NavLink
                    customNavLink = "/portfolio"
                    >
                        Portfolio
                    </NavLink>
                    <NavLink
                    customNavLink = "/contact"
                    >
                        Contact
                    </NavLink>
                </NavMenu>
            </Navbar>
        </AppBar>
    );
};


export default CustomNavbar;