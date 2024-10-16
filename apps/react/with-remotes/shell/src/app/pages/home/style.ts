import styled from "styled-components";


const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: #f0f0f0;
`;

const Title = styled.h1`
    font-size: 3rem;
    color: #333;
`;

const Description = styled.p`
    font-size: 1.5rem;
    color: #666;
`;

export { HomeContainer, Title, Description };