import { Injectable } from '@angular/core';
import { TimelineOptions } from 'src/app/shared/timeline/timeline.component';

@Injectable({
    providedIn: "root"
})
export class AboutTimelineHelper {
    
    getTimelineOptions = (): TimelineOptions => {
        return {
            events: [
                {
                    date: "2016",
                    name: "O começo de uma nova jornada",
                    description: "O fim do Ensino Médio para muitas pessoas é um momento de indecisão. Vestibular, provas finais e futuro incerto. De certa forma também vivi isso! Porém, devo destacar que 2016 foi o início de tudo! É aqui que minha carreira começou, afinal terminei o curso técnico de programação de jogos digitais e me encantei por linhas de código e decidi cursar Análise e Desenvolvimento de Sistema. Nunca estive tão certo do que eu queria e eu acertei. E quando se faz por amor tudo ocorre tão leve quanto uma pena, e, tenho certeza que logo colherei bons frutos da escolha em que tomei. Que venha o conhecimento!!",
                    photoPath: "/assets/img/about/2016-timeline.jpg",
                    photoPolaroidDesc: "Formatura ETEC"
                },
                {
                    date: "2017",
                    name: "Conhecendo o HackATruck",
                    description: "Um dos grandes momentos em que tive dentro da faculdade foi a notícia de que um caminhão cheio de tecnologia e que passou por grandes faculdades no Brasil também faria uma pausa na FATEC Rubens Lara. A notícia maior ainda foi de que haveria uma imersão tecnológica dentro do caminhão de IoT, Watson AI e muito desenvolvimento iOS usando a linguagem Swift. Na mesma hora comecei a estudar para que pudesse ingressar nessa imersão, uma vez que foi selecionado por meio de minicursos sobre alguns temas fundamentais para o ingresso. E com nota máxima nos 4 módulos desse minicurso pude adentrar e viver um mês de imersão dentro do HackATruck! Foi uma experiência incrível de Networking e muito aprendizado.",
                    photoPath: "/assets/img/about/2017-timeline.jpg",
                    photoPolaroidDesc: "Término Hackatruck"
                },
                {
                    date: "2018",
                    name: "O primeiro emprego",
                    description: "Desde o início da faculdade me afoguei em cursos e mais cursos para poder aprimorar minhas habilidades. Precisava estar preparado para o que me aguardava, afinal, o mercado requisita boas habilidades. Participei do Hackatruck que esteve em minha faculdade (foi um ótimo momento!), maratonas de programação online e cursos na Udemy. Essa foi minha fórmula secreta para o primeiro emprego. Sendo assim, depois de algumas tentativas, o primeiro emprego bateu em minhas portas. Um estágio na área que mais me encantava em TI: Desenvolvimento de Software. E desde que entrei, pude me aprofundar mais e mais em Java e posteriormente em Kotlin, ambas na qual não tinha muita experiência. Mas eu amei o desafio! rs",
                    photoPath: "/assets/img/about/2018-timeline.jpg",
                    photoPolaroidDesc: "Dia da Entrevista"
                },
                {
                    date: "2019",
                    name: "Me formei na faculdade",
                    description: "A faculdade foi uma ótima oportunidade para ter uma visão geral de mercado e para fazer conexões com possíveis companheiros de trabalho. Conheci pessoas incríveis no qual desejo levar para a vida. Quanto ao conhecimento, creio que foi só uma etapa e não devo parar por aqui, afinal, o mundo de TI é tão vasto que nunca podemos sequer parar, pois a cada segundo aparece uma tecnologia nova, e, isso é muito intrigante para mim. Mas o mais gratificante é quando você está na formatura e levanta o canudo vazio, percebendo que se passou 3 anos e que cada segundo valeu a pena. Momento eternizado em minha memória!",
                    photoPath: "/assets/img/about/2019-timeline.jpg",
                    photoPolaroidDesc: "Formatura Faculdade"
                }
            ],
            lineOptions: {
                height: 2,
                backgroundColor: "#212529"
            },
            animationOptions: {
                animationDuration: '1s'
            },
            descriptionOptions: {
                fontSize: '18px',
                marginLeft: '20px'
            }
        }
    }
}