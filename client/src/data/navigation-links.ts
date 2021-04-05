import { OverridableComponent } from '@material-ui/core/OverridableComponent'
import { SvgIconTypeMap } from '@material-ui/core'

import Home from '@material-ui/icons/HomeOutlined'
import Tasks from '@material-ui/icons/CheckCircleOutline'
import Calendar from '@material-ui/icons/LayersOutlined'
import Device from '@material-ui/icons/DeviceHubOutlined'
import Settings from '@material-ui/icons/TuneOutlined'

type NavigationLinkArrayTypes = {
    name: string,
    url: string
    Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>,
}

export const navigationLinks: Array<NavigationLinkArrayTypes> = [
    {
        name: 'Главная',
        Icon: Home,
        url: '/'
    },
    {
        name: 'Календарь',
        Icon: Calendar,
        url: '/calendar'
    },
    {
        name: 'Задачи',
        Icon: Tasks,
        url: '/tasks'
    },
    {
        name: 'Оборудование',
        Icon: Device,
        url: '/devices'
    },
    {
        name: 'Настройки',
        Icon: Settings,
        url: '/settings'
    }
]