import CustomNavbar from "../../Utilities/CustomNav";
import { Footer } from "../Elements/Footer.component";
import { RootBox } from "../Elements/GlobalElements.component";
import HomeContent from "../MainContent/HomeContent.component";

export default function HomeLayout() {
    return (
        <>
            <CustomNavbar />
            <RootBox>
                <HomeContent />
            </RootBox>
            <Footer />
        </>
    );
}