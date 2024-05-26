import { useEffect, useState, useMemo } from 'react';
import styles from './courses.module.scss';
import { IItems, getCards } from '../../services/services';
import { Card } from './CardComponent/Card';
import { useFilter } from '../../context/context';

export const Courses = () => {
  const { filter } = useFilter();
  const [state, setState] = useState<{
    cards: IItems[];
    loading: boolean;
    error: string | null;
  }>({
    cards: [],
    loading: true,
    error: null,
  });

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const data = await getCards();
        setState({ cards: data, loading: false, error: null });
      } catch (err) {
        setState({ cards: [], loading: false, error: 'Error fetching themes' });
      }
    };

    fetchCards();
  }, []);

  const filteredCards = useMemo(() => {
    return filter === 'Все темы' ? state.cards : state.cards.filter(card => card.tags?.includes(filter));
  }, [filter, state.cards]);

  if (state.loading) return <div className={styles.loading}>Loading...</div>;
  if (state.error) return <div className={styles.error}>{state.error}</div>;

  return (
    <div className={styles.container}>
      <ul className={styles.cardsList}>
        {filteredCards.map(item => (
          <Card key={item.id} name={item.name} image={item.image} id={item.id} bgColor={item.bgColor} />
        ))}
      </ul>
    </div>
  );
};
