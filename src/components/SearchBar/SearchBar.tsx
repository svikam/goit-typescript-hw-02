import { useState } from 'react';
import s from './SearchBar.module.css';
import { Toaster, toast } from "react-hot-toast";

interface SearchBarProps {
    onSubmit: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSubmit }) => {
    const [query, setQuery] = useState<string>('');
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (query.trim() === '') {
            toast.error('Please enter a search query');
            return;
        }
        onSubmit(query);
        setQuery('');
    };
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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