import React from 'react';
import { graphql, useStaticQuery } from "gatsby";
const { v4: uuidv4 } = require('uuid');
import styled from 'styled-components';

import Moment from 'react-moment';
import 'moment-timezone';

const EventStyles = styled.div`
  .date {
    color: ${(props) => props.theme.colors.orange_50};
  }
`

function CalendarDates() {  
 
 const CalendarData = useStaticQuery(graphql`
      query {
        calendarData {
          records {
            fields {
            date: Start_Time
            title: Title
            duration: Duration
            Link
            }
          }
          id
      }
    }
  `);

const Events = CalendarData.calendarData.records
// let local = moment();

return (
  <div >         
    {Events.map((event) => (
      <EventStyles className='mb-2' key={uuidv4()}>
        <Moment className='mb-0 date'  tz="America/Los_Angeles" format='MM/DD/YYYY h:mma z'>{event.fields.date}</Moment>
        <div>{ event.fields.Link ? (<a  href={event.fields.Link} target="_blank" rel="noopener">{event.fields.title} →</a>)  : event.fields.title }</div>
      </EventStyles>  
      ))}
              
    </div>
  );
}


export default CalendarDates;

