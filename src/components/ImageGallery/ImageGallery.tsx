import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css"
import { Image } from '../../api';

interface ImageGalleryProps {
    images: Image[];
    onImageClick: (image: Image) => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, onImageClick }) => {
    return (
        <ul className={s.gallery}>
            {images.map(image => (
                <li key={image.id}>
                    <ImageCard
                        image={image}
                        onImageClick={() => onImageClick(image)}
                    />
                </li>
            ))}
        </ul>
    )
}

export default ImageGallery;