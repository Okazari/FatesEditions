import DisplayStats from './DisplayStats'
import DisplayItems from './DisplayItems'

const GamePanels = [
  {
    key: 'stats',
    icon: 'equalizer',
    component: DisplayStats,
  },
  {
    key: 'items',
    icon: 'business_center',
    component: DisplayItems,
  },
]

export default GamePanels
