import { useState } from 'react';
import s from './SearchBar.module.css';
import { Toaster, toast } from "react-hot-toast";

const SearchBar = ({ onSubmit }) => {
    const [query, setQuery] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        if (query.trim() === '') {
            toast.error('Please enter a search query');
            return;
        }
        onSubmit(query);
        setQuery('');
    };
    const handleChange = (e) => {
        setQuery(e.target.value);
    };
    return (
        <header className={s.header}>
            <div>
                <Toaster
                    position="top-right"
                />
            </div>
            <form className={s.form} onSubmit={handleSubmit}>
                <input className={s.search}
                    type="text"
                    // autocomplete="off"
                    // autofocus
                    placeholder="Search images and photos"
                    value={query}
                    onChange={handleChange}
                />
                <button type="submit" className={s.btn}>Search</button>
            </form>
        </header>
    );
};

export default SearchBar;