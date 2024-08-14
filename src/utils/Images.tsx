import { Box, SxProps } from "@mui/material";

type PropsImage = {
    src: string
    alt?: string
    sx?: SxProps
}

const CustomImage = ({ src, alt, sx }: PropsImage) => {
    return (
        <Box sx={sx}>
            <img src={src} alt={alt} />
        </Box>
    )
}

export default CustomImage