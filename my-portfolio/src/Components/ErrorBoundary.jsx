import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    console.error('ErrorBoundary caught an error:', error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-4 bg-red-100 text-red-800">
          <h2>Something went wrong.</h2>
          <pre className="whitespace-pre-wrap">{String(this.state.error)}</pre>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
