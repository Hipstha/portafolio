import React, { Component } from 'react';

import TitlePage from '../../components/TitlePage/TitlePage';

import './History.scss';

// classes
import TitleNames from '../../../Classes/titleNames';

class History extends Component {
  title = new TitleNames();
  
  render() {
    this.title.setTitleName('Mi historia');
    return (
      <div className="history-page animate__animated animate__fadeIn">
        <TitlePage titlePage={ this.title.getTitleName() } />

        <div className="card card-black">
          <div className="card-header text-center">
            <h2>
              Mi historia como desarrollador
            </h2>
          </div>
          <div className="card-body">
            <div className="my-story">

              <p>
                Hola, mi nombre es <strong>Daniel Alejandro Cruz Pérez</strong>, tengo <strong>23 años de edad</strong> y a pesar de mi corta edad, cuento con 
                <strong> 3 años de experiencia profesional</strong> trabajando dentro de empresas y <strong>11 años programando </strong> por diversión. En esta sección quiero contar la historia de como llegue a convertirme 
                en un apasionado por la tecnología. Y bueno... Esta es mi historia:
              </p>

              <p>
                Todo comienza en el año <strong>2000</strong> cuando mis padres le regalaron a mi hermano la <strong>"Play Station 1"</strong>  por sus buenas calificaciones en la escuela,
                yo tendría unos 3 años, y hasta entonces, yo jamás había visto una consola de videojuegos. En el momento que la contectaron a la TV para probarla,
                quedé impactado, a mi me gustaba mucho ver a los personajes de las carícaturas pero jamás había imaginado que con un control, yo podía manejar
                a los personajes dentro de la tv. Desde aquí comenzó mi curiosidad en cómo ocurrían las cosas.
              </p>

              <p>
                En el año del <strong>2001</strong>, a uno de mis amigos (cuyo padre trabajaba en Estados Unidos) le regalaron una <strong>computadora</strong> y nos invitó a verla. Esta fue la
                primera vez que tuve contacto con computadora de la marca "Alaska", y en ella veíamos caricaturas y nos metíamos en páginas de juegos como
                Cartoon Network. Entonces sentí mucha pasión por las computadoras y por aquellos días, cerca de mi casa abrieron un cafe internet al que iba
                a diario a jugar "Doom".
              </p>

              <p>
                En el año <strong>2003</strong> (a mis 7 años), nos mudamos a otra ciudad, así que tuve que dejar atrás a todos mis amigos, afortunadamente para mí, cerca de mi 
                nueva casa había también un cafe internet al que iba a diario para jugar, aquí conocí el videojuego que me mentió al mundo de las <strong>comunidades online</strong>,
                este fue "Ragnarok", un juego online donde conocí a mucha gente de otros paises y comencé a hacer muchos nuevos "ciber" amigos, además que conocí
                la página <strong>"Google"</strong>, que me daba respuestas para todas las preguntas que tenía y como en mi nuevo hogar no tenía amigos de verdad, mis tardes se iban 
                en jugar "ragnarok" y aprender cosas en "Google".
              </p>

              <p>
                Tristemente en el año <strong>2006</strong>, en México comenzó la llamada "guerra contra el narcotráfico" y debido a la extrema violencia e inseguridad en mi ciudad,
                muchos negocios locales comenzarón a cerrar, entre ellos el cafe internet al que iba, además que mis padres ya no me permitían salir, así
                que me tuve que despedir de mis "ciber" amigos y de "ragnarok".
              </p>

              <p>
                En el año <strong>2008</strong>, mi hermano entro a la preparatoria y mis padres nos regalaron nuestra primer <strong>computadora</strong> para que hiciera sus tareas,
                este fue uno de los momentos más felices para mi, dado a que desde el 2001 había querido una, y como todo niño con un dispositivo nuevo,
                comencé a descargar muchos videojuegos, lo que fue un grave problema, porque llené la computadora de <strong>virus</strong> y la descompuse a los meses de tenerla,
                así que mi madre y hermano se enojaron mucho conmigo y cuando la arreglaron, me prohibieron volver a descargar cosas, incluso revisaban mi historial para asegurarse
                que no descargara mas juegos. Así pasó un mes hasta que mi aburrimiento era demasiado, así que recordé que Google me daba respuestas a todo
                lo que quería saber y comencé a investigar como eliminar ciertas secciones del historial y borrar el rastro de todo lo que hacía 
                en la PC, pero como seguía llenando la computadora de virus, también en Google aprendí a <strong>repararla</strong>, así que todo mi 2008 fue de descomponer
                y arreglar la computadora sin que nadie se diera cuenta.
              </p>

              <p>
                Fue en el <strong>2009</strong> cuando ya comencé a tener contacto con <strong>informática más avanzada</strong>, en este año recordé el juego que tanto me había gustado de niño 
                "Ragnarok" y quise volver a jugarlo, pero por aquellos años los creadores bloquearon las IP's americanas, y solo se podría jugar en Europa y Asia,
                así que me di a la tarea de buscar en Google como poder jugar, y así fue que conocí las <strong>"VPN"</strong> y en un mes aprendí a cambiar mi IP mexicana por una Coreana 
                para jugar. 
              </p>

              <p>
                Me sorprendí mucho de lo que ya era capaz de hacer con la computadora y me llego el <strong>hambre de ir por más</strong>, así que ahora mis tardes se iban en investigar
                sobre informática y jugar videojuegos. Hasta que me di cuenta que podía unir ambas cosas. Fue a mis 12 años que aprendí a abrir el <strong>código fuente </strong>
                del juego "GTA San Andreas" y a reemplazar el código a modo que aprendí a <strong>programar</strong> mis propias misiones y meter mis propios personajes en el juego.
                Esto era algo que en aquellos años le llamaban "Parchar el juego con mods". 
              </p>

              <p>
                Fue en estos años también, que me comencé a meter en el mundo de <strong>youtube</strong>, hice un canal para subir mis videos con juegos modificados por mi, hasta que 
                se puso de moda que todos los youtubes tenían su propia <strong>página web</strong>, entonces comenzó mi obseción por tener yo también una página web e investigué en Google
                como hacerlo. Fue así que en el 2009 conocí <strong>HTML, CSS, JavaScript,</strong> así como muchos foros y comunidades populares como "4-chan" y "taringa",
                creé mi propia página con un dominio gratuíto y tuve mi primer contacto con el Desarrollo Web.
              </p>

              <p>
                En el año <strong>2010</strong> mi hermano mayor estaba por entrar a la universidad y lo llevaban a distintas facultades a ver exposiciones y le daban folletos
                de diferentes carreras para que se informara, fue por medio de estos folletos que descubrí la carrera <strong>"Ingeniería en Tecnología de Software"</strong> y 
                supe que lo que tanto me apasionaba, era también una carrera profesional, desde entonces decidí que quería dedicarme a esa carrera.
              </p>

              <p>
                En el año <strong>2012</strong> entre a la preparatoria, donde llevé una materia llamada "Tecnología de la Información", donde aprendimos
                el programa "Robot Karel", hacer diagramas de flujo, las bases de lógica de programación y yo por mi parte, por mis busquedas en Google 
                conocí <strong>Java y C#.</strong>
              </p>

              <p>
                Dado a que era algo malo en trigonometría y geometría analítica, aprendí en C# a hacer programas que hicieran la tarea de matemáticas por mi y
                comencé a vender estos programas a mis compañeros.
              </p>

              <p>
                En el año 2014 ingresé a la Facultad de Ingeniería Mecánica y Eléctrica a la carrera de Ingeniero en Tecnología de Software, donde pronto
                comencé a sobresalir en las materias relacionadas a programación y comenzó mi educación formal en informática avanzada.
              </p>

              <p>
                Finalmente en el año 2017 encontré mi primer trabajo como Desarrollador Web Jr. y desde entonces me he mantenido trabajando, aprendiendo, compartiendo
                y haciendo lo que mas amo. <strong>Programar.</strong>
              </p>

            </div>

            <div className="history-despedida text-center">
              <div className="despedida-title">
                <h4>"Programadores hay millones en el mundo, no seas uno más del montón. No estudies la programación... ¡Vive la programación!"</h4>
              </div>
              <div className="despedida-imagen">
                <img src="firma.png" alt=""/>
              </div>
              <div className="despedida-name">
                <h3>Daniel Alejandro Cruz Pérez</h3>
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  };
};

export default History;