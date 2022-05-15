import {NextComponentType, NextPageContext} from 'next';
import useEmblaCarousel from 'embla-carousel-react';
import {useCallback, useEffect, useState} from 'react';
import styles from '@styles/components/Carousel.module.scss';
import {IListItem} from '@interfaces/lists.interface';
import TrendingCard from '@components/trending-card';

const Carousel: NextComponentType<NextPageContext,
    any,
    { carouselTitle: string, slidesScrollSize?: number, hasScrollSnap?: boolean }>
    = ({children,carouselTitle, slidesScrollSize, hasScrollSnap}) => {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: false,
        align: 'start',
        startIndex: 0,
        dragFree: false,
        containScroll: 'trimSnaps',
        speed: 15,
        slidesToScroll: slidesScrollSize ? slidesScrollSize : 1
    });
    const [carouselState, setCarouselState] = useState({
        hasNext: false,
        hasPrev: false
    });
    const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
    const [selectedIndex, setSelectedIndex] = useState(0);

    useEffect(() => {
        if (emblaApi) {
            setTimeout(() => {
                emblaApi.reInit();
            }, 350);
        }
    }, [emblaApi, carouselState.hasPrev]);

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    const onSelect = useCallback(() => {
        if (emblaApi) {
            setCarouselState({
                hasNext: emblaApi.canScrollNext(),
                hasPrev: emblaApi.canScrollPrev()
            });
            if (hasScrollSnap) {
                setSelectedIndex(emblaApi.selectedScrollSnap());
            }
        }
    }, [emblaApi]);

    const scrollTo = useCallback(
        (index) => emblaApi && emblaApi.scrollTo(index),
        [emblaApi]
    );

    useEffect(() => {
        if (emblaApi) {
            emblaApi.on('select', onSelect);
            onSelect();
            if (hasScrollSnap) {
                setScrollSnaps(emblaApi.scrollSnapList());
            }
            return () => {
                if (emblaApi) {
                    emblaApi.off('select', onSelect);
                }
            };
        }
    }, [emblaApi, setScrollSnaps, onSelect]);

    return (
        <div className={styles.carouselWrapper}>
            <h1 className={styles.carouselTitle}>{carouselTitle}</h1>
            <div className={styles.carouselViewport} ref={emblaRef}>
                <div className={styles.carouselContainer}>
                    {children}
                </div>
            </div>
        </div>
    )
}
export default Carousel;
