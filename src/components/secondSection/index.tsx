import React from 'react';
import styles from './styles.module.scss';
import Image from 'next/image'
import Carousel from "nuka-carousel";

import {
    CarouselItem1,
    CarouselItem2,
    CarouselItem3,
    CarouselItem4
} from "./carouseItems";

export function SecondSection() {

    // @ts-ignore
    return(
        <>
            <div className={styles.container} id="sobre">
                <div className={styles.leftContainer}>
                    <Image
                        src="/assets/secondSection/left.png"
                        alt="efeito"
                        width={350}
                        height={516}
                        quality={100}
                    />
                </div>

                <div className={styles.centerContainer}>
                    <div className={styles.headerContent}>
                        <Image
                            src="/assets/secondSection/sobreMim.png"
                            alt="efeito"
                            width={332}
                            height={43}
                            quality={100}
                        />
                        <Image
                            src="/assets/secondSection/Text.png"
                            alt="efeito"
                            width={521}
                            height={35}
                            quality={100}
                        />
                    </div>

                    <div className={styles.bodyContent}>
                        <div className={styles.leftSectionBodyContent}>
                            <div className={styles.imageContainer}>
                                <Image
                                    src="/assets/secondSection/foto.png"
                                    alt="Foto do Eliana"
                                    width={359}
                                    height={467}
                                    quality={100}
                                />
                            </div>
                        </div>
                        <div className={styles.rightSectionBodyContent}>
                            <Carousel
                                style={{
                                    alignItems: "center",
                                    width: 500,
                                    marginBottom: 70
                                }}

                                autoplay={true}

                                defaultControlsConfig={{
                                    pagingDotsStyle: {
                                        fill: '#ef8e1a',
                                        width: 20,
                                        marginBottom: 13,

                                    },
                                    nextButtonStyle: {
                                        marginTop: 450,
                                        marginRight: 130,
                                        background: "none",
                                        fontSize: 60
                                    },
                                    prevButtonStyle: {
                                        marginTop: 450,
                                        marginLeft: 130,
                                        background: "none",
                                        fontSize: 60
                                    },
                                    prevButtonText: "<",
                                    nextButtonText: ">"
                                }}
                            >
                                <CarouselItem1 />
                                <CarouselItem2 />
                                <CarouselItem3 />
                                <CarouselItem4 />
                            </Carousel>

                        </div>
                    </div>

                </div>
                <div className={styles.rightContainer}>
                    <Image
                        src="/assets/secondSection/right.png"
                        alt="efeito"
                        width={350}
                        height={516}
                        quality={100}
                    />
                </div>
            </div>

            <div className={styles.containerMobile}>
                <div className={styles.headerContentMobile}>
                    <h1>
                        SOBRE MIM
                    </h1>
                    <h1>
                        Sou a sua renovação e a mudança!
                    </h1>
                </div>
                <div className={styles.carousel}>
                    <Carousel
                        style={{
                            alignItems: "center",
                            width: 1000,
                            height: 500,
                            marginBottom: 70,
                            marginLeft: 40
                        }}

                        autoplay={true}

                        defaultControlsConfig={{
                            pagingDotsStyle: {
                                fill: "#316631",
                                width: 20,
                                marginRight: 5,
                            },
                            nextButtonStyle: {
                                marginTop: 550,
                                marginRight: 250,
                                background: "none",
                                fontSize: 150
                            },
                            prevButtonStyle: {
                                marginTop: 550,
                                marginLeft: 250,
                                background: "none",
                                fontSize: 150
                            },
                            prevButtonText: "<",
                            nextButtonText: ">",
                        }}
                    >
                        <CarouselItem1 />
                        <CarouselItem2 />
                        <CarouselItem3 />
                    </Carousel>

                </div>
                    <div className={styles.footerMobile}>
                        <div className={styles.leftContainerMobile}>
                            <Image
                                src="/assets/secondSection/left.png"
                                alt="efeito"
                                width={250}
                                height={516}
                                quality={100}
                            />
                        </div>
                            <div className={styles.imageContainerMobile}>
                                <Image
                                    src="/assets/secondSection/fotoMobile.png"
                                    alt="Foto da candidata"
                                    layout={"fill"}
                                    quality={100}
                                />
                            </div>
                        <div className={styles.rightContainerMobile}>
                            <Image
                                src="/assets/secondSection/right.png"
                                alt="efeito"
                                width={250}
                                height={516}
                                quality={100}
                            />
                        </div>
                    </div>
                </div>
        </>
    )
}