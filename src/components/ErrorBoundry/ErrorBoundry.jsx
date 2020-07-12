import React from 'react';
import ErrorPage from '../../pages/ErrorPage/ErrorPage';

class ErrorBoundry extends React.Component {
  constructor() {
    super();
    this.state = {
      hasError: false
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.log(error);
  }

  render() {
    if(this.state.hasError) {
      return <ErrorPage />;
    }

    return this.props.children;
  }
}

export default React.memo(ErrorBoundry);
