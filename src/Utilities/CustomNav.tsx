import { AppBar, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { NavbarState } from "../Interfaces/ICustomNav";
import logo from '../Assets/Personal_Logo_Transparent.png'
import { LogoName } from "../Styles/NavbarStyles";
import { Navbar, NavMenu, NavLink } from "../Pages/Elements/NavbarElements.component";

const CustomNavbar: React.FC = () => {
    // Define state variables to track the previous scroll position and visibility of the navbar
    const [state, setState] = useState<NavbarState>({
        prevScrollPos: window.pageYOffset,
        visible: true,
    });

    useEffect(() => {
        // Define the scroll event handler
        const handleScroll = () => {
            const { prevScrollPos } = state;
            const currentScrollPos = window.pageYOffset;
            const visible = prevScrollPos > currentScrollPos || currentScrollPos < 10;

            // Update the state with the new scroll position and visibility
            setState({
                prevScrollPos: currentScrollPos,
                visible,
            });
        };

        // Attach the scroll event listener when the component mounts
        window.addEventListener('scroll', handleScroll);

        // Clean up the scroll event listener when the component unmounts
        return () => window.removeEventListener('scroll', handleScroll);
    }, [state.prevScrollPos, state.visible]);

    return (
        // Render the navbar with an AppBar component from MUI, with styles based on the visibility state
        <AppBar position="fixed" style={{ transform: state.visible ? 'translateY(0)' : 'translateY(-100%)', transition: 'transform 0.3s ease' }} enableColorOnDark>
            <Navbar>
                {/* Render the logo and name */}
                <NavLink link="/">
                    <img src={logo} alt="Logo" style={{ width: "2em", height: "auto", zIndex: 1, position: 'absolute', display: 'flex', justifyContent: 'center', top: '1em' }}></img>
                    <Typography sx={LogoName}>Sim Yu Bo</Typography>
                </NavLink>
                {/* Render the navigation menu */}
                <NavMenu>
                    <NavLink link="/">Home</NavLink>
                    <NavLink link="/about">About</NavLink>
                    <NavLink link="/portfolio">Portfolio</NavLink>
                    <NavLink link="/contact">Contact</NavLink>
                </NavMenu>
            </Navbar>
        </AppBar>
    );
};

export default CustomNavbar;