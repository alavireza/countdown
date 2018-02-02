import React, { Component } from 'react';
import './App.css';

class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
        };
    }

    componentWillMount() {
        this.getTimeUntilDeadLine(this.props.deadline);
    }

    componentDidMount() {
        setInterval(() => this.getTimeUntilDeadLine(this.props.deadline), 1000);
    }

    lead(num) {
        return num < 10 ? '0' + num : num;
    }

    getTimeUntilDeadLine(deadline) {
        const time = Date.parse(deadline) - Date.parse(new Date());

        if(time < 0) {
            this.setState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

        } else {
            const seconds = Math.floor((time/1000)%60);
            const minutes = Math.floor((time/1000/60)%60);
            const hours = Math.floor((time/(1000*60*60))%24);
            const days = Math.floor(time/(1000*60*60*24));

            this.setState({ days, hours, minutes, seconds });
        }

    }

    render() {
        return(
            <div>
                <div className="Clock-days">{this.lead(this.state.days)} Days</div>
                <div className="Clock-hours">{this.lead(this.state.hours)} Hours</div>
                <div className="Clock-minutes">{this.lead(this.state.minutes)} Minutes</div>
                <div className="Clock-seconds">{this.lead(this.state.seconds)} Seconds</div>
            </div>
        );
    }
}
export default Clock;
