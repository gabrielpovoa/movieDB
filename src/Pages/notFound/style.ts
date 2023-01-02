import styled from 'styled-components';

export const Container = styled.section`
    background-color: #93A3B1;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const Title = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 2rem;
    font-family: 'Courier New', Courier, monospace;
    margin-bottom: 4rem;

    & a {
        font-size: 1.4rem;
        color: #f2f2f2;
        font-weight: bolder;
        background-color: #7159c1;
        padding: .8rem;
        border-radius: .4rem;
    }
    & a:hover {
        background-color: #71589c;
    }
`;

export const H1 = styled.h1`
    font-weight: bolder;
    font-size: 3rem;
`;

export const Logo = styled.div`
    box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1);
    width: 40rem; height: 40rem;
    border-radius: 50%;
    background-color: #71587c;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Img = styled.img`
    object-fit: cover;
    width: 100%; height: 100%;
`;



