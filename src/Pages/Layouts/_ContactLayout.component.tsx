import CustomNavbar from "../../Utilities/CustomNav";
import { Footer } from "../Elements/Footer.component";
import { RootBox } from "../Elements/GlobalElements.component";
import ContactContent from "../MainContent/ContactContent.component";

export default function ContactLayout() {
    return (
        <>
        {/* Add navbar and footer to content of page */}
            <CustomNavbar />
            <RootBox>
                <ContactContent />
            </RootBox>
            <Footer />
        </>
    );
}