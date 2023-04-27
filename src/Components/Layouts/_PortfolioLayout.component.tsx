import { Footer } from "../Miscellaneous/Footer.component";
import { RootBox, TopMarginBox, LightHeader } from "../Miscellaneous/GlobalElements.component";
import { PortfolioItemLeft, PortfolioItemRight } from "../PortfolioPage/PortfolioElements.component";
import FeaturedTestImg from "../../Assets/500x300.svg"

export default function PortfolioLayout() {
    return (
        <>
            <RootBox>
                <TopMarginBox>
                    <LightHeader>
                        What projects have you worked on?
                    </LightHeader>
                    <PortfolioItemLeft
                        Img={FeaturedTestImg}
                        Title="Project 1"
                        Desc="Description 1"
                    />
                </TopMarginBox>
                <TopMarginBox>
                    <PortfolioItemRight
                    Img={FeaturedTestImg}
                    Title="Project 2"
                    Desc="Description 2"
                    />
                </TopMarginBox>
                <TopMarginBox>
                    <PortfolioItemLeft
                        Img={FeaturedTestImg}
                        Title="Project 3"
                        Desc="Description 3"
                    />
                </TopMarginBox>
                <TopMarginBox>
                    <PortfolioItemRight
                    Img={FeaturedTestImg}
                    Title="Project 4"
                    Desc="Description 4"
                    />
                </TopMarginBox>
                <TopMarginBox>
                    <PortfolioItemLeft
                        Img={FeaturedTestImg}
                        Title="Project 5"
                        Desc="Description 5"
                    />
                </TopMarginBox>
                <Footer />
            </RootBox>
        </>
    );
}