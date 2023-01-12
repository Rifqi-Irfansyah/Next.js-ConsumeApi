import Link from "next/link"
import styles from "./header.module.css";

interface LayoutProps{
    pageTitle: string;
}

export default function Header(props: LayoutProps){
    const{pageTitle} = props;
    return(
        <header className={styles.container}>
            <h3 className={styles.title_page}>{pageTitle}</h3>
            <ul className={styles.list}>
                <li className={styles.item}><Link className={styles.link} href="/data-siswa/vacation">Vacation</Link></li>
                <li className={styles.item}><Link className={styles.link} href="/data-siswa/cars">Cars</Link></li>
                <li className={styles.item}><Link className={styles.link} href="/data-siswa/blog">Blog</Link></li>
            </ul>
        </header>
    )
}