import React from "react"
import { styled } from "styled-components"
import { Box, Button, Layer, Text } from "grommet"
import { StyledBottomBar } from "../../styles/styles"
import { Emoji } from 'grommet-icons'
import ContactForm from './ContactForm.jsx'

const CustomText = styled(Text)`
  font-family: 'Unispace';
  font-size: 24px;
  font-weight: bold;
`;

const BottomBar = () => {
    const [open, setOpen] = React.useState(false);
    return (
        <StyledBottomBar>
            <Box direction="row" justify="between" width="100%">
                <Box align="center" justify="center" margin={{ left: "15px" }}>
                    <CustomText> my photos </CustomText>
                </Box>

                <Box align="center" pad="small">
                    <Button onClick={() => setOpen(!open)} icon={<Emoji />} />
                    {open && (
                        <Layer
                        style={{ position: 'relative', top: '30%', width: "50%" }}
                            modal={false}
                            margin={{ vertical: 'medium', horizontal: 'small' }}
                            onEsc={() => setOpen(false)}
                            responsive={false}
                            plain
                        >
                            <Box
                                pad="medium"
                                background="#333"
                                round="small"
                                elevation="small"
                                style={{ position: 'relative', top: '50%' }}
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