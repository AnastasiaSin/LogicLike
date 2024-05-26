import { useEffect, useState } from 'react';
import { getThemes } from '../../services/services';
import styles from './themes.module.scss';
import { useFilter } from '../../context/context';

export const Themes = () => {
    const { filter, setFilter } = useFilter();
    const [state, setState] = useState<{ themes: string[]; loading: boolean; error: string | null }>({
        themes: [],
        loading: true,
        error: null,
    });

    useEffect(() => {
        const fetchThemes = async () => {
            try {
                const data = await getThemes();
                setState({ themes: data, loading: false, error: null });
            } catch (err) {
                setState({ themes: [], loading: false, error: 'Error fetching themes' });
            }
        };

        fetchThemes();
    }, []);

    const { themes, loading, error } = state;

    if (loading) return <div className={styles.loading}>Loading...</div>;
    if (error) return <div className={styles.error}>{error}</div>;

    return (
        <div className={styles.container}>
            <ul className={styles.themesList}>
                <li
                    key='allThemes'
                    className={filter === 'Все темы' ? styles.selectedItem : styles.themesItem}
                >
                    <button className={styles.themesItem_btn} onClick={() => setFilter('Все темы')}>
                        Все темы
                    </button>
                </li>
                {themes.map((theme, index) => (
                    <li
                        key={index}
                        className={filter === theme ? styles.selectedItem : styles.themesItem}
                    >
                        <button className={styles.themesItem_btn} onClick={() => setFilter(theme)}>
                            {theme}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};
