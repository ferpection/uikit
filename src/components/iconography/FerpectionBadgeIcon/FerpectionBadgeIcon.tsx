import React from 'react'

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

export interface FerpectionBadgeIconProps {
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
}

export const FerpectionBadgeIcon: React.FC<FerpectionBadgeIconProps> = ({ borderColor, icon: iconName }) => {
  switch (iconName) {
    case 'config': {
      return <ConfigBadgeIcon borderColor={borderColor} />
    }
    case 'goals': {
      return <GoalsBadgeIcon borderColor={borderColor} />
    }
    case 'incentive': {
      return <IncentiveBadgeIcon borderColor={borderColor} />
    }
    case 'objectives': {
      return <ObjectivesBadgeIcon borderColor={borderColor} />
    }
    case 'planning': {
      return <PlanningBadgeIcon borderColor={borderColor} />
    }
    case 'post-test': {
      return <PostTestBadgeIcon borderColor={borderColor} />
    }
    case 'pre-test': {
      return <PreTestBadgeIcon borderColor={borderColor} />
    }
    case 'screening': {
      return <ScreeningBadgeIcon borderColor={borderColor} />
    }
    case 'target': {
      return <TargetBadgeIcon borderColor={borderColor} />
    }
    case 'test': {
      return <TestBadgeIcon borderColor={borderColor} />
    }
    case 'tasks': {
      return <TaskBadgeIcon borderColor={borderColor} />
    }
    case 'device': {
      return <DeviceBadgeIcon borderColor={borderColor} />
    }
    default:
      return null
  }
}
