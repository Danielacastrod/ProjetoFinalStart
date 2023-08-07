import React from "react";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/js/bootstrap.bundle.min.js.map';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faPhone, faMobileScreenButton, faEnvelope, faLocationDot, faHandPointer, faChildren, faPaintbrush, faUsers, faHandshakeAngle } from '@fortawesome/free-solid-svg-icons'
import logoDeveloperKids from "./img/logo-developer-kids.ico"
import profile1 from "./img/profile1.jpeg"
import profile2 from "./img/profile2.jpeg"
import profile3 from "./img/IMG_20221228_172938_022.webp"
import profile4 from "./img/profile4.jpeg"
import profile5 from "./img/profile5.png"
import walp from "./img/Walp.png"
import jogando from "./img/jogando_scratch.png"
import crianca from "./img/criança_com_os_pais.png"
import plataforma from "./img/sobre-plataforma.jpg"
import jogo1 from "./img/jogo1.png"
import jogo2 from "./img/jogo3.png"
import jogo3 from "./img/jogo2.jpeg"
import curso1 from "./img/curso1.png"
import curso2 from "./img/curso2.png"
import curso3 from "./img/curso3.png"



export default function MainScreen() {

  const navigate = useNavigate();
  function cadastrar() {
    navigate("/cadastro");
  }
  function login() {
    navigate("/login");
  }

  const [visibleType, setVisibleType] = useState('todos');

  const handleFilterClick = (type) => {
    setVisibleType(type);
  };


  return (

    <div>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="shortcut icon" href="img/logo-developer-kids.ico" type="image/x-icon" />
      <title>Developer Kids</title>
      {/* Fonte */}
      <style dangerouslySetInnerHTML={{ __html: "\n    @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');\n  " }} />
      <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,700&display=swap" rel="stylesheet" />
      {/* Estilos */}
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossOrigin="anonymous" />
      <link rel="stylesheet" href="css/styles.css" />
      {/* Scripts (jQuery não pode ser o slim que vem do Boostrap) */}
      {/* Font Awesome */}
      {/* Progress Bar */}
      {/* Parallax */}
      <header>
        <div className="container" id="nav-container">
          {/* add essa class */}
          <nav className="navbar navbar-expand-lg fixed-top navbar-dark">
            <a className="navbar-brand" href="index.html">
              <img id="logo" src={logoDeveloperKids} alt="Developer Kids" />
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-links" aria-controls="navbar-links" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbar-links">
              <div className="navbar-nav">
                <a className="nav-item nav-link" id="home-menu" href="#">Home</a>
                <a className="nav-item nav-link" id="about-menu" href="#about-area">Sobre nós</a>
                <a className="nav-item nav-link" id="services-menu" href="#services-area">Serviços</a>
                <a className="nav-item nav-link" id="team-menu" href="#team-area">Time</a>
                <a className="nav-item nav-link" id="portfolio-menu" href="#portfolio-area">Projetos</a>
                <a className="nav-item nav-link" id="contact-menu" href="#contact-area">Contato</a>
              </div>
            </div>
          </nav>
        </div>
      </header>
      <main>
        <div className="carousel">
          {/* slider */}
          <div>
            <Carousel interval={4000} fade={true} pause={false} className="carousel-inner">
              <Carousel.Item className="carousel-item" >
                <img src={walp} className="d-block w-100" alt="Primeiro slide" />
                <Carousel.Caption className="carousel-caption">
                  <h2>Crie você mesmo seus jogos</h2>
                  <p>Jogos que facilitam a aprendizagem e melhoram o raciocínio lógico</p>
                  <a onClick={cadastrar} target="_blank" className="main-btn">Torne-se aluno</a>
                  <a onClick={login} className="main-btn ml-4">Área do aluno</a>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img src={jogando} className="d-block w-100" alt="Segundo slide" />
                <Carousel.Caption>
                  <h2>Você pode aprender se divertindo</h2>
                  <p>Melhore sua capacidade de solucionar problemas de uma forma descontraida.</p>
                  <a onClick={cadastrar} target="_blank" className="main-btn">Torne-se aluno</a>
                  <a onClick={login} className="main-btn ml-4">Área do aluno</a>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img src={crianca} className="d-block w-100" alt="terceiro slide" />
                <Carousel.Caption>
                  <h2>Linguagem de programação objetiva</h2>
                  <p>Conheça Python: A LP que tem uma redigibilidade como nenhuma outra.</p>
                  <a onClick={cadastrar} target="_blank" className="main-btn">Torne-se aluno</a>
                  <a onClick={login} className="main-btn ml-4">Área do aluno</a>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>

          {/* Sobre a empresa */}

          <div id="about-area">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <h3 className="main-title">Sobre a Developer Kids</h3>
                </div>
                <div className="col-md-6">
                  <img className="img-fluid" src={plataforma} alt="Developer Kids" />
                </div>
                <div className="col-md-6">
                  <h3 className="about-title">Uma plataforma que pensa no futuro</h3>
                  <p>Nossos projetos são adaptados ao público infanto-juvenil.</p>
                  <p>Após muitas pesquisas realizadas pela Developer Kids, adotamos um modelo de conteúdos interativos para chamar a atencão do nosso púbico alvo.</p>
                  <p>Todo nosso design é pensado de forma que cative de forma expontânea! Você pode aprender se divertindo.</p>
                  <p>Quais os benefícios?</p>
                  <ul id="about-list">
                    <li><FontAwesomeIcon icon={faCheck} className="me-1" /> Estímulo do raciocínio lógico e da criatividade</li>
                    <li><FontAwesomeIcon icon={faCheck} className="me-1" /> Ajuda na organização</li>
                    <li><FontAwesomeIcon icon={faCheck} className="me-1" /> Melhora o desempenho em matemática, inglês e física</li>
                    <li><FontAwesomeIcon icon={faCheck} className="me-1" /> Ajuda nas descobertas pessoais e profissionais</li>
                    <li><FontAwesomeIcon icon={faCheck} className="me-1" /> Capacidade de solucionar problemas</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* Serviços da empresa */}
          <div id="services-area">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <h3 className="main-title">O que garantimos?</h3>
                </div>
                <div className="col-md-4 service-box">
                  <i /><FontAwesomeIcon icon={faMobileScreenButton} className="me-1" />
                  <h4>Acessibilidade</h4>
                  <p>Acesse nossa plataforma de qualquer dispositivo, seja ele smartPhone, tablet ou computador .</p>
                </div>
                <div className="col-md-4 service-box">
                  <i /><FontAwesomeIcon icon={faChildren} />
                  <h4>Mentoria</h4>
                  <p>Proporcionamos um acompanhamento exclusivo para os usuários.</p>
                </div>
                <div className="col-md-4 service-box">
                  <i /><FontAwesomeIcon icon={faPaintbrush} />
                  <h4>Design Criativo</h4>
                  <p>Nossos designers são altamente capacitados para atrair cada vez mais o público infanto-juvenil.</p>
                </div>
                <div className="col-md-4 service-box">
                  <i /><FontAwesomeIcon icon={faUsers} />
                  <h4>Público aberto</h4>
                  <p>Com nosso serviço gratuito, disponibilizamos variados conteúdos visando o futuro da sociedade.</p>
                </div>
                <div className="col-md-4 service-box">
                  <i /><FontAwesomeIcon icon={faHandshakeAngle} />
                  <h4>Suporte 24/7</h4>
                  <p>Você sempre terá alguem da equipe disponível para suporte, em diferentes plataformas. (chat, email, skype).</p>
                </div>
                <div className="col-md-4 service-box">
                  <i /><FontAwesomeIcon icon={faHandPointer} />
                  <h4>Interatividade</h4>
                  <p>Garantimos um conteúdo de fácil acesso e entendimento simples para gerar uma aprendizagem participativa.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Time */}
          <div id="team-area">
            <div className="container">
              <div className="row d-flex justify-content-center w-100">
                <div className="col-12">
                  <h3 className="main-title">Nosso time</h3>
                </div>
                <div className="col">
                  <div className="card">
                    <img src={profile1} className="card-img-top avatar" alt="Imagem de Perfil 1" />
                    <div className="card-body">
                      <h5 className="card-title">Daniela Castro</h5>
                      <p className="card-text">Front-end Developer</p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card">
                    <img src={profile2} className="card-img-top avatar" alt="Imagem de Perfil 2" />
                    <div className="card-body">
                      <h5 className="card-title">Daniel Caldeira</h5>
                      <p className="card-text">Front-end Developer</p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card">
                    <img src={profile3} className="card-img-top avatar" alt="Imagem de Perfil 3" />
                    <div className="card-body">
                      <h5 className="card-title">Débora Moura</h5>
                      <p className="card-text">Front-end Developer</p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card">
                    <img src={profile4} className="card-img-top avatar" alt="Imagem de Perfil 4" />
                    <div className="card-body">
                      <h5 className="card-title">Dinaide Barbosa</h5>
                      <p className="card-text">Front-end Developer</p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card">
                    <img src={profile5} className="card-img-top avatar" alt="Imagem de Perfil 4" />
                    <div className="card-body">
                      <h5 className="card-title">Éverson Vieira</h5>
                      <p className="card-text">Front-end Developer</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Portfólio */}
          <div className="col-12">
            <h3 className="main-title">Sobre a Developer Kids</h3>
          </div>
          <div id="portfolio-area">
            <div className="col-md-12" id="filter-btn-box">
              <button
                className={`main-btn filter-btn ${visibleType === 'todos' ? 'active' : ''}`}
                onClick={() => handleFilterClick('todos')}
              >
                Geral
              </button>
              <button
                className={`main-btn filter-btn ${visibleType === 'jogos' ? 'active' : ''}`}
                onClick={() => handleFilterClick('jogos')}
              >
                Jogos
              </button>
              <button
                className={`main-btn filter-btn ${visibleType === 'cursos' ? 'active' : ''}`}
                onClick={() => handleFilterClick('cursos')}
              >
                Cursos
              </button>
            </div>
            <div id="portfolio-area" className="row portif-cont">
              <div className="col-md-4 project-box jogos" style={{ display: (visibleType === 'jogos' || visibleType === 'todos') ? 'block' : 'none' }}>
                <img src={jogo1} className="img-fluid low-img" alt="Projeto 1" />
              </div>
              <div className="col-md-4 project-box jogos" style={{ display: (visibleType === 'jogos' || visibleType === 'todos') ? 'block' : 'none' }}>
                <img src={jogo2} className="img-fluid low-img" alt="Projeto 2" />
              </div>
              <div className="col-md-4 project-box jogos" style={{ display: (visibleType === 'jogos' || visibleType === 'todos') ? 'block' : 'none' }}>
                <img src={jogo3} className="img-fluid low-img" alt="Projeto 3" />
              </div>
              <div className="col-md-4 project-box cursos" style={{ display: (visibleType === 'cursos' || visibleType === 'todos') ? 'block' : 'none' }}>
                <img src={curso1} className="img-fluid low-img" alt="Projeto 4" />
              </div>
              <div className="col-md-4 project-box cursos" style={{ display: (visibleType === 'cursos' || visibleType === 'todos') ? 'block' : 'none' }}>
                <img src={curso2} className="img-fluid low-img" alt="Projeto 5" />
              </div>
              <div className="col-md-4 project-box cursos" style={{ display: (visibleType === 'cursos' || visibleType === 'todos') ? 'block' : 'none' }}>
                <img src={curso3} className="img-fluid low-img" alt="Projeto 6" />
              </div>
            </div>

          </div>
          {/* Newsletter */}
          <div id="news-area">
            <div className="container">
              <div className="col-md-12">
                <h3 className="main-title">Fique por dentro das novidades</h3>
              </div>
              <p>Assine nossa lista de e-mails, e receba novos conteúdos sempre que a plataforma for atualizada</p>
              <form action>
                <input type="text" className="form-control" id="email-input" name="email" placeholder="Seu melhor e-mail" />
                <input type="submit" id="news-btn" defaultValue="Inscrever" />
              </form>
            </div>
          </div>
        </div>
      </main>
      {/* Rodapé */}
      <footer>
        <div id="contact-area">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h3 className="main-title">Entre em contato conosco</h3>
              </div>
              <div className="col-md-4 contact-box">
                <i /><FontAwesomeIcon icon={faPhone} className="me-2" />
                <p><span className="contact-tile">Ligue para:</span> (48)99999-9999</p>
                <p><span className="contact-tile">Horários:</span> 8:00 - 19:00</p>
              </div>
              <div className="col-md-4 contact-box"><FontAwesomeIcon icon={faEnvelope} />
                <i className="fas fa-envelope" />
                <p><span className="contact-tile">Envie um email:</span> contato@DeveloperKids.com.br</p>
              </div>
              <div className="col-md-4 contact-box">
                <i className="fas fa-map-marker-alt" /><FontAwesomeIcon icon={faLocationDot} />
                <p><span className="contact-tile">Venha tomar um café:</span> Rua Lorem Ipsum - 1314</p>
              </div>
              <div className="col-md-6" id="msg-box">
                <p>Ou nos deixe uma mensagem:</p>
              </div>
              <div className="col-md-6" id="contact-form">
                <form action>
                  <input type="text" className="form-control" placeholder="E-mail" name="email" />
                  <input type="text" className="form-control" placeholder="Assunto" name="subject" />
                  <textarea className="form-control" rows={3} placeholder="Sua mensagem..." name="message" defaultValue={""} />
                  <input type="submit" className="main-btn" />
                </form>
              </div>
            </div>
          </div>
        </div>
        <div id="copy-area">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <p>Desenvolvido pela <a href="https://www.DeveloperKids.com.br" target="_blank">DeveloperKids</a> © 2023</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* Scripts do projeto */}
    </div>

  );
}