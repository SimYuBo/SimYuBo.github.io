import { Typography } from "@mui/material";
import { TopMarginBox, FadeInSection } from "../../Elements/GlobalElements.component";
import EscapeRoomImage1 from "../../../Assets/EscapeRoomImage1.jpg"
import { InfoBox, ProjectContentBox, ProjectImageBox, ProjectLargeText, ProjectLink, ProjectMediumText, ProjectSmallDescription, ProjectSmallText, ProjectTitle } from "../../Elements/ProjectElements.component";

export default function Project4Content() {
    return (
        <>
            <TopMarginBox>
                <FadeInSection>
                    <ProjectTitle>
                        Escape The Bank!
                    </ProjectTitle>
                    <ProjectSmallDescription>
                        VR Escape Room
                    </ProjectSmallDescription>
                    <InfoBox>
                        <ProjectLargeText>
                            Software: Unity Hub, Unity 3D
                        </ProjectLargeText>
                        <ProjectLargeText>
                            Language: C#
                        </ProjectLargeText>
                    </InfoBox>
                    <ProjectContentBox>
                        <ProjectMediumText>
                            Introduction
                        </ProjectMediumText>
                        <ProjectSmallText>
                            This VR Escape Room was brought to life as part of an assignment, where I embraced the challenge of utilising C# programming in Unity to craft a unique and
                            engaging game.
                            <Typography
                                sx={{ mt: '1em' }}
                            >
                                The creation of this VR escape room not only introduced me to the world of C# programming but also marked my first step into the fascinating
                                realm of game development. With every line of code and meticulously designed puzzle, I delved deeper into the intricacies of game design,
                                unlocking the boundless potential that virtual reality offers.
                            </Typography>
                            <Typography
                                sx={{ mt: '1em' }}
                            >
                                As the childhood dream of creating my very own game became a reality, an undying excitement and passion were ignited within me. The process of
                                crafting this immersive experience allowed me to channel my creativity, pushing the boundaries of what I thought was possible. Through this project,
                                I discovered the power of immersive storytelling, interactive gameplay, and the importance of user experience.
                            </Typography>
                            <Typography
                                sx={{ mt: '1em' }}
                            >
                                The VR escape room served as a gateway, not only to the world of C# programming but also to a world of endless possibilities. It awakened my curiosity,
                                sparking a desire to explore further and delve deeper into the realms of game development and virtual reality.
                            </Typography>
                        </ProjectSmallText>
                    </ProjectContentBox>
                    <ProjectContentBox>
                        <ProjectMediumText>
                            Design
                        </ProjectMediumText>
                        <ProjectSmallText>
                            <Typography
                                sx={{ mt: '1em' }}
                            >
                                The design of the VR escape room, centered around the thrilling concept of being trapped in a bank vault, aimed to deliver an intense and immersive 
                                experience for players. Careful attention was given to every detail, ensuring that the setting, puzzles, and atmosphere aligned perfectly with the 
                                theme. The virtual bank vault environment was meticulously crafted to replicate the atmosphere of a secure and high-stakes location. I 
                                focused on recreating the intricate details of a realistic bank vault, including the metal doors, security systems, and hidden compartments. Visual 
                                elements such as lighting, textures, and shadows were utilized to create an authentic and immersive ambiance.
                            </Typography>
                            
                        </ProjectSmallText>
                    </ProjectContentBox>
                    <ProjectContentBox>
                        <ProjectMediumText>
                            Development
                        </ProjectMediumText>
                        <ProjectSmallText>
                        <Typography
                                sx={{ mt: '1em' }}
                            >
                                The development process began with brainstorming and designing the overall theme of the escape room. The objective was to create an intriguing
                                narrative that would immerse players in a world full of mystery and puzzles. Various elements like the setting, ambiance, and characters were thoughtfully
                                crafted to enhance the overall immersion.
                            </Typography>
                            <Typography
                                sx={{ mt: '1em' }}
                            >
                                Next, the virtual environment was meticulously designed to bring the escape room to life. Attention was given to the placement of objects, lighting, textures,
                                and sound effects to create a realistic and visually appealing atmosphere. The goal was to make players feel fully present within the virtual world, allowing
                                them to explore and interact with their surroundings.
                            </Typography>
                            <Typography
                                sx={{ mt: '1em' }}
                            >
                                Puzzles and challenges formed the core of the VR escape room experience. Each puzzle was thoughtfully crafted to provide a balance of difficulty and
                                satisfaction upon completion. The design incorporated a mix of logic, observation, and creative thinking to engage players and keep them motivated throughout
                                their journey. Clues and hints were strategically placed to guide players along the way without giving away the solutions too easily.
                            </Typography>
                            <Typography
                                sx={{ mt: '1em' }}
                            >
                                To enhance the immersion, interactive elements were incorporated. Players could physically interact with objects, manipulate their surroundings, and use various
                                tools to progress through the escape room. This tactile engagement added an extra layer of realism and made the experience more engaging and dynamic.
                            </Typography>
                            <Typography
                                sx={{ mt: '1em' }}
                            >
                                User experience was a key consideration throughout the design process. The interface and controls were intuitively designed to be easy to grasp, allowing players
                                to navigate and interact effortlessly within the virtual environment. Feedback mechanisms, such as visual and auditory cues, were implemented to provide guidance
                                and enhance the overall gameplay experience.
                            </Typography>
                        </ProjectSmallText>
                    </ProjectContentBox>
                    <ProjectContentBox>
                        <ProjectSmallText>
                            Sadly, all these considerations could not be put fully into effect. My escape room is the result of my learning of Immersive Technology, perhaps one day I may 
                            remake this into something I would be proud of.
                        </ProjectSmallText>
                        <ProjectImageBox>
                            <img src={EscapeRoomImage1} alt="" />
                        </ProjectImageBox>
                    </ProjectContentBox>
                </FadeInSection>
            </TopMarginBox>
        </>
    )
}