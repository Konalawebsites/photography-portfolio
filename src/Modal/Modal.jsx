import { Box, Image, Stack } from 'grommet';

const images = document.querySelectorAll(".photos img");
const modal = document.querySelector(".modal");
const modalImg = document.querySelector(".modalImg");
const modalTxt = document.querySelector(".modalTxt")
const close = document.querySelector(".close")

const Modal = ({ imageUrl, setIsModalOpen }) => {
  return (
    <Box className='modal' onClick={() => setIsModalOpen(false)}>
      <Box className='modalContent' onClick={() => setIsModalOpen(false)}>
        <Stack className='close' top="0">
          <Image className='close-btn' src='src/photos/close.png' alt="Close button" />
          <Image src={imageUrl} className='modalImg' onClick={() => setIsModalOpen(false)} />
          <Text className='modalTxt'>Image description or text</Text>
        </Stack>
      </Box>
    </Box>
  );
};

export default Modal;
