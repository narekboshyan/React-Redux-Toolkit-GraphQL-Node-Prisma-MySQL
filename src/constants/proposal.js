import { ReactComponent as CheckAllIcon } from 'assets/img/icons/po_status/approve.svg'
import { ReactComponent as RejectIcon } from 'assets/img/icons/po_status/reject.svg'
import { ReactComponent as DraftIcon } from 'assets/img/icons/po_status/draft.svg'
import { ReactComponent as WithdrawnIcon } from 'assets/img/icons/po_status/unrelease.svg'
import { ReactComponent as SentIcon } from 'assets/img/icons/po_status/release.svg'
import {
  DARK_BLUE_COLOR,
  DARK_RED_COLOR,
  LIGHT_BLUE_COLOR,
  DARK_GREEN_COLOR,
  ORANGE_COLOR,
} from './colors'

export const PROPOSAL_STATUS_RELEASED = { title: 'Sent', id: 1 } // Former Released Status
export const PROPOSAL_STATUS_APPROVED = { title: 'Approved', id: 2 }
export const PROPOSAL_STATUS_REJECTED = { title: 'Rejected', id: 3 }
export const PROPOSAL_STATUS_DRAFT = { title: 'Draft', id: 4 }
export const PROPOSAL_STATUS_UNRELEASED = { title: 'Withdrawn', id: 5 } // Former Unreleased Status
export const PROPOSAL_STATUS_OUTDATED = { title: 'Outdated', id: 6 }
export const PROPOSAL_STATUS_REQUEST_AN_UPDATE = { title: 'Requested an update', id: 7 }

export const DISABLED_FIELD_STATUSES_ID_FOR_PROPOSAL = [PROPOSAL_STATUS_APPROVED.id]

export const PROPOSAL_STATUS_BUILDER = {
  [PROPOSAL_STATUS_APPROVED]: { color: DARK_GREEN_COLOR, icon: CheckAllIcon },
  [PROPOSAL_STATUS_REJECTED]: { color: DARK_RED_COLOR, icon: RejectIcon },
  [PROPOSAL_STATUS_DRAFT]: { color: DARK_BLUE_COLOR, icon: DraftIcon },
  [PROPOSAL_STATUS_RELEASED]: { color: ORANGE_COLOR, icon: SentIcon },
  [PROPOSAL_STATUS_UNRELEASED]: { color: LIGHT_BLUE_COLOR, icon: WithdrawnIcon },
}

export const PROPOSAL_PREVIEW_SUBTITLE = 'This is what client will see when you send the proposal.'

export const FOLLOW_UP_SETTINGS_BUTTON_TOOLTIP =
  'We send follow-up emails automatically according to the automation rules you define. Click on the button to navigate to the Automated follow-up settings page'
