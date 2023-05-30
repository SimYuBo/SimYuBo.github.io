import { InfoBox, ProjectContentBox, ProjectImageBox, ProjectLargeText, ProjectLink, ProjectMediumText, ProjectSmallDescription, ProjectSmallText, ProjectTitle } from "../../Elements/ProjectElements.component";
import ToyKingdomImage1 from "../../../Assets/ToyKingdomImage1.jpg"
import { TopMarginBox, FadeInSection } from "../../Elements/GlobalElements.component";

export default function Project2Content() {
    return (
        <>

            <TopMarginBox>
                <FadeInSection>
                    <ProjectTitle>
                        Little Toy Kingdom
                    </ProjectTitle>
                    <ProjectSmallDescription>
                        Online Toy Store
                    </ProjectSmallDescription>
                    <InfoBox>
                        <ProjectLargeText>
                            Software: Adobe XD
                        </ProjectLargeText>
                        <ProjectLargeText>
                            Language: -
                        </ProjectLargeText>
                    </InfoBox>
                    <ProjectContentBox>
                        <ProjectMediumText>
                            Introduction
                        </ProjectMediumText>
                        <ProjectSmallText>
                        Little Toy Kingdom is a concept design to show how an toy store could look when transitioning to online. This project was also an introduction 
                        into UI/UX design, which helped me have a better understanding of how UI/UX design should be and how to improve upon it. 
                        The concept offers a seamless and immersive experience, designed to replicate the thrill of wandering through aisles 
                        filled with toys and discovering endless possibilities. With a thoughtfully curated collection of toys, games, and playtime treasures, 
                        I aim to provide a diverse range of options that inspire creativity, foster learning, and ignite the imaginations of children everywhere.
                        </ProjectSmallText>
                    </ProjectContentBox>
                    <ProjectContentBox>
                        <ProjectMediumText>
                            Design
                        </ProjectMediumText>
                        <ProjectSmallText>
                            During the designing of Little Toy Kingdom, I took reference from other popular online toy brands like Toys'R'Us and MyToyStore. Overall, I 
                            wanted the site to show the many possibilities of toys while also making it appealling and user friendly.
                        </ProjectSmallText>
                    </ProjectContentBox>
                    <ProjectContentBox>
                        <ProjectSmallText>
                            This is my design for Little Toy Kingdom, which currently only has 3 pages, but demonstrate how the shop page would look.
                        </ProjectSmallText>
                        <ProjectLink link='https://xd.adobe.com/view/79133936-97e0-4d30-b362-0b6e7b1a102c-2c40/'>Click here to go to the project Live Link</ProjectLink>
                        <ProjectImageBox>                            
                            <img src={ToyKingdomImage1} alt=""/>
                        </ProjectImageBox>
                    </ProjectContentBox>
                </FadeInSection>
            </TopMarginBox>
        </>
    )
}