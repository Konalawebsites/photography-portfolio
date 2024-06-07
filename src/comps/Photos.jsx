import React from 'react';
import Photos1 from '../../../kotisivut-frontend/src/Photos1';
import { CenteredContainer } from '../../styles/styles';

const Photos = ({ photos }) => {
    return (
        <CenteredContainer >
            <Photos1 photos={photos}> </Photos1>
        </CenteredContainer>
    )
}

export default Photos