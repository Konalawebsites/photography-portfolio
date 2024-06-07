import React from "react"
import { Box, Button, Collapsible, Text } from "grommet"
import { StyledBottomBar } from "../../styles/styles"
import { Up } from 'grommet-icons'

const BottomBar = () => {
    const [open, setOpen] = React.useState(false);
    return (
        <StyledBottomBar>
            
            <Box direction="row" justify="between" width="100%">
                <Box align="center" justify="center" margin={{left: "4px"}}>
                    <Text>Photography by Aleksi Tuominen</Text>
                </Box>
                
                <Box>
                        <Button default onClick={() => setOpen(!open)} label={<Up />} />
                        <Collapsible open={open} direction="vertical">
                            <Box 
                                background="light-2"
                                round="medium"
                                pad="medium"
                                align="center"
                                justify="center"
                                width="500px"
                            >
                                <Text>This is a box inside a Collapsible component</Text>
                            </Box>
                        </Collapsible>
                </Box>

            </Box>
        </StyledBottomBar>
    );
}

export default BottomBar