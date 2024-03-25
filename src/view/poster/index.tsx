import './style.scss'
import { Intagram_content } from "../../data/instagram_data";
import Carousel_component from "../../components/carousel";

const Poster = ({ theme }: any) => {
    return (
        <>
            <div className='container-poster'>
                <div
                    className='container-text-buttom'>
                    <div>NOSSOS TRABALHOS</div>
                    <a
                        style={{
                            transition: ".5s",
                            background: !theme ? '#fff' : '#111',
                            color: !theme ? 'rgba(78, 51, 0, 0.87)' : '#fff',
                        }}
                        className='button' href='https://www.instagram.com/mf_granitos/' target='_blank'>Saiba Mais</a>
                </div>
            </div>
            <div className='container-instagram'
                style={{ transition: ".5s", background: !theme ? 'rgb(241, 239, 233)' : '#111' }}
            >
                <a
                    href='https://www.instagram.com/mf_granitos/'
                    target='_blank'
                    className='titulo-instagram'
                    style={{
                        transition: ".5s",
                        fontWeight: 300,
                        fontSize: '2rem',
                        textAlign: 'center',
                        color: !theme ? '#4e3300de' : '#fff',
                    }}>DIRETO DO <strong style={{ transition: ".5s", fontWeight: 400, color: !theme ? '#4e3300de' : 'rgb(94, 92, 92)', }}>INSTAGRAM</strong></a>
                <Carousel_component
                    prop={Intagram_content}
                    theme={theme} />
            </div>
        </>

    )
}

export default Poster;