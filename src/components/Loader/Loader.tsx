import { ThreeCircles } from 'react-loader-spinner';
import s from './Loader.module.css';

const Loader: React.FC = () => {
    return (
        <div className={s.loader}>
            <ThreeCircles
                height="100"
                width="100"
                color="grey"
                ariaLabel="three-circles-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            />
        </div>
    );
};
export default Loader;