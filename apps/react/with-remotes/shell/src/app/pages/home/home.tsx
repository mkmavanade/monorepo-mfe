import React from 'react';
import { Loading } from '../../components/loading';
import { Description, HomeContainer, Title } from './style';





const Home: React.FC = () => {
    return (
        <>
        <Loading />
        <HomeContainer>
            <Title>Home Page</Title>
            <Description>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas atque quam porro consequuntur quo excepturi delectus hic blanditiis error veritatis accusamus, corporis iusto mollitia animi ducimus eius possimus ipsum sunt?</Description>
        </HomeContainer>
        </>
    );
};

export default Home;