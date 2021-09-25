import '../styles/Board.scss';
import Card from './Card';

const Board = () => {

    const cards = ['BlastoisePiplup.jpg', 'BlastoisePiplup.jpg', 'CelebiVenusaur.jpg', 'CelebiVenusaur.jpg', 'CharizardBraixen.jpg', 
    'CharizardBraixen.jpg', 'EeveeSnorlax.jpg', 'EeveeSnorlax.jpg', 'EspeonDeoxys.jpg', 'EspeonDeoxys.jpg', 'GengarMimikyu.jpg',
    'GengarMimikyu.jpg', 'PikachuZekrom.jpg', 'PikachuZekrom.jpg', 'RaichuAlolanRaichu.jpg', 'RaichuAlolanRaichu.jpg',
    'LucarioMelmetal.jpg', 'LucarioMelmetal.jpg'];

    ((cards: string[]): void => {
        for (let i = cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = cards[i];
            cards[i] = cards[j];
            cards[j] = temp;
        }
    })(cards);

    return (
        <div id='board'>
            { cards.map((card: string, index: number): JSX.Element => <Card key={ index } imgName={ card } arrIndex={ index } />) }
        </div>
    );
}

export default Board