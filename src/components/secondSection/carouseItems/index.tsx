import React from 'react';
import styles from './styles.module.scss';
import Image from "next/image";

function CarouselItem1() {

    return(
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.abreAspasContainer}>
                    <Image
                        src="/assets/secondSection/abreAspas.png"
                        alt="Abre Aspas"
                        width={57}
                        height={43}
                        quality={100}
                    />
                </div>
            </div>
            <div className={styles.body}>
                <h2 className={styles.text}>
                    Meu nome é Eliana Nogueira, <br/>
                    sou tocantinense e conheço <br/>
                    bem nosso Estado. Natural de <br/>
                    Conceição do Araguaia, fui <br/>
                    criada em Pequizeiro e vivo <br/>
                    em Palmas desde 95.
                </h2>

            </div>
            <div className={styles.footer}>
                <div className={styles.fechaAspasContainer}>
                    <Image
                        src="/assets/secondSection/fechaAspas.png"
                        alt="fecha Aspas"
                        width={57}
                        height={43}
                        quality={100}
                    />
                </div>
            </div>
        </div>
    )
}

function CarouselItem2() {

    return(
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.abreAspasContainer}>
                    <Image
                        src="/assets/secondSection/abreAspas.png"
                        alt="Abre Aspas"
                        width={57}
                        height={43}
                        quality={100}
                    />
                </div>
            </div>
            <div className={styles.body}>
                <h2 className={styles.text}>
                    Vim para a capital ainda jovem,<br/>
                    à procura de emprego, sei o como <br/>
                    é difícil encontrar uma oportunidade <br/>
                    para começar a vida profissional.
                </h2>
            </div>
            <div className={styles.footer}>
                <div className={styles.fechaAspasContainer}>
                    <Image
                        src="/assets/secondSection/fechaAspas.png"
                        alt="fecha Aspas"
                        width={57}
                        height={43}
                        quality={100}
                    />
                </div>
            </div>
        </div>
    )
}

function CarouselItem3() {

    return(
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.abreAspasContainer}>
                    <Image
                        src="/assets/secondSection/abreAspas.png"
                        alt="Abre Aspas"
                        width={57}
                        height={43}
                        quality={100}
                    />
                </div>
            </div>
            <div className={styles.body}>
                <h2 className={styles.text}>
                    É por isso que defendo o primeiro emprego. <br/>
                    Os nossos jovens carecem de oportunidades <br/>
                    e quando encontram uma, esbarram na <br/>
                    exigência da experiência. Mas como pode <br/>
                    um jovem que nunca trabalhou <br/>
                    antes ter experiência?
                </h2>
            </div>
            <div className={styles.footer}>
                <div className={styles.fechaAspasContainer}>
                    <Image
                        src="/assets/secondSection/fechaAspas.png"
                        alt="fecha Aspas"
                        width={57}
                        height={43}
                        quality={100}
                    />
                </div>
            </div>
        </div>
    )
}

function CarouselItem4() {

    return(
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.abreAspasContainer}>
                    <Image
                        src="/assets/secondSection/abreAspas.png"
                        alt="Abre Aspas"
                        width={57}
                        height={43}
                        quality={100}
                    />
                </div>
            </div>
            <div className={styles.body}>
                <h2 className={styles.text}>
                    Quero investir na criação de projetos  <br/>
                    para implementação de cursos de  <br/>
                    capacitação voltados ao primeiro emprego.
                </h2>
            </div>
            <div className={styles.footer}>
                <div className={styles.fechaAspasContainer}>
                    <Image
                        src="/assets/secondSection/fechaAspas.png"
                        alt="fecha Aspas"
                        width={57}
                        height={43}
                        quality={100}
                    />
                </div>
            </div>
        </div>
    )
}
export {
    CarouselItem1,
    CarouselItem2,
    CarouselItem3,
    CarouselItem4
};