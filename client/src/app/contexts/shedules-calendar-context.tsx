import React from 'react'
import { mouthsArray, MouthDataTypes } from '../../data/date/mouths'

interface ValuesTypes {
    value: number,
    update: (num: number) => void
}

export interface ShedulesCalendarContextTypes {
    year: ValuesTypes,
    mouth: ValuesTypes,
    day: ValuesTypes,
    mouthArray?: MouthDataTypes | null
}

const defaultValues: ShedulesCalendarContextTypes = {
    year: {
        value: new Date().getFullYear(),
        update: () => {}
    },
    mouth: {
        value: new Date().getMonth(),
        update: () => {}
    },
    day: {
        value: new Date().getDay(),
        update: () => {}
    },
    mouthArray: null
}

export const ShedulesCalendarContext 
    = React.createContext<ShedulesCalendarContextTypes>(defaultValues)