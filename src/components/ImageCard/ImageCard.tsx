import s from "./ImageCard.module.css";
import { Image } from '../../api';

interface ImageCardProps {
    image: Image;
    onImageClick: (image: Image) => void;
}

const ImageCard: React.FC<ImageCardProps> = ({ image, onImageClick }) => {
    return (
        <div className={s.container}>
            <img className={s.card}
                src={image.urls.small}
                alt={image.alt_description}
                onClick={() => onImageClick(image)}
            />
        </div>
    );
};
export default ImageCard;