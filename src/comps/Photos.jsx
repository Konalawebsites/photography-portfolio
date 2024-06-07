import React from 'react';
import Photos1 from './Photos1.jsx'
import { CenteredContainer } from '../../styles/styles';
import '../index.css'

const Photos = ({ photos }) => {
    return (
        <CenteredContainer >
            <Photos1 photos={photos}> </Photos1>
        </CenteredContainer>
    )
}

export default Photos