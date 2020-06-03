import React, {Component} from 'react';
import {Bar} from 'react-chartjs-2';
import { add_date_label } from '../HelpersFunction';

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { requestApiData } from "../../actions";

class GraphViewChart extends Component {
    constructor(props){
        super(props);
    }

    state = {
        avg_bangkapi_30_05_2020 : 100.00,
        DATA_SET_BANGKAPI : [],
    }

    componentDidMount(){
         this.props.requestApiData();
    }


    calculate_avg_of_water_level(list){
        var sum = 0;
        var avg = 0;

        for(var i=0; i< list.length; i++){
            sum += list[i]
        }

        avg = (sum)/(list.length);
        console.log(avg.toFixed(3));
        return parseFloat(avg.toFixed(3));
    }

    render(){
        return(
            <div className="chart">
                    <Bar
                        data={{
                            labels : add_date_label(),
                            datasets : [
                                {
                                    label: 'Ladkrabang',
                                    backgroundColor: 'rgba(43, 96, 222,1)',
                                    borderColor: 'rgba(0,0,0,1)',
                                    borderWidth: 1,
                                    barPercentage: 0.65,
                                    data :[0,0,0,0,0,0,
                                        this.calculate_avg_of_water_level(
                                            Array.from(this.props.data)
                                            .filter(item => item.location === "LADKRABANG" && item.date === "03/06/2020")
                                            .map(item => (item.water_level))
                                        )
                                    ]
                                },
                                {
                                    label: 'Bangkapi',
                                    backgroundColor: 'rgba(222, 42, 96,1)',
                                    borderColor: 'rgba(0,0,0,1)',
                                    borderWidth: 1,
                                    barPercentage: 0.65,
                                    data : [0,0,0,0,0,0,
                                        this.calculate_avg_of_water_level(
                                            Array.from(this.props.data)
                                            .filter(item => item.location === "BANGKAPI" && item.date === "03/06/2020")
                                            .map(item => (item.water_level))
                                        )
                                    ]
                                },
                                {
                                    label: 'Ladprao',
                                    backgroundColor: 'rgba(42, 222, 168, 1)',
                                    borderColor: 'rgba(0,0,0,1)',
                                    borderWidth: 1,
                                    barPercentage: 0.65,
                                    data : [0,0,0,0,0,0,
                                        this.calculate_avg_of_water_level(
                                            Array.from(this.props.data)
                                            .filter(item => item.location === "LADPRAO" && item.date === "03/06/2020")
                                            .map(item => (item.water_level))
                                        )
                                    ]
                                }
                            ]
                        }}
                        options={{
                            maintainAspectRatio: false,
                            legend:{
                                display:false,
                            },
                            tooltips:{
                    
                            },
                            scales:{
                                xAxes: [{
                                    display: true,
                                    ticks: {
                                        min: 0
                                    },
                                    gridLines: {
                                        offsetGridLines: true
                                    }
                                }],
                                yAxes: [{
                                    display: true,
                                    ticks:{
                                        min: 0
                                    },
                                    gridLines: {
                                        offsetGridLines: true
                                    }
                                }],
                            }
                        }}
                    />
            </div>
        )
    }
}

const mapStateToProps = state => ({ data: state.data });

const mapDispatchToProps = dispatch =>
  bindActionCreators({ requestApiData }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(GraphViewChart);