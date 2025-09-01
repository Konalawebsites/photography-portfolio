import React from "react"
import { styled } from "styled-components"
import { Box, Button, Layer, Text } from "grommet"
import { StyledBottomBar } from "../../styles/styles"
import { MailOption } from 'grommet-icons'
import ContactForm from './ContactForm.jsx'

const CustomText = styled(Text)`
  font-family: 'Unispace';
  font-size: 24px;
`;

const CustomText2 = styled(Text)`
  font-family: 'Unispace';
  font-size: 12px;
  height: 15px;
`;
const BottomBar = () => {
    const [open, setOpen] = React.useState(false);
    return (
        <StyledBottomBar>
            <Box direction="row" justify="between" width="100%">
                <Box align="center" justify="center" margin={{ left: "15px" }} direction="column" gap="1px">
                    <CustomText> my photos </CustomText>
                    <CustomText2 margin={{left: "55px"}}> Aleksi Tuominensss </CustomText2>
                </Box>

                <Box align="center" pad="small">
                    <Button onClick={() => setOpen(!open)} icon={<MailOption />} />
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