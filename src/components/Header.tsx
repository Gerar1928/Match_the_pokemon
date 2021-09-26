import '../styles/Header.scss';

const Header = ({ counter }: { counter: number | ((prevState: number) => number) }) => {
    return(
        <header id='header'>
            <h1 className='title'>Memory Matching Game</h1>
            <h3 className='moves'>Moves: { counter }</h3>
        </header>
    );
}

export default Header;