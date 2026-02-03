import { Component, type ErrorInfo, type ReactNode } from "react";

interface Props {
    children?: ReactNode;
}

interface State {
    hasError: boolean;
    error: Error | null;
}

class ErrorBoundary extends Component<Props, State> {
    public state: State = {
        hasError: false,
        error: null,
    };

    public static getDerivedStateFromError(error: Error): State {
        return { hasError: true, error };
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error("Uncaught error:", error, errorInfo);
    }

    public render() {
        if (this.state.hasError) {
            return (
                <div className="min-h-screen bg-black text-white p-8 font-mono">
                    <h1 className="text-3xl font-bold text-red-500 mb-4">Application Crash</h1>
                    <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 overflow-auto">
                        <h2 className="text-xl mb-2 text-yellow-500">Error:</h2>
                        <pre className="text-sm whitespace-pre-wrap text-red-300">
                            {this.state.error && this.state.error.toString()}
                        </pre>
                    </div>
                    <p className="mt-8 text-gray-500">Please report this error to the developer.</p>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
