import { Box, Image, Stack, Text} from 'grommet';
import '../index.css'

const images = document.querySelectorAll(".photos img");
const modal = document.querySelector(".modal");
const modalImg = document.querySelector(".modalImg");
const modalTxt = document.querySelector(".modalTxt")
const close = document.querySelector(".close")

const Modal = ({ imageUrl, setIsModalOpen }) => {
  return (
    <Box className='modal' onClick={() => setIsModalOpen(false)}>
      <Box className='modalContent' onClick={() => setIsModalOpen(false)}>
          <Image className='close-btn' src='src/photos/close.png' alt="Close button" />
          <Image src={imageUrl} className='modalImg' onClick={() => setIsModalOpen(false)} />
          <Text className='modalTxt'>Image description or text</Text>
      </Box>
    </Box>
  );
};

export default Modal;
