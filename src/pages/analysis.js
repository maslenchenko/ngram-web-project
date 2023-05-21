import React, {Component} from 'react'
import '../styles/analysis.css'
import { ToastContainer, toast} from 'react-toastify';


class Analysis extends Component {
    constructor(props) {
        super(props);
        this.state = {
            n: 0,
            numToPredict: 0,
            path: './server/public',
            context: '',
            predictedWords: '',
            resultTrain: {},
            resultPredict: {},
            resultPrevious: {},
        }

        this.apiUrl = 'http://localhost:8080';

        this.handleNInput = this.handleNInput.bind(this);
        this.handlePathInput = this.handlePathInput.bind(this);
        this.handleNumToPredictInput = this.handleNumToPredictInput.bind(this);
        this.handleContextInput = this.handleContextInput.bind(this);

        this.handleTrainSubmit = this.handleTrainSubmit.bind(this);
        const searchParams = new URLSearchParams(window.location.search);
        this.state.context = searchParams.get('input');
        this.state.n = searchParams.get('n');
        this.state.numToPredict = searchParams.get('num_to_predict');

        this.handleTrainSubmit();

    }

    handleNInput(event) {
        this.setState({n: event.target.value});
    }

    handlePathInput(event) {
        this.setState({path: event.target.value});
    }

    handleNumToPredictInput(event) {
        this.setState({numToPredict: event.target.value});
    }

    handleContextInput(event) {
        this.setState({context: event.target.value});
    }

    async handleTrainSubmit(event) {
        // event.preventDefault();
        try {
            const url = `${this.apiUrl}/train?path=${this.state.path}&n=${this.state.n}`;
            fetch(url) //, {headers: new Headers({
                // "ngrok-skip-browser-warning": "69420"})} )
                .then(res => res.json())
                .then(res => this.setState({
                    path: this.state.path,
                    n: this.state.n,
                    resultTrain: res,
                }));
            toast.success('Model trained successfully!');
        } catch (e) {
            toast.error('Error training model.');
        }
    }


    componentDidUpdate(prevProps, prevState) {
        if (prevState.n !== this.state.n) {
            this.handleTrainSubmit();
        }
    }

    handleInputChange = (event) => {
        const context = event.target.value;
        this.setState({context}, () => {
            const url = `${this.apiUrl}/predict?n=${this.state.n}&num_to_predict=${this.state.numToPredict}&context=${this.state.context}`;
            fetch(url)
                .then(res => res.json())
                .then(res => this.setState({predictedText: res.output[1]}));
        });
    }


    render() {
        return (
            <div className='analysis-main'>
                <div className='text-unit'>
                    <h2 className='analysis-title'>Your input:</h2>
                    <textarea className="predict-area"
                              placeholder="Input text here..."
                              value={this.state.context}
                              onChange={this.handleInputChange}/>
                    <h2 className='analysis-title'>Next words:</h2>
                    <textarea className="predict-area"
                              value={this.state.predictedText}
                              readOnly/>
                </div>
                <div className='analysis-unit'>
                    <p>Analysis</p>
                    <div>
                        {this.state.resultTrain.output ?
                            <p>Result: {this.state.resultTrain.output.map((item, i) => <p key={i}>{item}</p>)}</p>
                            : <p>Result: </p>}

                    </div>
                </div>
                <ToastContainer/>
            </div>
        );
    }
}

export default Analysis;
