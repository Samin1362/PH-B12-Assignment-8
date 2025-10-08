import React from 'react';
import Banner from '../../components/Banner/Banner';
import Apps from '../../components/Apps/Apps';
import { useLoaderData } from 'react-router';

const Home = () => {

  const apps = useLoaderData();
  const eightApps = apps.slice(0, 8);

  return (
    <div>
      <Banner></Banner>
      <Apps apps={eightApps}></Apps>
    </div>
  );
};

export default Home;