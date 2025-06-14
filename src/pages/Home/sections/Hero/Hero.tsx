import { Grid, styled, Container, Typography, Button, Box } from '@mui/material';
import '@sakun/system.css';
import Avatar from '../../../../img/Avatar.png';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import EmailIcon from '@mui/icons-material/Email';
const Hero = () => {

    const StyledHero = styled("div")(() => ({
        height: "100vh",
    }))

    const StyledImg = styled("img")(() => ({
        width: "100%",
    }))

    return (
        <>
            <StyledHero>
                <Container >
                    <Grid container spacing={2}>
                        <Grid size={{ xs: 12, md: 4 }}>
                            <StyledImg src={Avatar} alt="Avatar" />
                        </Grid>
                        <Grid size={{ xs: 12, md: 8 }}>
                            <Typography variant="h1" color="primary" textAlign={"center"}>João Marcelo Carneiro</Typography>
                            <Typography variant="h2" color="primary" textAlign={"center"}>Desenvolvedor Front-End</Typography>

                            <Grid container>
                                <Grid>
                                    <Box>
                                        <Button ><FileDownloadIcon />Download CV</Button>
                                    </Box>
                                </Grid>
                                <Grid>
                                    <Box>
                                        <Button ><EmailIcon />Contact</Button>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </StyledHero>
        </>
    )
}

export default Hero
