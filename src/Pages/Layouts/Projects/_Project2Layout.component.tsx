import CustomNavbar from "../../../Utilities/CustomNav";
import { Footer } from "../../Elements/Footer.component";
import { RootBox } from "../../Elements/GlobalElements.component";
import Project2Content from "../../MainContent/Projects/Project2Content.component";

export default function Project2Layout() {
    return (
        <>
        {/* Add navbar and footer to content of page */}
            <CustomNavbar />
            <RootBox>
                <Project2Content />
            </RootBox>
            <Footer />
        </>
    );
}