import { Section, Card, LeftSide, RightSide, ContentArea, CardButton } from "./styled";
import Slide from '@mui/material/Slide';

export default function Home(){
    return(
        <Section>
            <ContentArea>
                <LeftSide>
                    <h1>
                        Teacher Ana
                    </h1>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                </LeftSide>
                <RightSide>
                    <Slide direction="left" in={true} mountOnEnter unmountOnExit>
                        <Card>
                            <h1>Vem com a gente</h1>

                            <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </p>

                            <CardButton>
                                Criar Conta
                            </CardButton>
                        </Card>
                    </Slide>
                </RightSide>
            </ContentArea>
            <img src="backgroundHome.svg"/>
        </Section>
    );
}