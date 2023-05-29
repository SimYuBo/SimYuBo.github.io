import CustomNavbar from "../../Utilities/CustomNav";
import { Footer } from "../Elements/Footer.component";
import { RootBox } from "../Elements/GlobalElements.component";
import AboutContent from "../MainContent/AboutContent.component";

export default function AboutLayout() {
    return (
        <>
            <CustomNavbar />
            <RootBox>
                <AboutContent />
            </RootBox>
            <Footer />
        </>
    );
}