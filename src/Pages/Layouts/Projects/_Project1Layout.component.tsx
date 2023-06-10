import CustomNavbar from "../../../Utilities/CustomNav";
import { Footer } from "../../Elements/Footer.component";
import { RootBox } from "../../Elements/GlobalElements.component";
import Project1Content from "../../MainContent/Projects/Project1Content.component";

export default function Project1Layout() {
    return (
        <>
        {/* Add navbar and footer to content of page */}
            <CustomNavbar />
            <RootBox>
                <Project1Content />
            </RootBox>
            <Footer />
        </>
    );
}