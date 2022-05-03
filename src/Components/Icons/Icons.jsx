import React from 'react';

const Icons = ({Icon, color, size}) => { //color y size son PARÁMETROS por eso van en minúscula pero Icon es un COMPONENTE

    return (
        <div>
            {<Icon style={{color: color, fontSize: size}}/>}
        </div>
    )
}

export default Icons
