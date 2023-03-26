import './style.scss'
import { Intagram_content } from "../../data/instagram_data";
import Carousel_component from "../../components/carousel";

const Poster = () => {
    return (
        <>
            <div className='container-poster'>
                <div className='container-text-buttom'>
                    <div>NOSSOS TRABALHOS</div>
                    <a className='button' href='https://www.instagram.com/mf_granitos/' target='_blank'>Saiba Mais</a>
                </div>
            </div>
            <div className='container-instagram'>
                <a href='https://www.instagram.com/mf_granitos/' target='_blank' className='titulo-instagram' style={{ fontWeight: 300, fontSize: '2rem', textAlign: 'center' }}>DIRETO DO <strong style={{ fontWeight: 400 }}>INSTAGRAM</strong></a>
                <Carousel_component data={Intagram_content} />
            </div>
        </>

    )
}

export default Poster;