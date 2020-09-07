import React from 'react';
import { Loading, LoadingInner } from './styled';

const Loader = () => {
  return (
    <Loading>
      <LoadingInner />
      <LoadingInner />
      <LoadingInner />
    </Loading>
  )
}

export default Loader;
