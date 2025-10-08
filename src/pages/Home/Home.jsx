import React from 'react';
import Banner from '../../components/Banner/Banner';
import Apps from '../../components/Apps/Apps';
import { useLoaderData } from 'react-router';

const Home = () => {

  const apps = useLoaderData();

  return (
    <div>
      <Banner></Banner>
      <Apps apps={apps}></Apps>
    </div>
  );
};

export default Home;