import React, {Component} from 'react';
import {Bar} from 'react-chartjs-2';
import { add_date_label, calculate_avg_of_water_level_new_version } from '../HelpersFunction';

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { requestApiData } from "../../actions";

class LadpraoChart extends Component {
    componentDidMount(){
        this.props.requestApiData();
    }

    render(){
        return(
            <div className="chart">
                    <Bar
                        data={{
                            labels : add_date_label(),
                            datasets : [
                                {
                                    label: 'Ladprao',
                                    backgroundColor: 'rgba(42, 222, 168, 1)',
                                    borderColor: 'rgba(0,0,0,1)',
                                    borderWidth: 1,
                                    barPercentage: 0.65,
                                    data :[0,0,0,0,
                                        calculate_avg_of_water_level_new_version(
                                            Array.from(this.props.data)
                                            .filter(item => item.location === "LADPRAO" && item.date === "03/06/2020")
                                            .map(item => (item.water_level))
                                        )
                                        ,
                                        calculate_avg_of_water_level_new_version(
                                            Array.from(this.props.data)
                                            .filter(item => item.location === "LADPRAO" && item.date === "04/06/2020")
                                            .map(item => (item.water_level))
                                        )
                                        ,
                                        calculate_avg_of_water_level_new_version(
                                            Array.from(this.props.data)
                                            .filter(item => item.location === "LADPRAO" && item.date === "05/06/2020")
                                            .map(item => (item.water_level))
                                        )
                                    ]
                                },                            
                            ]
                        }}
                        options={{
                            maintainAspectRatio: true,
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
                                        min: 0,
                                        callback: function(value, index, values) {
                                            return value + ' %';
                                        }
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

export default connect(mapStateToProps, mapDispatchToProps)(LadpraoChart);