import '../styles/Board.scss';
import { useRef, useState, useEffect } from 'react';
import Card from './Card';

type Props = {
    setCounter: (fn: number | ((prevState: number) => number)) => void,
    cards: string[],
    overlayRef: any;
}

const Board = ({ setCounter, cards, overlayRef }: Props) => {
    const [flippedCard, setFlippedCard] = useState<{ firstTime: boolean, storedCard: string | null, matchedCards: number }>({ firstTime: false, storedCard: '', matchedCards: 0 });
    const boardRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        setTimeout(() => {
            if(flippedCard.matchedCards === 9) {
                overlayRef.current.classList.remove('deactivate');
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
    
            setCounter((prevState: number): number => ++prevState);

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
                    }, 500);
                } else {
                    setFlippedCard((prevState: any): any => ({...prevState, firstTime: false, storedCard: '', matchedCards: prevState.matchedCards + 1 }));
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