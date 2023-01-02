import styled from 'styled-components';

export const MovieGrade = styled.ul`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
    place-items: center;
    column-gap: 3rem;
    row-gap: 4rem;

    @media screen and (max-width:450px){
        grid-template-columns: repeat(auto-fit, minmax(100%, 1fr));
    }

`;



export const List = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;

    &:hover {
        box-shadow: 0px 20px 30px -6px rgba(0,0,0,0.5);
    }

    & a {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    };

    & img {
        width: 30rem;
        object-fit: cover;
        max-width: 100%;
        box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1);
        border-radius: 1rem 1rem 0 0;

        @media screen and (max-width:450px){
            width: 100%;
        }
    };
    `;

export const MovieName = styled.span`
    border-radius:0 0 1rem 1rem;
    padding: 2rem;
    background-color: #7159c1;
    font-weight: bold;
    color: #FFF;
    font-size: 1.4rem;
    letter-spacing: .1rem;
    box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1);
    max-width: 30rem;
    width: 100%;
    text-align: center;
    @media screen and (max-width:450px){
            max-width: 100%;
        }
`;
