import React from 'react';
import { Calendar } from "@fullcalendar/core";

import FullcalendarObjectMapper from './fullcalendarObjectMapper';

export default class FullCalendar extends React.PureComponent {
    constructor (props) {
        super(props);
        this.fullcalendarObjectMapper = new FullcalendarObjectMapper();
        this.rootEl = null;
        this.calendar = null;
        this.date = new Date();
    }

    componentDidMount() {
        this.createCalendar();
    }

    componentDidUpdate() {
        this.destroyCalendar();
        this.createCalendar();
    }

    createCalendar() {
        if (this.rootEl) {
            const objectMapperSettings = this.fullcalendarObjectMapper.getSettings(this.props);
            this.calendar = new Calendar(this.rootEl, objectMapperSettings);
            this.calendar.render();
        }
    }

    destroyCalendar() {
        if (this.calendar) {
            this.calendar.destroy();
        }
    }

    render() {
        return (
            <div ref={(ref) => { this.rootEl = ref; }}></div>
        )
    }
}
