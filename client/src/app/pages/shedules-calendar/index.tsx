import React, { useState } from 'react'
import { 
    ShedulesCalendarContext,
    ShedulesCalendarContextTypes
} from '../../contexts/shedules-calendar-context'
import moment from 'moment'
import Calendar from './calendar/index'
import { mouthsArray } from '../../../data/date/mouths'

const ShedulesCalendarPage: React.FunctionComponent = () => {
    moment.locale('ru')
    
    const [year, updateYear] = useState(new Date().getFullYear())
    const [mouth, updateMouth] = useState(new Date().getMonth())
    const [day, updateDay] = useState(new Date().getMonth())

    const initialContextValues: ShedulesCalendarContextTypes = {
        year: {
            value: year,
            update: updateYear
        },
        mouth: {
            value: mouth,
            update: updateMouth
        },
        day: {
            value: day,
            update: updateDay
        },
        mouthArray: mouthsArray(year).filter(item => item.lang === moment.locale())[0]
    }
    
    return (
        <ShedulesCalendarContext.Provider value={initialContextValues}>
            <div className="container shedules-calendar-container">
                <div className="shedules-container"></div>
                <Calendar/>
            </div>
        </ShedulesCalendarContext.Provider>
    )
}

export default ShedulesCalendarPage