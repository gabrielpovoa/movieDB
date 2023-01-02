import styled from 'styled-components';

interface backgroundProps {
    background: string | undefined
}

export const Container = styled.main<backgroundProps>`
    padding: 2rem 5%;
    background-image:url(${(props) => props.background});
    background-attachment: fixed;
    background-repeat: no-repeat;
    height: 100vh;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap:10rem;

    @media screen and (max-width:450px){
        justify-content: center;
        gap: 5rem;
    }
`;

export const Movie = styled.section`
    width: 30rem;
    max-width: 100%;
    & img {
        border-radius: 1rem;
        border: solid #FFF .2rem;
        box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1);
        width: 100%;
        object-fit: cover;
    } 
`;

export const Details = styled.section`
    max-width: 100%;
    width: 40rem;
    display: flex;
    flex-direction: column;
    gap: 3rem;
    margin-left: 10rem;

    h1 {
        text-align: center;
        font-size: 2rem;
    }
    span {
        font-size: 1.5rem;
        line-height: 3rem;
    }

    
    @media screen and (max-width:450px){
        margin-left: 0;
    }
`;

export const Buttons = styled.button`
    background-color: #f3f3f3;
    width: 15rem;
    padding: .8rem;
    border-radius: .5rem;
    cursor: pointer;

    &:hover {
        background-color: #000;
    }

    & a:hover {
        color: #FFF;
    }
    
    & a {
        color: #454545;
        font-weight: bolder;
        font-size: 1.5rem;
    }

`;
