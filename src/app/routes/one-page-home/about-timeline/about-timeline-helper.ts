import { Injectable } from "@angular/core"

@Injectable({
    providedIn: "root"
})
export class AboutTimelineHelper {
    
    getTimelineOptions = () => {
        return [
            {
                date: "12/2013", 
                title: "Ganhei medalha em uma OBMEP", 
                description: [
                    "Eu já mencionei que gosto muito de matemática? Pois é, quando eu digo isso é porque desde quando eu era mais novo, sempre fui fascinado por números. Tenho uma vaga lembrança de quando eu tinha 5 ou 6 anos de ter contado de 1 a 1000!! Quem faz isso em sã consciência? Brincadeiras a parte, ao avançar nos estudos fui começando a pegar mais gosto ainda pela matemática e sendo uma pessoa competitiva, meu ápice foi ser um medalhista de bronze nas olimpíadas de matemática das escolas públicas (OBMEP) de 2013 quando eu estava no 9° ano do Ensino Fundamental. Eu tenho muito orgulho de mim mesmo dessa época. É uma lembrança que vou guardar para sempre em minha memória."
                ], 
                active: true,
                photoPath: "/assets/img/about/2013-timeline.jpg",
                photoPolaroidDesc: "Entrega Certificado"
            }, 
            {
                date: "01/2015", 
                title: "Técnico em Programação de Jogos Digitais", 
                description: [
                    "Sempre joguei muitos jogos desde cedo. Eu amava os jogos de corrida e o meu favorito era Gran Turismo. Conforme cresci fui aderindo meu gosto a outros jogos também! Comecei a jogar League of Legends, Call of Duty, Counter Strike, etc. Mas em algum momento da minha vida eu pensei: \"E se eu fizesse um jogo?\". E foi a partir dessa pergunta que eu mantive um sonho de um dia poder trabalhar com jogos. E um dia, segundo ano do Ensino Médio, os cursos da ETEC Aristóteles Ferreira abriram vagas para um curso em Programação de Jogos Digitais. Sério, nesse momento, meus olhos brilharam. E foi nesse curso que tive meu primeiro contato com programação. O primeiro momento que tomaria rumo de toda minha vida."
                ], 
                active: false,
                photoPath: "/assets/img/about/2013-timeline.jpg",
                photoPolaroidDesc: "Entrega Certificado"
            }, 
            {
                date: "12/2016", 
                title: "O começo de uma nova jornada", 
                description: [
                    "O fim do Ensino Médio para muitas pessoas é um momento de indecisão. Vestibular, provas finais e futuro incerto. De certa forma também vivi isso! Porém, devo destacar que 2016 foi o início de tudo! É aqui que minha carreira começou, afinal terminei o curso técnico de programação de jogos digitais e me encantei por linhas de código e decidi cursar Análise e Desenvolvimento de Sistema. Nunca estive tão certo do que eu queria e eu acertei. E quando se faz por amor tudo ocorre tão leve quanto uma pena, e, tenho certeza que logo colherei bons frutos da escolha em que tomei. Que venha o conhecimento!!"
                ], 
                active: false,
                photoPath: "/assets/img/about/2016-timeline.jpg",
                photoPolaroidDesc: "Formatura ETEC"
            },
            {
                date: "11/2017", 
                title: "Conhecendo o HackATruck", 
                description: [
                    "Um dos grandes momentos em que tive dentro da faculdade foi a notícia de que um caminhão cheio de tecnologia e que passou por grandes faculdades no Brasil também faria uma pausa na FATEC Rubens Lara. A notícia maior ainda foi de que haveria uma imersão tecnológica dentro do caminhão de IoT, Watson AI e muito desenvolvimento iOS usando a linguagem Swift. Na mesma hora comecei a estudar para que pudesse ingressar nessa imersão, uma vez que foi selecionado por meio de minicursos sobre alguns temas fundamentais para o ingresso. E com nota máxima nos 4 módulos desse minicurso pude adentrar e viver um mês de imersão dentro do HackATruck! Foi uma experiência incrível de Networking e muito aprendizado."
                ], 
                active: false,
                photoPath: "/assets/img/about/2017-timeline.jpg",
                photoPolaroidDesc: "Término Hackatruck"
            },
            {
                date: "07/2018", 
                title: "O primeiro emprego", 
                description: [
                    "Desde o início da faculdade me afoguei em cursos e mais cursos para poder aprimorar minhas habilidades. Precisava estar preparado para o que me aguardava, afinal, o mercado requisita boas habilidades. Participei do Hackatruck que esteve em minha faculdade (foi um ótimo momento!), maratonas de programação online e cursos na Udemy. Essa foi minha fórmula secreta para o primeiro emprego. Sendo assim, depois de algumas tentativas, o primeiro emprego bateu em minhas portas. Um estágio na área que mais me encantava em TI: Desenvolvimento de Software. E desde que entrei, pude me aprofundar mais e mais em Java e posteriormente em Kotlin, ambas na qual não tinha muita experiência. Mas eu amei o desafio! rs"
                ], 
                active: false,
                photoPath: "/assets/img/about/2018-timeline.jpg",
                photoPolaroidDesc: "Dia da Entrevista"
            },
            {
                date: "12/2019", 
                title: "Me formei na faculdade", 
                description: [
                    "A faculdade foi uma ótima oportunidade para ter uma visão geral de mercado e para fazer conexões com possíveis companheiros de trabalho. Conheci pessoas incríveis no qual desejo levar para a vida. Quanto ao conhecimento, creio que foi só uma etapa e não devo parar por aqui, afinal, o mundo de TI é tão vasto que nunca podemos sequer parar, pois a cada segundo aparece uma tecnologia nova, e, isso é muito intrigante para mim. Mas o mais gratificante é quando você está na formatura e levanta o canudo vazio, percebendo que se passou 3 anos e que cada segundo valeu a pena. Momento eternizado em minha memória!"
                ], 
                active: false,
                photoPath: "/assets/img/about/2019-timeline.jpg",
                photoPolaroidDesc: "Formatura Faculdade"
            },
            {
                date: "05/2021", 
                title: "Titulo 7", 
                description: [
                    "oi voce é o cara"
                ], 
                active: false
            }
        ]
    }
}