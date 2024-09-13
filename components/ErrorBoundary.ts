import { Component, ReactNode } from "react";

interface ErrorBoundaryProps{
    props: ReactNode;
    children: ReactNode;
}

class ErrorBoundary extends Component<ErrorBoundaryProps> {
  constructor(props: ReactNode) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    return this.props.children;
  }
}

export default ErrorBoundary;
