import CustomNavbar from "../../../Utilities/CustomNav";
import { Footer } from "../../Elements/Footer.component";
import { RootBox } from "../../Elements/GlobalElements.component";
import Project3Content from "../../MainContent/Projects/Project3Content.component";

export default function Project3Layout() {
    return (
        <>
        {/* Add navbar and footer to content of page */}
            <CustomNavbar />
            <RootBox>
                <Project3Content />
            </RootBox>
            <Footer />
        </>
    );
}