import React from "react"
import { Box, Button, Layer, Text } from "grommet"
import { StyledBottomBar } from "../../styles/styles"
import { Up } from 'grommet-icons'
import ContactForm from './ContactForm.jsx'

const BottomBar = () => {
    const [open, setOpen] = React.useState(false);
    return (
        <StyledBottomBar>

            <Box direction="row" justify="between" width="100%">
                <Box align="center" justify="center" margin={{ left: "4px" }}>
                    <Text>Photography by Aleksi Tuominen</Text>
                </Box>

                <Box align="center" pad="medium">
                    <Button onClick={() => setOpen(!open)} icon={<Up />} />
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