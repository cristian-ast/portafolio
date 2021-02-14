import Head from 'next/head';
import Container from '../components/Container';
import cristian from '../img/cristian.jpg';
import Button from '@material-ui/core/Button';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';

export default function Home() {
  return (
    <Container>
      <div>
        <Head>
          <title>Cristian Castro Astacio</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className="cabecera">
          <h3 className="cabecera-texto">
            Cristian Castro Astacio
          </h3>
          <div className="cabecera-opciones">
              <Button 
                startIcon={<GitHubIcon />}
              />
              <Button 
                startIcon={<InstagramIcon />}
              />
          </div>
        </div>

        <div className="informacion-sobre-mi">
          <img src={cristian} className="mi-foto" alt="Foto de Cristian" />
        </div>

        

        <footer>
          
        </footer>
      </div>
    </Container>
  )
  
}
