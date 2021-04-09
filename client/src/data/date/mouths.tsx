type MouthArrayTypes = {
    name: string,
    days: number
}

export type MouthDataTypes = {
    lang: string,
    mouths: Array<MouthArrayTypes>
}

export const mouthsArray = (currentYear: number): Array<MouthDataTypes> => {
    const februarDays: number 
        = isLeapYear(currentYear) ? 29 : 28
    
    return [
        {
            lang: 'ru',
            mouths: [
                { name: 'Январь', days: 31 },
                { name: 'Февраль', days: februarDays },
                { name: 'Март', days: 31 },
                { name: 'Апрель', days: 30 },
                { name: 'Май', days: 31 },
                { name: 'Июнь', days: 30 },
                { name: 'Июль', days: 31 },
                { name: 'Август', days: 31 },
                { name: 'Сентябрь', days: 30 },
                { name: 'Октябрь', days: 31 },
                { name: 'Ноябрь', days: 30 },
                { name: 'Декабрь', days: 31 }
            ]
        }
    ]
}

const isLeapYear: Function = (currentYear: number): boolean => {
    return ((currentYear % 4 === 0) && (currentYear % 100 !== 0)) || (currentYear % 400 == 0)
}