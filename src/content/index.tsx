import Carousel from "../view/clothes_carousel";
import Contato from "../view/contato";
import Copyrigh from "../view/copyrigh";
import Header from "../view/header";
import Poster from "../view/poster";

const Main = () => {
    return (
        <div className="global">
            <Header />
            <Carousel />
            <Poster />
            <Contato />
            <Copyrigh />
        </div>
    )
}

export default Main;

