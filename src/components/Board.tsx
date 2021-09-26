import '../styles/Board.scss';
import { useRef } from 'react';
import Card from './Card';

type Props = {
    setCounter: (fn: number | ((prevState: number) => number)) => void
}

const Board = ({ setCounter }: Props) => {

    const boardRef = useRef<HTMLDivElement | null>(null);

    const cards = ['BlastoisePiplup.jpg', 'BlastoisePiplup.jpg', 'CelebiVenusaur.jpg', 'CelebiVenusaur.jpg', 'CharizardBraixen.jpg', 
    'CharizardBraixen.jpg', 'EeveeSnorlax.jpg', 'EeveeSnorlax.jpg', 'EspeonDeoxys.jpg', 'EspeonDeoxys.jpg', 'GengarMimikyu.jpg',
    'GengarMimikyu.jpg', 'PikachuZekrom.jpg', 'PikachuZekrom.jpg', 'RaichuAlolanRaichu.jpg', 'RaichuAlolanRaichu.jpg',
    'LucarioMelmetal.jpg', 'LucarioMelmetal.jpg'];

    // IIFE to shuffle the array when page loads.
    ((cards: string[]): void => {
        for (let i = cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = cards[i];
            cards[i] = cards[j];
            cards[j] = temp;
        }
    })(cards);

    // Returns the element if the condition is true.
    const returnElement = (condition: boolean, element: Element): Element | undefined => {
        if (condition) {
            return element;
        } else {
            return undefined;
        }
    }

    const flipCards = (event: any): void => {
        let card: Element | undefined = Array.from(boardRef.current!.children).find((child: Element): Element | undefined => returnElement(child === event.target.parentElement, child));
        let front_card: Element | undefined = Array.from(card!.children).find((child: Element): Element | undefined => returnElement(child.classList.contains('front-card'), child));
        let back_card: Element = event.target;

        front_card!.classList.add('flipped-front');
        back_card!.classList.add('flipped-back');

        setCounter((prevState: number): number => ++prevState);
    }

    return (
        <div id='board' onClick={ flipCards } ref={ boardRef }>
            { cards.map((card: string, index: number): JSX.Element => <Card key={ index } imgName={ card } arrIndex={ index } />) }
        </div>
    );
}

export default Board