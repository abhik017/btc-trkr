import './graph.css';
import { Line } from 'react-chartjs-2';
const { Component } = require('react');

class Graph extends Component {
    constructor(props) {
        super(props);
        this.state = {
            price: this.props.price,
            data: {
                labels: [],
                datasets: [
                    {
                        label: 'BTC vs. INR 5 second Time Frame',
                        data: [],
                        fill: false,
                        borderColor: "rgba(255, 0, 0, 1)",
                    },
                ]
            },
            options: {
                scales: {
                    yAxes: [{
                        gridLines: {
                            // display: false,
                            // drawBorder: true,
                            drawOnChartArea: false,
                            color: "black"
                        }
                    }],
                    xAxes: [{
                        gridLines: {
                            // drawBorder: true,
                            // display: false
                            drawOnChartArea: false,
                            color: "black"
                        },
                    }]
                },
                mantainAspectRatio: false
            },
            count: 0
        }
    }
    
    componentDidMount() {
        setInterval(() => {
            this.setState({
                price: this.props.price, 
                data: {
                    labels: [...this.state.data.labels, new Date().toLocaleTimeString()],
                    datasets: [
                        {
                            label: 'BTC vs. INR',
                            data: [...this.state.data.datasets[0].data, this.props.price],
                            fill: false,
                            borderColor: "rgba(255, 0, 0, 1)",
                        }
                    ],
                },
                count: this.state.count + 1
            });
            if(this.state.count>10) {
                this.setState({
                    data: {
                        labels: this.state.data.labels.slice(1),
                        datasets: [{
                            label: 'BTC vs. INR',
                            data: this.state.data.datasets[0].data.splice(1),
                            fill: false,
                            borderColor: "rgba(255, 0, 0, 1)",
                        }]
                    },
                    count: this.state.count + 1
                }
                )
            }
        }, 5000);
        
    }
    render () {
        return (
            <div className = "chart">
                <Line data={this.state.data} options={this.state.options}/>
            </div>
        );
    }
}

export default Graph;