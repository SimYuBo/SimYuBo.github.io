import { MessageForm } from "../ContactPage/ContactElements.component";
import { LightHeader, LightText, RootBox, TopMarginBox } from "../Miscellaneous/GlobalElements.component";

export default function ContactLayout() {
    return (
        <>
            <RootBox>
                <TopMarginBox>
                    <LightHeader>
                        How would I reach you?
                    </LightHeader>
                    <LightText>
                        Are you interested in working with me? Drop me a message using the form below or via the following icons.
                    </LightText>
                </TopMarginBox>
                <MessageForm/>
            </RootBox>
        </>
    );
}