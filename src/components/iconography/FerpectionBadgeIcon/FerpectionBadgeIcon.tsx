import { FC } from 'react'

import { Color } from '../../../colors'
import { TaskBadgeIcon } from './TaskBadgeIcon'
import { TestBadgeIcon } from './TestBadgeIcon'
import { TargetBadgeIcon } from './TargetBadgeIcon'
import { ScreeningBadgeIcon } from './ScreeningtBadgeIcon'
import { PreTestBadgeIcon } from './PreTestBadgeIcon'
import { PostTestBadgeIcon } from './PostTestBadgeIcon'
import { PlanningBadgeIcon } from './PlanningBadgeIcon'
import { ObjectivesBadgeIcon } from './ObjectivesBadgeIcon'
import { IncentiveBadgeIcon } from './IncentiveBadgeIcon'
import { GoalsBadgeIcon } from './GoalsBadgeIcon'
import { ConfigBadgeIcon } from './ConfigBadgeIcon'
import { DeviceBadgeIcon } from './DeviceBadgeIcon'
import { GraphBadgeIcon } from './GraphBadgeIcon'

export interface FerpectionBadgeIconProps {
  className?: string
  borderColor?: Color
  icon:
    | 'tasks'
    | 'test'
    | 'target'
    | 'screening'
    | 'post-test'
    | 'pre-test'
    | 'planning'
    | 'objectives'
    | 'incentive'
    | 'goals'
    | 'config'
    | 'device'
    | 'graph'
}

export const FerpectionBadgeIcon: FC<FerpectionBadgeIconProps> = ({ icon: iconName, ...otherProps }) => {
  switch (iconName) {
    case 'config': {
      return <ConfigBadgeIcon {...otherProps} />
    }
    case 'goals': {
      return <GoalsBadgeIcon {...otherProps} />
    }
    case 'incentive': {
      return <IncentiveBadgeIcon {...otherProps} />
    }
    case 'objectives': {
      return <ObjectivesBadgeIcon {...otherProps} />
    }
    case 'planning': {
      return <PlanningBadgeIcon {...otherProps} />
    }
    case 'post-test': {
      return <PostTestBadgeIcon {...otherProps} />
    }
    case 'pre-test': {
      return <PreTestBadgeIcon {...otherProps} />
    }
    case 'screening': {
      return <ScreeningBadgeIcon {...otherProps} />
    }
    case 'target': {
      return <TargetBadgeIcon {...otherProps} />
    }
    case 'test': {
      return <TestBadgeIcon {...otherProps} />
    }
    case 'tasks': {
      return <TaskBadgeIcon {...otherProps} />
    }
    case 'device': {
      return <DeviceBadgeIcon {...otherProps} />
    }
    case 'graph':
      return <GraphBadgeIcon {...otherProps} />
    default:
      return null
  }
}
