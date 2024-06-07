import React, { useState } from 'react';
import Modal from '../Modal/Modal';
import { Box, Grid, Image } from 'grommet';
import '../index.css'
import { CenterBox } from '../../styles/styles';

const Photos1 = ({photos}) => {
    console.log(photos)
    const columns = ['1fr', '1fr', '1fr'];
    const photoDisplay = Object.keys(photos).map((photo) => {
        return <Image onClick={() => {
            setImageUrl(photos[photo].url)
            setIsModalOpen(true)
        }
        } key={photo} src={`${photos[photo].url}`} alt={`${photos[photo].image}`} />
    })
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [imageUrl, setImageUrl] = useState("")
    console.log(isModalOpen)
    return (
        <>
            {isModalOpen && <Modal imageUrl={imageUrl} setIsModalOpen={setIsModalOpen}/>}
            <Box className='photos' width="auto">
                <Grid 
                columns={columns} gap="15px"> 
                
                {photoDisplay}
                </Grid>
            </Box>
        </>
    )
}

export default Photos1;