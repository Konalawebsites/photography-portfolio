import React from "react"
import { styled } from "styled-components"
import { Box, Button, Layer, Text } from "grommet"
import { StyledBottomBar } from "../../styles/styles"
import { Chat } from 'grommet-icons'
import ContactForm from './ContactForm.jsx'

const CustomText = styled(Text)`
  font-family: 'Weird';
  font-size: 24px;
  font-weight: bold;
`;

const BottomBar = () => {
    const [open, setOpen] = React.useState(false);
    return (
        <StyledBottomBar>

            <Box direction="row" justify="between" width="100%">
                <Box align="center" justify="center" margin={{ left: "4px" }}>
                    <CustomText > Photography by Aleksi Tuominen</CustomText>
                </Box>

                <Box align="center" pad="small">
                    <Button onClick={() => setOpen(!open)} icon={<Chat />} />
                    {open && (
                        <Layer
                            position="top"
                            modal={false}
                            margin={{ vertical: 'medium', horizontal: 'small' }}
                            onEsc={() => setOpen(false)}
                            responsive={false}
                            plain
                        >
                            <Box
                                pad="medium"
                                background="light-3"
                                round="small"
                                elevation="small"
                                style={{ position: 'relative', top: '-100%' }}
                            >
                                <ContactForm />
                            </Box>
                        </Layer>
                    )}
                </Box>

            </Box>
        </StyledBottomBar>
    );
}

export default BottomBar