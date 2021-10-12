import '../styles/Card.scss';

export interface Props {
    imgName: string,
    arrIndex: number
}

const Card = ({imgName, arrIndex}: Props) => {
    return (
        <div className='card' data-testid='card' data-index={ arrIndex }>
            <img src={ process.env.PUBLIC_URL + '/images/cards/' + imgName } alt="card" className='front-card' data-testid='front-card'/>
            <img src={ process.env.PUBLIC_URL  + '/images/cards/back.jpg'} alt="card" className='back-card' data-testid='back-card'/>
        </div>
    );
}

export default Card;