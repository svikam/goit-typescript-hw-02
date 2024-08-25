import s from './LoadMoreBtn.module.css';

interface LoadMoreBtnProps {
    onClick: () => void;
}

const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ onClick }) => {
    return (
        <div className={s.loadMore}>
            <button onClick={onClick} className={s.btn}>Load more</button>
        </div>
    );
};

export default LoadMoreBtn;