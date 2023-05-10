import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const Footer = () => {

    const date = new Date()
    const year = date.getFullYear()

  return (
    <Container sx={{ p: 0, m: 0, display: "flex", alignItems: "center", flexDirection: "column", gap: .5 }}>
        <Typography sx={{fontSize: 14}}>
            Developed by Giulio Simone Floresta
        </Typography>
        <Box sx={{display: "flex" , gap: 1}}>
            <Typography sx={{fontSize: 14, color: "#61DBFB", fontWeight: 600}}>
                React
            </Typography>
            <Typography sx={{fontSize: 14, color: "#2D79C7", fontWeight: 600}}>
                Typescript
            </Typography>
            <Typography sx={{fontSize: 14, color: "#007FFF", fontWeight: 600}}>
                Material UI
            </Typography>
        </Box>
        <Typography sx={{fontSize: 12}}>
            {year + " ©"}
        </Typography>
    </Container>
  )
}

export default Footer
