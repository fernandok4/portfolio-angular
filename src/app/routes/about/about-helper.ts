import { Injectable } from '@angular/core';
import { TimelineOptions } from 'src/app/shared/timeline/timeline.component';

@Injectable({
    providedIn: "root"
})
export class AboutHelper{
    
    getTimelineOptions = (): TimelineOptions => {
        return {
            events: [
                {
                    date: "2016",
                    name: "O começo de uma nova jornada",
                    description: "O fim do Ensino Médio para muitas pessoas é um momento de indecisão. Vestibular, provas finais e futuro incerto. De certa forma também vivi isso! Porém, devo destacar que 2016 foi o inicio de tudo! É aqui que minha carreira começou, afinal terminei o curso técnico de programação de jogos digitais e me encantei por linhas de código e decidi cursar Análise e Desenvolvimento de Sistema. Nunca estive tão certo do que eu queria e eu acertei. E quando se faz por amor tudo ocorre tão leve quanto uma pena, e, tenho certeza que logo colherei bons frutos da escolha em que tomei. Que venha o conhecimento!!"
                },
                {
                    date: "2018",
                    name: "O primeiro emprego",
                    description: "Desde o início da faculdade me afoguei em cursos e mais cursos para poder aprimorar minhas habilidades. Precisava estar preparado para o que me aguardava, afinal, o mercado requisita boas habilidades. Participei do Hackatruck que esteve em minha faculdade (foi um ótimo momento!), maratonas de programação online e cursos na Udemy. Essa foi minha formula secreta para o primeiro emprego. Sendo assim, depois de algumas tentativas, o primeiro emprego bateu em minhas portas. Um estágio na área que mais me encantava em TI: Desenvolvimento de Software. E desde que entrei, pude me aprofundar mais e mais em Java e posteriormente em Kotlin, ambas na qual não tinha muita experiência. Mas eu amei o desafio! rs"
                },
                {
                    date: "2019",
                    name: "Me formei na faculdade",
                    description: "A faculdade foi uma ótima oportunidade para ter uma visão geral de mercado e para fazer conexões com possiveis companheiros de trabalho. Conheci pessoas incriveis no qual desejo levar para a vida. Quanto ao conhecimento, creio que foi só uma etapa e não devo parar por aqui, afinal, o mundo de TI é tão vasto que nunca podemos sequer parar, pois a cada segundo aparece uma tecnologia nova, e, isso é muito intrigante para mim. Mas o mais gratificante é quando você está na formatura e levanta o canudo vazio, percebendo que se passou 3 anos e que cada segundo valeu a pena. Momento eternizado em minha memória!"
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