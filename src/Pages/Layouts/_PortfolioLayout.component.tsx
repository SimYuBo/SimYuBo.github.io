import CustomNavbar from "../../Utilities/CustomNav";
import { Footer } from "../Elements/Footer.component";
import { RootBox } from "../Elements/GlobalElements.component";
import PortfolioContent from "../MainContent/PortfolioContent.component";

export default function PortfolioLayout() {
    return (
        <>
        {/* Add navbar and footer to content of page */}
            <CustomNavbar />
            <RootBox>
                <PortfolioContent />
            </RootBox>
            <Footer />
        </>
    );
}