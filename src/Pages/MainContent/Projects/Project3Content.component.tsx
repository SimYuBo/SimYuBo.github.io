import { Typography } from "@mui/material";
import { TopMarginBox, FadeInSection } from "../../Elements/GlobalElements.component";
import ElderCareImage1 from "../../../Assets/ElderCareImage1.jpg"
import { ProjectTitle, ProjectSmallDescription, InfoBox, ProjectLargeText, ProjectContentBox, ProjectMediumText, ProjectSmallText, ProjectImageBox, ProjectLink } from "../../Elements/ProjectElements.component";

export default function Project3Content() {
    return (
        <>
            <TopMarginBox>
                <FadeInSection>
                    <ProjectTitle>
                        ElderCare Mobile App
                    </ProjectTitle>
                    <ProjectSmallDescription>
                        Mobile App Concept Design
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
                            ElderCare is a mobile app concept designed to empower and uplift the elderly by opening doors to new hobbies and experiences. With a strong emphasis on
                            accessibility, ElderCare integrates innovative haptic features that cater to individuals with hearing or visual impairments. The app goes
                            beyond traditional learning methods by incorporating an interactive quiz element, making the journey of acquiring new skills and knowledge
                            engaging and enjoyable. ElderCare strives to foster personal growth and enrichment for older adults, offering a user-friendly tool to embrace
                            new passions and embark on a path of lifelong learning.
                        </ProjectSmallText>
                    </ProjectContentBox>
                    <ProjectContentBox>
                        <ProjectMediumText>
                            Design
                        </ProjectMediumText>
                        <ProjectSmallText>
                            ElderCare was meticulously designed with a deep understanding of the unique needs and challenges faced by the elderly. The app's interface was thoughtfully
                            crafted to ensure ease of use and intuitive navigation, catering to users of varying technological expertise. The color palette and typography were carefully
                            selected to provide optimal legibility and visual comfort, taking into consideration the potential visual impairments that some users may have.
                            <Typography
                                sx={{ mt: '1em' }}
                            >
                                To enhance accessibility, ElderCare incorporates haptic features that utilize vibration patterns and gentle feedback to provide a tactile experience.
                                This enables individuals with hearing impairments to engage with the app and receive information effectively. Additionally, the app supports adjustable font
                                sizes and contrast options, allowing users with visual impairments to customize their viewing experience according to their specific needs.
                            </Typography>
                            <Typography
                                sx={{ mt: '1em' }}
                            >
                                ElderCare's unique quiz element adds an interactive and gamified aspect to the learning process. Users can engage in quizzes tailored to their interests,
                                which not only test their knowledge but also provide an entertaining and rewarding experience. The app dynamically adjusts the difficulty level based on the
                                user's progress, ensuring a personalized and adaptive learning journey.
                            </Typography>
                        </ProjectSmallText>
                    </ProjectContentBox>
                    <ProjectContentBox>
                        <ProjectSmallText>
                            This is my redesigned Serebii.net, which currently focuses solely on the homepage. However, I aspire to extend this redesign effort to encompass other pages in the future.
                        </ProjectSmallText>
                        <ProjectLink link='https://xd.adobe.com/view/84dc3fda-9c77-4da0-9a26-bb6a9756a25f-d18f/'>Click here to go to the project Live Link</ProjectLink>
                        <ProjectImageBox>
                            <img src={ElderCareImage1} alt="" />
                        </ProjectImageBox>
                    </ProjectContentBox>
                </FadeInSection>
            </TopMarginBox>
        </>
    )
}