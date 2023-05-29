import CustomNavbar from "../../../Utilities/CustomNav";
import { Footer } from "../../Elements/Footer.component";
import { RootBox } from "../../Elements/GlobalElements.component";
import Project2Content from "../../MainContent/Projects/Project2Content.component";

export default function Project1Layout() {
    return (
        <>
            <CustomNavbar />
            <RootBox>
                <Project2Content />
            </RootBox>
            <Footer />
        </>
    );
}