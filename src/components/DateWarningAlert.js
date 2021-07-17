import React from 'react'
import DateAlert from '../elements/DateAlert'

function DateWarningAlert() {
    return (
        <DateAlert>
            <h2>¡No puede seleccinar fechas anteriores a la actual!</h2>
            <h2>Por favor seleccione otra fecha</h2>
        </DateAlert>
    )
}

export default DateWarningAlert;
