import '../styles/Card.scss';

const Card = ({imgName, arrIndex}: {imgName: string, arrIndex: number}) => {
    return (
        <div className='card' data-index={ arrIndex }>
            <img src={ process.env.PUBLIC_URL + '/images/cards/' + imgName } alt="card" className='front-card'/>
            <img src={ process.env.PUBLIC_URL  + '/images/cards/back.jpg'} alt="card" className='back-card'/>
        </div>
    );
}

export default Card;