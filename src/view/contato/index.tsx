import { useEffect, useRef } from 'react';
import "./style.scss"

const Contato = () => {

    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.play();
        }
    }, []);


    return (
        <div className="container-contato">
            <div className="title-contato">Contato</div>
            <div className="container-info-map">
                <div className="container-contato-child">
                    <div className="container-info-contato">
                        <div>
                            <div>Contato</div>
                            <div>(27) 99881-4012</div>
                        </div>
                        <div>
                            <div>Whatsapp</div>
                            <div>
                                <a style={{ color: "rgba(78, 51, 0, 0.555)" }} href="https://api.whatsapp.com/send?phone=5527998814012&text=Meu%20Whatsapp" target="_black">
                                    (27) 99881-4012
                                </a>
                            </div>
                        </div>
                        <div>
                            <div>E-mail</div>
                            <div>
                                <a style={{ color: "rgba(78, 51, 0, 0.555)" }} href="mailto:warllei.s.martins@hotmail.com">
                                    warllei.s.martins@hotmail.com
                                </a>

                            </div>
                        </div>
                        <div>
                            <div>Endereço </div>
                            <div>Estr. Ayrton Senna da Silva, 2072 - Barramares, Vila Velha - ES, 29124-386</div>
                        </div>
                    </div>
                    <div className='map'>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14955.157850379064!2d-40.3533999!3d-20.4327434!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb84141921ba70d%3A0xa95efa0ac9d2d9c0!2sEldorado%20M%C3%A1rmores%20%26%20Granitos!5e0!3m2!1spt-BR!2sbr!4v1679427275596!5m2!1spt-BR!2sbr"
                            height="100%"
                            style={{
                                border: "0",
                                width: "90%",
                                boxShadow: "rgba(0, 0, 0, 0.281) 2px 2px 2px"
                            }}
                            loading="lazy" ></iframe>
                    </div>
                </div>
                <div className="container-map">
                </div>
            </div>
        </div>
    )
}

export default Contato;