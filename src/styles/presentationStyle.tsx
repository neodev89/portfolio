import { sx } from "../SxStyle/useProfiloSx";

const PresentationStyle = () => {
    return {
        boxDream: sx({
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            backgroundColor: 'white',
            height: '100%',
            width: '100%',
            border: '1px dashed grey',
        }),
        boxTitle: sx({
            position: 'relative',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            height: 'calc(calc(100% / 4) * 1)',
            width: '100%',
            border: '1px solid blue',
            textAlign: 'center',
            backgroundColor: 'yellow',
        }),
        boxDescription: sx({
            display: 'flex',
            justifyContent: 'right',
            height: 'calc(calc(100% / 4) * 3)',
            width: '95%',
            padding: 2,
            backgroundColor: 'transparent',

        }),
        styleImg: sx({
            display: 'flex',
            justifyContent: 'center',
            width: '40%',
            height: '70%',
            objectFit: 'contain',
            border: '1px dashed grey',
        }),
        styleTypo: sx({
            height: '100%',
            width: '60%',
            fontFamily: 'Montserrat',
            color: 'black',
            border: '1px dashed grey',
            textAlign: 'right',
            padding: 1,
        })
    }
}

export default PresentationStyle