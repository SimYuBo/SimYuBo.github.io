import { Footer } from "../Miscellaneous/Footer.component";
import { RootBox, TopMarginBox, LightHeader, FadeInSection } from "../Miscellaneous/GlobalElements.component";
import { PortfolioItemLeft, PortfolioItemRight } from "../PortfolioPage/PortfolioElements.component";
import FeaturedTestImg from "../../Assets/500x300.svg"
import EscapeRoomImage1 from "../../Assets/EscapeRoomImage1.jpg"
import ToyKingdomImage1 from "../../Assets/ToyKingdomImage1.jpg"
import ToyKingdomImage2 from "../../Assets/ToyKingdomImage2.jpg"

export default function PortfolioLayout() {
    return (
        <>
            <RootBox>
                <TopMarginBox>
                    <FadeInSection>
                        <LightHeader>
                            What projects have you worked on?
                        </LightHeader>
                    </FadeInSection>
                    <FadeInSection>
                        <PortfolioItemLeft
                            imageUrl={EscapeRoomImage1}
                            title="VR Escape Room"
                            description="This VR escape room was an assignment that I was tasked with to complete using C# in Unity.
                        Overall, this was an eye opening experience for me as it was the first time learning C#, not to mention how excited I was to make my first ever game, in VR nonetheless!
                        What kid hasn't thought of making their own game."
                            dialogImageUrl={EscapeRoomImage1}
                            languages="C#, Unity 3D"
                        />
                    </FadeInSection>
                </TopMarginBox>
                <TopMarginBox>
                    <FadeInSection>
                        <PortfolioItemRight
                            imageUrl={ToyKingdomImage1}
                            title="Little Toy Kingdom"
                            description="Little Toy Kingdom is a concept design for a toy store that wants to transition online. 
                        It is a practice task I used to hone my skills in Web Design, teaching me good practices in designing an online store."
                            dialogImageUrl={ToyKingdomImage2}
                            languages="Adobe XD"
                        />
                    </FadeInSection>
                </TopMarginBox>
                <TopMarginBox>
                    <FadeInSection>
                        <PortfolioItemLeft
                            imageUrl={FeaturedTestImg}
                            title="Project 3"
                            description="ligula ullamcorper malesuada proin libero nunc consequat interdum varius sit amet mattis vulputate enim 
                        nulla aliquet porttitor lacus luctus accumsan tortor posuere ac ut consequat semper viverra nam libero justo laoreet 
                        sit amet cursus sit amet dictum sit amet justo donec enim diam vulputate ut pharetra sit amet aliquam id diam maecenas 
                        ultricies mi eget mauris pharetra et ultrices neque"
                            dialogImageUrl={FeaturedTestImg}
                            languages=""
                        />
                    </FadeInSection>
                </TopMarginBox>
                <TopMarginBox>
                    <FadeInSection>
                        <PortfolioItemRight
                            imageUrl={FeaturedTestImg}
                            title="Project 4"
                            description="quam viverra orci sagittis eu volutpat odio facilisis mauris sit amet massa vitae tortor condimentum lacinia 
                        quis vel eros donec ac odio tempor orci dapibus ultrices in iaculis nunc sed augue lacus viverra vitae congue eu consequat 
                        ac felis donec et odio pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus faucibus scelerisque eleifend 
                        donec pretium vulputate sapien nec sagittis"
                            dialogImageUrl={FeaturedTestImg}
                            languages=""
                        />
                    </FadeInSection>
                </TopMarginBox>
                <TopMarginBox>
                    <FadeInSection>
                        <PortfolioItemLeft
                            imageUrl={FeaturedTestImg}
                            title="Project 5"
                            description="nunc eget lorem dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida neque convallis a cras 
                        semper auctor neque vitae tempus quam pellentesque nec nam aliquam sem et tortor consequat id porta nibh venenatis cras 
                        sed felis eget velit aliquet sagittis id consectetur purus ut faucibus pulvinar elementum integer enim neque volutpat ac 
                        tincidunt vitae semper quis lectus nulla"
                            dialogImageUrl={FeaturedTestImg}
                            languages=""
                        />
                    </FadeInSection>
                </TopMarginBox>
                <Footer />
            </RootBox>
        </>
    );
}