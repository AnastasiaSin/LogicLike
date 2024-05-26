import { IItems } from '../../../services/services'
import styles from './card.module.scss'

export const Card = ({ id, image, name, bgColor }: IItems) => {
    return (
        <li key={id} className={styles.cardItem}>
            <div className={styles.blockImg} style={{ backgroundColor: bgColor }}>
                <img className={styles.cardImg} src={image} alt={name} />
            </div>
            <div className={styles.blockName}>
                <h2 className={styles.cardName}>{name}</h2>
            </div>
        </li>
    )
}