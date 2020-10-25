import { animate, query, style, transition, trigger } from '@angular/animations';

export const fader = trigger('routeAnimations', [
    transition('* <=> *', [
        query(':enter', [
            style({
                position: 'absolute',
                left: '100%'
            })
        ]),
        query(':leave', [
            style({
                position: 'absolute',
                left: 0
            })
        ]),
        query(':enter, :leave', [
            animate('600ms ease', 
                style({
                    transform: 'translate(-100%)'
                })
            )
        ]),
    ])
])