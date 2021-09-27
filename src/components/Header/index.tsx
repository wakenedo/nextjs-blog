import { ActiveLink } from '../ActiveLink';
import styles from './styles.module.scss';
import Image from 'next/image'



export function Header() {


    return (
        <header className={styles.container}>
            <div className={styles.content} >
                <Image src="/logo.svg" alt="DevNews" height='100' width='400' />
                <nav>
                    <ActiveLink href='/' activeClassName={styles.active}>
                    <a >Home</a>
                    </ActiveLink>
                    <ActiveLink href='/posts' activeClassName={styles.active}>
                    <a >Posts</a>
                    </ActiveLink>
                </nav>
            </div>
        </header>
    )
} 