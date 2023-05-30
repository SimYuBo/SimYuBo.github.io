import { TopMarginBox, FadeInSection } from "../../Elements/GlobalElements.component";
import SerebiiRedesignImage2 from "../../../Assets/SerebiiRedesignImage2.png"
import SerebiiRedesignImage3 from "../../../Assets/SerebiiRedesignImage3.png"
import { InfoBox, ProjectContentBox, ProjectImageBox, ProjectLargeText, ProjectLink, ProjectMediumText, ProjectSmallDescription, ProjectSmallText, ProjectTitle } from "../../Elements/ProjectElements.component";

export default function Project1Content() {
    return (
        <>
            <TopMarginBox>
                <FadeInSection>
                    <ProjectTitle>
                        Serebii Redesign
                    </ProjectTitle>
                    <ProjectSmallDescription>
                        Website Redesign
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
                            Introducing a fresh and innovative website redesign concept for Serebii.net, the ultimate destination for Pokémon enthusiasts.
                            My redesign aims to enhance the user experience, provide a modern and visually appealing interface, and offer seamless navigation
                            through a wealth of Pokémon-related information.
                        </ProjectSmallText>
                    </ProjectContentBox>
                    <ProjectContentBox>
                        <ProjectMediumText>
                            Design
                        </ProjectMediumText>
                        <ProjectSmallText>
                            When contemplating the site redesign, my intention was to maintain a sense of familiarity in the color scheme. Thus, I decided to retain
                            the light green color while embracing a darker theme for the overall design. When determining how to redesign the news section with a more spacious feel, I took the approach of enclosing the news image within a
                            designated space, accompanied by a title, description, and a new category section.
                        </ProjectSmallText>
                    </ProjectContentBox>
                    <ProjectContentBox>
                        <ProjectSmallText>
                            This is the original site design.
                        </ProjectSmallText>
                        <ProjectImageBox>
                            <img src={SerebiiRedesignImage3} alt=""/>
                        </ProjectImageBox>
                    </ProjectContentBox>
                    <ProjectContentBox>
                        <ProjectSmallText>
                            This is my redesigned Serebii.net, which currently focuses solely on the homepage. However, I aspire to extend this redesign effort to encompass other pages in the future.
                        </ProjectSmallText>
                        <ProjectLink link='https://xd.adobe.com/view/a3090c50-d726-4bfe-97c6-829ef95bf05a-f65a/'>Click here to go to the project Live Link</ProjectLink>
                        <ProjectImageBox>
                            <img src={SerebiiRedesignImage2} alt=""/>
                        </ProjectImageBox>
                    </ProjectContentBox>
                </FadeInSection>
            </TopMarginBox>
        </>
    )
}