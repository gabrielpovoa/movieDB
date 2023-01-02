import { Link } from 'react-router-dom';
import { Container, Logo, Img, Title, H1 } from './style'
import bird from '../../assets/bird.png'

export const NotFound = () => {
    return (
        <Container>
            <Title>
                <H1>Not Found Page </H1>
                <Link to="/">Go back to Home</Link>
            </Title>
            <Logo>
                <Img src={bird} />
            </Logo>
        </Container>
    )
}
