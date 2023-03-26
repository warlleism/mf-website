import './style.scss'
import { Shirts_Male } from '../../data/data';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const Carousel = () => {

    const [width, setWidth] = useState(0)
    const carousel = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (carousel.current) {
            setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
        }
    }, [])

    function hiddenArrow() {
        const arrow = document.getElementById('Arrow') as HTMLElement;
        const style = arrow.style;
        style.opacity = '0';
    }

    return (
        <div className='container-carousel'>
            <div className='container-change-skin-gener'>
                <div>GRANITOS</div>
            </div>

            <div className='container-left-arrow' id='Arrow'>
                <span className="material-symbols-outlined">
                    chevron_left
                </span>
            </div>

            <motion.div
                ref={carousel}
                className='carousel'
                whileTap={{ cursor: "grabbing" }}
            >
                <motion.div
                    className='inner'
                    drag="x"
                    animate={{ x: 0 }}
                    initial={{ x: 100 }}
                    dragConstraints={{ right: 0, left: -width }}
                    onTouchStart={() => hiddenArrow()}
                >
                    {
                        Shirts_Male?.map((itens) => {
                            return (
                                <motion.div
                                    key={itens.id}
                                    className='item'
                                    id='item'
                                >
                                    <img src={itens?.img1?.img_1} alt="" />
                                    <div style={{ fontWeight: 600, letterSpacing: 3, textTransform: 'uppercase' }}>{itens.name}</div>
                                </motion.div>

                            )
                        })
                    }

                </motion.div>
            </motion.div>
        </div >
    )
}

export default Carousel;