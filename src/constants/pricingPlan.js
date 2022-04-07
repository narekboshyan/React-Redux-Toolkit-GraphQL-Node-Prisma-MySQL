import React from 'react'
import { ReactComponent as StarIcon } from 'assets/img/icons/starter_plan_icon.svg'
import { ReactComponent as StarButtonIcon } from 'assets/img/icons/starter_button_icon_24.svg'
import { ReactComponent as CrownIcon } from 'assets/img/icons/pro_plan_crown_icon_24.svg'
import viewAllProjectImage from 'assets/img/subscription/view_all_projects.png'

export const FREE_PLAN = { id: process.env.REACT_APP_STRIPE_FREE_PLAN_ID, name: 'Free' }
export const STARTER_PLAN = {
  id: process.env.REACT_APP_STRIPE_STARTER_PLAN_ID,
  name: 'Starter',
  icon: <StarIcon />,
  buttonIcon: <StarButtonIcon />,
}
export const PRO_PLAN = {
  id: process.env.REACT_APP_STRIPE_PRO_PLAN_ID,
  name: 'Pro',
  icon: <CrownIcon />,
}

export const lockedImages = {
  projects: viewAllProjectImage,
}

export const DOWNGRADED = 'downgraded'
