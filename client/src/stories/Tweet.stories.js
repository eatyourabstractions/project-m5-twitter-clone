import React from 'react';

import Tweet from '../components/Tweet';

export default {
    component: Tweet,
    title: 'Single Tweet',
  };

  const Template = args => <Tweet {...args} />;

  export const Default = Template.bind({});
  Default.args ={
      nickname: "michael matios"
  }