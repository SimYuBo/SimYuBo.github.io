import { Footer } from "../Miscellaneous/Footer.component";
import { RootBox, TopMarginBox, LightHeader, FadeInSection } from "../Miscellaneous/GlobalElements.component";
import { PortfolioItemLeft, PortfolioItemRight } from "../PortfolioPage/PortfolioElements.component";
import EscapeRoomImage1 from "../../Assets/EscapeRoomImage1.jpg"
import ToyKingdomImage1 from "../../Assets/ToyKingdomImage1.jpg"
import ToyKingdomImage2 from "../../Assets/ToyKingdomImage2.jpg"
import ElderCareImage1 from "../../Assets/ElderCareImage1.jpg"
import SerebiiRedesignImage1 from "../../Assets/SerebiiRedesignImage1.png"

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
                            imageUrl={SerebiiRedesignImage1}
                            title="Serebii Redesign"
                            description="
                            As an enthusiastic Pokémon fan who has explored various Pokémon fan database sites, I embarked on a personal challenge 
                            to undertake the redesign of Serebii.net. With its creation dating back to 1999 and no significant updates since, my 
                            aim is to enhance Serebii's visual appeal and user experience as personal challenge for myself."
                            dialogImageUrl={SerebiiRedesignImage1}
                            languages="Adobe XD"
                        />
                    </FadeInSection>
                </TopMarginBox>
                <TopMarginBox>
                    <FadeInSection>
                        <PortfolioItemRight
                            imageUrl={ToyKingdomImage1}
                            title="Little Toy Kingdom"
                            description="
                            Little Toy Kingdom is an innovative concept design for a toy store seeking to make a transition into the online realm. 
                            Serving as a valuable practice task, this project enabled me to refine my skills in web design while focusing on implementing 
                            best practices for designing an engaging and user-friendly online store. By exploring the intricacies of creating an immersive 
                            digital shopping experience, Little Toy Kingdom showcases the importance of effective design principles and techniques within 
                            the context of an e-commerce platform."
                            dialogImageUrl={ToyKingdomImage2}
                            languages="Adobe XD"
                        />
                    </FadeInSection>
                </TopMarginBox>
                <TopMarginBox>
                    <FadeInSection>
                        <PortfolioItemLeft
                            imageUrl={ElderCareImage1}
                            title="ElderCare"
                            description="
                            ElderCare is a visionary mobile app concept designed to empower and support the elderly in exploring new hobbies. With 
                            a focus on enhancing accessibility, the app incorporates haptic features tailored to accommodate individuals with hearing 
                            or visual impairments. Moreover, ElderCare introduces an engaging quiz element, making the learning experience more enjoyable 
                            and interactive. This concept aims to foster personal growth and enrichment for older adults, providing them with a user-friendly 
                            tool to embrace new passions and skills."
                            dialogImageUrl={ElderCareImage1}
                            languages="Adobe XD"
                        />
                    </FadeInSection>
                </TopMarginBox>
                <TopMarginBox>
                    <FadeInSection>
                        <PortfolioItemRight
                            imageUrl={EscapeRoomImage1}
                            title="VR Escape Room"
                            description="I took on the challenge of creating a VR escape room as part of an assignment utilizing C# in Unity. This 
                            immersive experience served as a gateway to my introduction to C# programming and my first foray into game development, 
                            particularly within the captivating world of virtual reality. With an undying excitement, I fulfilled a childhood dream 
                            of crafting my very own game, igniting the creative spark within me and uncovering the boundless possibilities of game design."
                            dialogImageUrl={EscapeRoomImage1}
                            languages="C#, Unity 3D"
                        />
                    </FadeInSection>
                </TopMarginBox>
                {/*
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
    */}
                <Footer />
            </RootBox>
        </>
    );
}