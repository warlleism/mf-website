
import './style.scss'
import { useEffect } from 'react';

const Header = () => {

    function Drop() {
        const height = document.body.scrollHeight
        if (height >= 4457) {
            window.scrollTo(0, 970)
        } else {
            window.scrollTo(0, 700)
        }
    }

    function transformTitle() {
        const t1 = document.getElementById('txt1') as HTMLElement
        const txt1 = t1?.style
        const t2 = document.getElementById('txt2') as HTMLElement
        const txt2 = t2?.style
        const t3 = document.getElementById('txt3') as HTMLElement
        const txt3 = t3?.style

        setTimeout(() => {
            txt1.transform = 'translateX(0px)'
        }, 100)
        setTimeout(() => {
            txt2.transform = 'translateX(0px)'
        }, 900)
        setTimeout(() => {
            txt3.transform = 'translateX(0px)'
        }, 1500)
    }

    useEffect(() => {
        transformTitle()
    }, [])

    return (
        <div className='container-header' >
            <div className='white-card'>
                <div id='txt1' style={{ letterSpacing: -10 }}>M<span style={{ fontSize: '4rem', color: "#888a8b", marginLeft: 20 }}>.</span><strong style={{ fontWeight: 100, marginLeft: 30 }}>F</strong><span style={{ fontSize: '4rem', color: "#888a8b" }}>.</span></div>
                <div id='txt2'>Mármores</div>
                <div id='txt3'><strong style={{ fontWeight: 100 }}>&</strong> Granitos</div>
            </div>
            <div className='black-card'>
            </div>

            <div className='container-drop-arrow'>
                <span className="material-symbols-outlined" onClick={() => Drop()}>
                    arrow_downward
                </span>
            </div>
        </div>
    )
}

export default Header;