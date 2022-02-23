import React, { useState, useEffect } from 'react';
import { useFetch } from './2-useFetch';

const Example = () => {
  const { loading, products } = useFetch();
  console.log(products);
  return (
    <div>
      <h2>{loading ? 'loading...' : 'data'}</h2>
    </div>
  );
};

export default Example;
