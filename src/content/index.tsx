import Carousel from "../view/clothes_carousel";
import Contato from "../view/contato";
import Header from "../view/header";
import Poster from "../view/poster";

const Main = () => {
    return (
        <div className="global">
            <Header />
            <Carousel />
            <Poster />
            <Contato />
            <div
                className='copyrigh' >
                <div style={{ display: "flex" }}>
                    Copyright © 2024 <div style={{ fontWeight: '800', marginLeft: 3 }}> MF Eldorado Granitos.</div> Todos os direitos reservados.
                </div>
                <div>
                    Desenvolvido por Warllei Martins
                </div>
            </div>
        </div>
    )
}

export default Main;

