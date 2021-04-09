import React, { useContext } from 'react'
import moment from 'moment'
import ArrowBack from '@material-ui/icons/ArrowBackIosOutlined'
import ArrowForward from '@material-ui/icons/ArrowForwardIos'
import {
    ShedulesCalendarContext
} from '../../../contexts/shedules-calendar-context'

const backDate = (context: any) => {
    const selectedMouth = context.mouth.value

    if(selectedMouth === 0) {
        context.mouth.update(parseInt(moment().endOf('year').format('M')) - 1)
        context.year.update(context.year.value - 1)
    } else {
        context.mouth.update(context.mouth.value - 1)
    }
}

const forwardDate = (context: any) => {
    const selectedMouth = context.mouth.value

    if(selectedMouth === parseInt(moment().endOf('year').format('M')) - 1) {
        context.mouth.update(parseInt(moment().startOf('year').format('M')) - 1)
        context.year.update(context.year.value + 1)
    } else {
        context.mouth.update(context.mouth.value + 1)
    }
}

const CalendarHeader: React.FunctionComponent = () => {
    const context = useContext(ShedulesCalendarContext)

    return (
        <div className="calendar-header-container">
            <button type='button' onClick={(e) => backDate(context)}>
                <ArrowBack/>
            </button>
            <span style={{marginRight: '4px', width: `${50}px`, textAlign: 'center'}}>
                {context.mouthArray?.mouths[context.mouth.value].name}
            </span>
            <span style={{width: `${50}px`, textAlign: 'center'}}>{context.year.value}</span>
            <button type='button' onClick={(e) => forwardDate(context)}>
                <ArrowForward/>
            </button>
        </div>
    )
}

export default CalendarHeader