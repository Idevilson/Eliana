import styles from './styles.module.scss';
import Image from 'next/image';
import Link from 'next/link';

export function Header() {

    return(
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <div className={styles.socialIconsContainer}>
                            <div className={styles.socialIcon}>
                                <Link href="https://www.instagram.com/liani_nogue45600">

                                    <a target="_blank">
                                        <Image
                                            src="/assets/header/instagram.png"
                                            alt="ícone do instagram"
                                            layout={"fill"}
                                        />
                                    </a>
                                </Link>
                            </div>

                            <div className={styles.socialIcon}>
                                <Link href="/">
                                    <a  target="_blank">
                                        <Image
                                            src="/assets/header/facebook.png"
                                            alt="ícone do facebook"
                                            layout={"fill"}
                                        />
                                    </a>
                                </Link>
                            </div>

                            <div className={styles.socialIcon}>
                                <Link href="/">
                                    <a  target="_blank">
                                        <Image
                                            src="/assets/header/whatsapp.png"
                                            alt="ícone do whatsapp"
                                            layout={"fill"}
                                        />
                                    </a>
                                </Link>
                            </div>

            </div>

                <div className={styles.navAndLogoContainer}>
                    <nav>
                            <Link className={styles.active} href="#sobre"><a> SOBRE MIM </a></Link>

                        <div
                            className={styles.divider}
                        />

                            <Link className={styles.active} href="#posicionamento"><a> POSICIONAMENTOS </a></Link>

                        <div
                            className={styles.divider}
                        />

                            <Link className={styles.active} href="#footer"><a> CONTATOS </a></Link>

                    </nav>

                    <div className={styles.imageContainer}>
                        <Image
                            src="/assets/header/LogoPSDB.svg"
                            alt="Logo do partido PSDB"
                            width={127}
                            height={29}
                        />
                    </div>
                </div>
            </div>
        </header>
    )
}