import React from 'react';
import { useParams } from 'react-router-dom';
 
const withRouter = WrappedComponent => props => {
  const params = useParams();
 
  return (
    <WrappedComponent
        params={params}
    />
  );
};
 
export default withRouter;