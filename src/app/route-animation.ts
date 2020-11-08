import { animate, query, style, transition, trigger } from '@angular/animations';

export const fader = trigger('routeAnimations', [
    transition('* <=> *', [
        query(':enter', [
            style({
                position: 'absolute',
                left: '100%'
            })
        ], { optional: true }),
        query(':leave', [
            style({
                position: 'absolute',
                left: 0
            })
        ], { optional: true }),
        query(':enter, :leave', [
            animate('600ms ease', 
                style({
                    transform: 'translate(-100%)'
                })
            )
        ], { optional: true }),
    ])
])