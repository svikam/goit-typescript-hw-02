import Modal from "react-modal";
import s from './ImageModal.module.css';
Modal.setAppElement("#root");

const customStyles = {
    content: {
        padding: "0",
        background: "unset",
        overflow: "unset",
        border: "none",
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
    },
};
const ImageModal = ({ image, isOpen, onRequestClose }) => {
    if (!image) {
        return null;
    }
    return (
        <Modal
            style={customStyles}
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName={s.modalOverlay}
            contentLabel="Image Modal"
        >
            <img src={image.urls.regular} alt={image.alt_description} />
        </Modal>
    );
};

export default ImageModal;