import { AppBar, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { NavbarState } from "../Interfaces/ICustomNav";
import logo from '../Assets/Personal_Logo_Transparent.png'
import { LogoName } from "../Styles/NavbarStyles";
import { Navbar, NavMenu, NavLink } from "../Pages/Elements/NavbarElements.component";

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
                <NavLink
                    link="/"
                >
                    <img src={logo} alt="Logo" style={{ width: "2em", height: "auto", zIndex: 1, position: 'absolute', display: 'flex', justifyContent: 'center', top: '1em' }}></img>
                    <Typography sx={LogoName}>Sim Yu Bo</Typography>
                </NavLink>
                <NavMenu>
                    <NavLink
                        link="/"
                    >
                        Home
                    </NavLink>
                    <NavLink
                        link="/about"
                    >
                        About
                    </NavLink>
                    <NavLink
                        link="/portfolio"
                    >
                        Portfolio
                    </NavLink>
                    <NavLink
                        link="/contact"
                    >
                        Contact
                    </NavLink>
                </NavMenu>
            </Navbar>
        </AppBar>
    );
};


export default CustomNavbar;