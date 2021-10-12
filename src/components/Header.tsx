import '../styles/Header.scss';

export interface Props {
    counter: number | ((prevState: number) => number)
}

const Header = ({ counter }: Props) => {
    return(
        <header id='header' data-testid='header'>
            <h3 className='moves' data-testid='moves'>Moves: { counter }</h3>
        </header>
    );
}

export default Header;