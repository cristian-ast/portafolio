import Head from 'next/head';
import Container from '../components/Container';
import cristian from '../img/cristian.jpg';
import Button from '@material-ui/core/Button';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';

export default function Home() {
  return (
    <Container>
      <div className="cuerpo-pagina">
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
          <div className="informacion-sobre-mi-texto">
            <p>I'm a 20-year-old student at UASD University currently studying Computer Science. I really like programming.</p>
            <h3>My Skills</h3>
            <p>Through my studies, I've gained a solid understanding of computer science and web development concepts, and have dedicated a lot of my free time to apply these concepts to real-world scenarios and applications.</p>
          </div>
        </div>

        <footer>
          
        </footer>
      </div>
    </Container>
  )
  
}
