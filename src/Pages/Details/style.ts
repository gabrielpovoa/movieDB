import styled from 'styled-components';

interface backgroundProps {
    background: string | undefined
}

export const Container = styled.main<backgroundProps>`
    padding:3% ;
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
    height: 100%;
    
    & img {
        border-radius: 1rem;
        box-shadow: 0px 10px 15px -3px rgba(255,255,255,0.1);
        width: 100%;
        animation: image 4s linear infinite;
    } 

    @keyframes image {

        0%,100% {
            transform: scale(.9);
            border-radius: var(4% 95% 6% 95%/95% 4% 92% 5%);
        }
        0% {
            transform: scale(.8);
            border-radius: var(95% 4% 97% 5%/4% 94% 3% 95%);
        }   
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
