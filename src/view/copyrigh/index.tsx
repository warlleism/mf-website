import './style.scss'
import React from 'react'

const Copyrigh = () => {
    return (
        <div
            className='copyrigh' >
            <div className="text-copyrigh" style={{ display: "flex" }}>
                Copyright © 2024 <div style={{ fontWeight: '800', marginLeft: 3 }}> MF Eldorado Granitos.</div> Todos os direitos reservados.
            </div>
            <div>
                Desenvolvido por Warllei Martins
            </div>
        </div>
    )
}

export default Copyrigh;