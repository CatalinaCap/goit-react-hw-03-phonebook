import React from 'react';
import axios from 'axios';

axios.defaults.baseURL = 'http://hn.algolia.com/api/v1/items/:id';

const LocalStorage = () => {
  return <div>LocalStorage</div>;
};

export default LocalStorage;
