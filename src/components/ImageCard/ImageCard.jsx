import s from "./ImageCard.module.css";

const ImageCard = ({ image, onImageClick }) => {
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