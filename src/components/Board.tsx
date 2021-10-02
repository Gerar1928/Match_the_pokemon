import '../styles/Board.scss';
import { useRef, useEffect } from 'react';
import Card from './Card';

type Props = {
    setCounter: (fn: number | ((prevState: number) => number)) => void,
    cards: string[],
    flippedCard: { firstTime: boolean, storedCard: string | null, matchedCards: number },
    setFlippedCard: (obj: any) => void;
    gameoverRef: any,
    overlayRef: any;
}

const Board = ({ setCounter, cards, flippedCard, setFlippedCard, gameoverRef, overlayRef }: Props) => {
    const boardRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        setTimeout(() => {
            if(flippedCard.matchedCards === 9) {
                gameoverRef.current.classList.remove('deactivate');
                overlayRef.current.classList.remove('deactivate');
                
                setFlippedCard({ firstTime: false, storedCard: '', matchedCards: 0 });

                Array.from(boardRef.current!.children)
                    .forEach((card: Element): void => Array.from(card.children)
                    .forEach((child: Element): void => child.classList.contains('front-card') ? child.classList.remove('flipped-front') : child.classList.remove('flipped-back')));
            }
        }, 500);
    });

    // Returns the element if the condition is true.
    const returnElement = (condition: boolean, element: Element): Element | undefined => {
        if (condition) {
            return element;
        } else {
            return undefined;
        }
    }

    const flipCards = (event: any): void => {
        if (event.target.classList.contains('back-card')) {
            let card: Element | undefined = Array.from(boardRef.current!.children).find((child: Element): Element | undefined => returnElement(child === event.target.parentElement, child));
            let front_card: Element | undefined = Array.from(card!.children).find((child: Element): Element | undefined => returnElement(child.classList.contains('front-card'), child));
            let back_card: Element = event.target;
    
            front_card!.classList.add('flipped-front');
            back_card!.classList.add('flipped-back');

            // Game logic below.
            if (!flippedCard.firstTime) {
                setFlippedCard((prevState: any): any => ({...prevState, firstTime: true, storedCard: card!.getAttribute('data-index') }));
            } else {
                // Compares cards to see if they match.
                if (cards[Number(flippedCard.storedCard)] !== cards[Number(card!.getAttribute('data-index'))]) {
                    // Set timeout for 1000 mili, so the player can see what card they selected, before the class is removed.
                    setTimeout((): void => {
                        // Removes prev card classes.
                        Array.from(boardRef.current!.children[Number(flippedCard.storedCard)].children)
                            .forEach((item: Element): void => item.classList.contains('front-card') ? item.classList.remove('flipped-front') : item.classList.remove('flipped-back'));
                        
                        // Removes current card classes.
                        front_card!.classList.remove('flipped-front');
                        back_card!.classList.remove('flipped-back');

                        setFlippedCard((prevState: any): any => ({...prevState, firstTime: false, storedCard: '' }));
                        setCounter((prevState: number): number => ++prevState);
                    }, 500);
                } else {
                    setFlippedCard((prevState: any): any => ({...prevState, firstTime: false, storedCard: '', matchedCards: prevState.matchedCards + 1 }));
                    setTimeout(() => setCounter((prevState: number): number => ++prevState), 500);
                }
            }
        }
    }

    return (
        <div id='board' onClick={ flipCards } ref={ boardRef }>
            { cards.map((card: string, index: number): JSX.Element => <Card key={ index } imgName={ card } arrIndex={ index } />) }
        </div>
    );
}

export default Board