import React from 'react';
import styles from './styles.module.scss';
import Image from 'next/image'
import ReactPlayer from 'react-player/youtube'

export function ThirdSection() {

    return(
        <>
            <div className={styles.container} id="posicionamento">
                <div className={styles.centerContainer}>
                    <div className={styles.headerContent}>
                        <h1>
                            posicionamentos
                        </h1>
                    </div>

                    <div className={styles.bodyVideoContainer}>
                        <ReactPlayer url='https://youtu.be/hFODHNE6Wsk' />
                    </div>

                    <div className={styles.footer}>
                            <div className={styles.card}>
                                <Image
                                    src="/assets/thirdSection/1.png"
                                    alt="Primeiro Ícone"
                                    width={94}
                                    height={94}
                                    quality={100}
                                />

                                <div className={styles.textBox}>
                                    <h2 className={styles.text}>
                                        Defendo o <br />
                                        primeiro emprego
                                    </h2>
                                </div>
                            </div>

                        <div className={styles.card}>
                            <Image
                                src="/assets/thirdSection/2.png"
                                alt="Segundo Ícone"
                                width={94}
                                height={94}
                                quality={100}
                            />

                            <div className={styles.textBox}>
                                <h2 className={styles.text}>
                                    Projetos que fomentem <br />
                                    a capacitação dos jovens
                                </h2>
                            </div>
                        </div>

                        <div className={styles.card}>
                            <Image
                                src="/assets/thirdSection/3.png"
                                alt="terceiro ícone"
                                width={94}
                                height={94}
                                quality={100}
                            />

                            <div className={styles.textBox}>
                                <h2 className={styles.text}>
                                    Defendo a liberdade religiosa, <br />
                                    a comunidade evangélica <br />
                                    e a família
                                </h2>
                            </div>
                        </div>

                        <div className={styles.card}>
                            <Image
                                src="/assets/thirdSection/4.png"
                                alt="quarto ícone"
                                width={94}
                                height={94}
                                quality={100}
                            />

                            <div className={styles.textBox}>
                                <h2 className={styles.text}>
                                    Buscarei ferramentas <br />
                                    para melhorar a vida do povo


                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.containerMobile} id="posicionamento">
                <div className={styles.centerContainerMobile}>
                    <div className={styles.headerContentMobile}>
                        <Image
                            src="/assets/thirdSection/posicionamentos.png"
                            alt="Posicionamentos"
                            width={531}
                            height={43}
                            quality={100}
                        />
                    </div>

                    <div className={styles.bodyVideoContainerMobile}>
                        <ReactPlayer
                            width={977}
                            height={550}
                            style={{
                                marginLeft: 100
                            }}
                            url='https://youtu.be/hFODHNE6Wsk'
                        />
                    </div>

                    <div className={styles.footerMobile}>
                        <div className={styles.cardMobile}>
                            <div className={styles.cardImageMobile}>
                                <Image
                                    src="/assets/thirdSection/1Mobile.png"
                                    alt="Primeiro ícone"
                                    width={230}
                                    height={230}
                                    objectFit='contain'
                                    quality={100}
                                />
                            </div>


                            <div className={styles.textBoxMobile}>
                                <h2 className={styles.textMobile}>
                                    Defendo o <br />
                                    primeiro emprego
                                </h2>
                            </div>
                        </div>

                        <div className={styles.cardMobile}>
                            <div className={styles.cardImageMobile}>
                                <Image
                                    src="/assets/thirdSection/2Mobile.png"
                                    alt="segundo icone"
                                    width={230}
                                    height={230}
                                    quality={100}
                                />
                            </div>
                            <div className={styles.textBoxMobile}>
                                <h2 className={styles.textMobile}>
                                    Projetos que fomentem <br />
                                    a capacitação dos jovens
                                </h2>
                            </div>
                        </div>

                        <div className={styles.cardMobile}>
                            <div className={styles.cardImageMobile}>
                                <Image
                                    src="/assets/thirdSection/3Mobile.png"
                                    alt="terceiro ícone"
                                    width={230}
                                    height={230}
                                    quality={100}
                                />
                            </div>
                            <div className={styles.textBoxMobile}>
                                <h2 className={styles.textMobile}>
                                    Defendo a liberdade religiosa, <br />
                                    a comunidade evangélica <br />
                                    e a família
                                </h2>
                            </div>
                        </div>

                        <div className={styles.cardMobile}>
                            <Image
                                src="/assets/thirdSection/4Mobile.png"
                                alt="terceiro ícone"
                                width={230}
                                height={230}
                                quality={100}
                            />

                            <div className={styles.textBoxMobile}>
                                <h2 className={styles.textMobile}>
                                    Buscarei ferramentas <br />
                                    para melhorar a vida do povo

                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}