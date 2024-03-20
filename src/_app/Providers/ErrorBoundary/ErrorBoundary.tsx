import {Component, ErrorInfo, ReactNode} from 'react'

interface Props {
    children: ReactNode
}

interface State {
    hasError: boolean
}

//https://medium.com/@bobjunior542/how-to-use-error-boundaries-in-react-js-with-typescript-ee90ec814bf1

class ErrorBoundary extends Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {hasError: false}
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error('ErrorBoundary caught an error: ', error, errorInfo)
        this.setState({hasError: true})
    }

    render() {
        if (this.state.hasError) {
            return <h1>Something went wrong.</h1> //todo make some pretty component if error happened
        }

        return this.props.children
    }
}

export default ErrorBoundary
