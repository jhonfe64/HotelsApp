import React from 'react'
import DateAlert from '../elements/DateAlert'

function DateWarningAlert({message}) {
    return (
        <DateAlert>
            <h2>{message}</h2>
        </DateAlert>
    )
}

export default DateWarningAlert;
