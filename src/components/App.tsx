import { useState } from 'react';
import SearchBar from './SearchBar/SearchBar';
import ImageGallery from './ImageGallery/ImageGallery';
import { fetchImages, Image } from '../api';
import Loader from './Loader/Loader';
import ErrorMessage from './ErrorMessage/ErrorMessage';
import LoadMoreBtn from './LoadMoreBtn/LoadMoreBtn';
import ImageModal from './ImageModal/ImageModal';

const App: React.FC = () => {
    const [images, setImages] = useState<Image[]>([]);
    const [query, setQuery] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);
    const [page, setPage] = useState<number>(0);
    const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
    const [selectedImage, setSelectedImage] = useState<Image | null>(null);

    const handleSearch = async(query: string) => {
        setPage(1);
        setQuery(query);
        try {
            setImages([]);
            setError(false);
            setLoading(true);
            const data = await fetchImages(query, 1);
            setImages(data);
        } catch (error) {
            setError(true);
        } finally {
            setLoading(false);
        }
    };

    const handleLoadMore = async () => {
        const nextPage = page + 1;
        setPage(nextPage);
        try {
        setLoading(true);
        const data = await fetchImages(query, nextPage);
        setImages((prevImages) => [...prevImages, ...data]);
        } catch (error) {
        setError(true);
        } finally {
        setLoading(false);
        }
    };
    
    const openModal = (image: Image) => {
        setModalIsOpen(true);
        setSelectedImage(image);        
    };
    const closeModal = () => {
        setModalIsOpen(false);
        setSelectedImage(null);
    };
    return (
        <div>
            <SearchBar onSubmit={handleSearch} />
            {images.length > 0 && (
                <ImageGallery images={images} onImageClick={openModal} />
            )}
            {loading && <Loader />}
            {error && (
                <ErrorMessage message="Something went wrong. Try to reload the page" />
            )}
            {images.length > 0 && !loading && (
                <LoadMoreBtn onClick={handleLoadMore} />
            )}
            <ImageModal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                image={selectedImage}
            />
        </div>
    );
};

export default App;