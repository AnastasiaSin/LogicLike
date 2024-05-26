import { Courses } from '../CourseComponent/Courses'
import { Themes } from '../ThemeComponent/Themes'
import styles from './home.module.scss'

export const Home =()=> {
    return(
        <main>
            <div className={styles.container}>
                <Themes/>
                <Courses/>
            </div>
        </main>
    )
}