import CustomNavbar from "../../../Utilities/CustomNav";
import { Footer } from "../../Elements/Footer.component";
import { RootBox } from "../../Elements/GlobalElements.component";
import Project4Content from "../../MainContent/Projects/Project4Content.component";

export default function Project4Layout() {
    return (
        <>
        {/* Add navbar and footer to content of page */}
            <CustomNavbar />
            <RootBox>
                <Project4Content />
            </RootBox>
            <Footer />
        </>
    );
}