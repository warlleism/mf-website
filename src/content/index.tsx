import { useState } from "react";
import Carousel from "../view/clothes_carousel";
import Contato from "../view/contato";
import Copyrigh from "../view/copyrigh";
import Header from "../view/header";
import Poster from "../view/poster";

const Main = () => {

    const [theme, setTheme] = useState(true)

    const handlerTheme = () => {
        setTheme(!theme)
    }


    return (
        <div className="global">
            <Header theme={theme} handlerTheme={handlerTheme} />
            <Carousel theme={theme} />
            <Poster theme={theme} />
            <Contato theme={theme} />
            <Copyrigh theme={theme} />
        </div>
    )
}

export default Main;

