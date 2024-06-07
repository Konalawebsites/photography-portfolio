import React, { useState } from 'react';
import Modal from './components/Modal/Modal';
import { Image } from 'grommet';

// const photoDisplay = Object.keys(photos).map((photo) => {
//     return <img onClick={() => console.log("PERKELE")} key={photo} src={`${photos[photo].url}`} alt={`${photos[photo].image}`} />
// })

const Photos1 = ({photos}) => {
    console.log(photos)
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
            <Box className='photos' >
                {photoDisplay}
            </Box>
        </>
    )
}

export default Photos1;