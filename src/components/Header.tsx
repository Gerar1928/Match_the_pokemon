import '../styles/Header.scss';

type Props = {
    counter: number | ((prevState: number) => number)
}

const Header = ({ counter }: Props) => {
    return(
        <header id='header'>
            <h3 className='moves'>Moves: { counter }</h3>
        </header>
    );
}

export default Header;