import React from 'react';

import Tweet from '../components/Tweet';
import kittypic from './assets/lazycat.jpeg'

export default {
    component: Tweet,
    title: 'Single Tweet',
  };

  const Template = args => <Tweet {...args} />;

  export const Default = Template.bind({});
  Default.args ={
      nickname: "michael matos",
      handle: "@michael.ca",
      date: "Jan 6th",
      photo: kittypic,
      message: "improving",
     
  }

  export const Retweeted = Template.bind({});
  Retweeted.args ={
      nickname: "michael matos",
      handle: "@michael.ca",
      date: "Jan 6th",
      photo: kittypic,
      message: "improving",
      remowed: "the jackal"
  }

  export const NoPic = Template.bind({});
  NoPic.args ={
    nickname: "michael matos",
    handle: "@michael.ca",
    date: "Jan 6th",
    message: "improving"
}

export const NoMsg = Template.bind({});
  NoMsg.args ={
    nickname: "michael matos",
    handle: "@michael.ca",
    date: "Jan 6th",
    photo: kittypic,
    message: ""
}