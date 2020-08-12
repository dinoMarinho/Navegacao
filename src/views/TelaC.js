import React from 'react'
import TextoCentral from '../components/TextoCentral'

export default props => {
    const route = props.route || { params: {nuemro: 0}}
    return (
        <TextoCentral corFundo='#9932cd'>
            Tela C - {route.params.numero}
        </TextoCentral>
    )
} 