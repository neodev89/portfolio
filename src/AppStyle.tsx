import { sx } from "./SxStyle/useProfiloSx"

const AppStyle = () => {
    return {
        stackCol: sx({
            alignItems: 'center',
            height: 'auto',
            width: '100%',
            border: '1px solid yellow',
            padding: '5px 0',
        }),
        stackRow: sx({
            flexDirection: 'row',
            justifyContent: 'space-between',
            height: 'auto',
            width: '98%',
            border: '2px dotted green',
        }),
        divBiancoUno: sx({
            display: 'flex',
            justifyContent: 'right',
            border: '1px solid white',
            height: '500px',
            width: '53%',
        }),
        divBiancoDue: sx({
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            border: '1px solid white',
            height: '500px',
            width: '44%',
        }),

    }
    
}

export default AppStyle