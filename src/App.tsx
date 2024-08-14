import React from 'react';
import './index.sass';
import AppStyle from './AppStyle';
import PresentationStyle from './styles/presentationStyle';
import { Stack, Box, Typography } from '@mui/material'
import svgDream from './images/svgDream.svg'
import imgProva1 from './images/imgProva1.svg'
import CustomImage from './utils/Images';

function App() {
  const sx = AppStyle()
  const sxDream = PresentationStyle()
  return (
    <div className="App">
      <Stack spacing={1} sx={sx.stackCol}>
        <Stack spacing={0} sx={sx.stackRow}>
          <Box sx={sx.divBiancoUno}>
            <Box sx={sxDream.boxDream}>
              <Typography variant={'h3'} sx={sxDream.boxTitle}>
                Il sogno prende forma
              </Typography>
              <Box sx={sxDream.boxDescription}>
                <Typography sx={sxDream.styleImg}>
                  <CustomImage src={svgDream} alt='404' />
                </Typography>
                <Typography sx={sxDream.styleTypo}>
                  Il sogno di una vita "lavorare con la tecnologia" inizia a prendere
                  forma nell'ottobre del 2021 grazie alle pressioni di un mio amico
                  sviluppatore che m'instrada e mi incentiva nello studio dei linguaggi
                  di programmazione.
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box sx={sx.divBiancoDue}>
            <Typography sx={sxDream.styleImg}>
              <CustomImage src={imgProva1} alt='404' />
            </Typography>
          </Box>
        </Stack>
        <Stack spacing={0} sx={sx.stackRow}>
          <Box sx={sx.divBiancoDue}>
            <Box sx={sxDream.boxDream}>
              <Box sx={sxDream.boxTitle}>
                <Typography variant={'h3'} className="progetto">
                  I progetti:
                </Typography>
              </Box>
              <Box sx={sxDream.boxDescription}>
                <Typography sx={sxDream.styleImg}>
                  <CustomImage src={svgDream} alt='404' />
                </Typography>
                <Typography sx={sxDream.styleTypo}>
                  Il sogno di una vita "lavorare con la tecnologia" inizia a prendere
                  forma nell'ottobre del 2021 grazie alle pressioni di un mio amico
                  sviluppatore che m'instrada e mi incentiva nello studio dei linguaggi
                  di programmazione.
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box sx={sx.divBiancoUno}></Box>
        </Stack>
      </Stack>

    </div>
  );
}

export default App;
