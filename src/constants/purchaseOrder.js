import { ReactComponent as CheckAllIcon } from 'assets/img/icons/po_status/approve.svg'
import { ReactComponent as RejectIcon } from 'assets/img/icons/po_status/reject.svg'
import { ReactComponent as DraftIcon } from 'assets/img/icons/po_status/draft.svg'
import { ReactComponent as UnreleaseIcon } from 'assets/img/icons/po_status/unrelease.svg'
import { ReactComponent as ReleaseIcon } from 'assets/img/icons/po_status/release.svg'
import { ReactComponent as CompleteIcon } from 'assets/img/icons/po_status/completed.svg'
import {
  DARK_BLUE_COLOR,
  DARK_RED_COLOR,
  LIGHT_BLUE_COLOR,
  DARK_GREEN_COLOR,
  ORANGE_COLOR,
} from './colors'

export const PURCHASE_ORDER_RELEASED_STATUS_ID = 1
export const PURCHASE_ORDER_APPROVED_STATUS_ID = 2
export const PURCHASE_ORDER_REJECTED_STATUS_ID = 3
export const PURCHASE_ORDER_DRAFT_STATUS_ID = 4
export const PURCHASE_ORDER_UNRELEASED_STATUS_ID = 5
export const PURCHASE_ORDER_COMPLETE_STATUS_ID = 6

export const PURCHASE_ORDER_STATUS_APPROVED = 'Approved'
export const PURCHASE_ORDER_STATUS_RELEASED = 'Sent'
export const PURCHASE_ORDER_STATUS_DRAFT = 'Draft'
export const PURCHASE_ORDER_STATUS_COMPLETE = 'Completed'
export const PURCHASE_ORDER_STATUS_UNRELEASED = 'Withdrawn'
export const PURCHASE_ORDER_STATUS_REJECTED = 'Rejected'

export const PURCHASE_ORDER_PREVIEW_SUBTITLE =
  'This is what client will see when you send the purchase order.'

export const PURCHASE_ORDER_STATUS_BUILDER = {
  [PURCHASE_ORDER_STATUS_APPROVED]: { color: DARK_GREEN_COLOR, icon: CheckAllIcon },
  [PURCHASE_ORDER_STATUS_REJECTED]: { color: DARK_RED_COLOR, icon: RejectIcon },
  [PURCHASE_ORDER_STATUS_DRAFT]: { color: DARK_BLUE_COLOR, icon: DraftIcon },
  [PURCHASE_ORDER_STATUS_RELEASED]: { color: ORANGE_COLOR, icon: ReleaseIcon },
  [PURCHASE_ORDER_STATUS_COMPLETE]: { color: LIGHT_BLUE_COLOR, icon: CompleteIcon },
  [PURCHASE_ORDER_STATUS_UNRELEASED]: { color: LIGHT_BLUE_COLOR, icon: UnreleaseIcon },
}

export const PURCHASE_ORDER_CONFIRM_DIALOG_DATA = [
  {
    statusId: PURCHASE_ORDER_RELEASED_STATUS_ID,
    title: 'Send Updated Purchase Order',
    confirmMessage: 'Would you like to send update email to your trade partner?',
    cancelActionText: "Don't send",
    updateOnCancelAction: true,
    confirmActionText: 'Send',
  },
  {
    statusId: PURCHASE_ORDER_APPROVED_STATUS_ID,
    title: 'Send Updated Purchase Order',
    confirmMessage:
      'Since the purchase order is approved by sub/vendor, the status will be changed to “Sent” and we will send an email notifying about the updates. \n Are you sure you want to send out the purchase order?',
    cancelActionText: 'Cancel',
    updateOnCancelAction: false,
    confirmActionText: 'Yes',
  },
  {
    statusId: PURCHASE_ORDER_REJECTED_STATUS_ID,
    title: 'Send Updated Purchase Order',
    confirmMessage:
      'Since the purchase order is rejected by sub/vendor, the status will be changed to “Sent” and we will send an email notifying about the updates. \n Are you sure you want to send out the purchase order?',
    cancelActionText: 'Cancel',
    updateOnCancelAction: false,
    confirmActionText: 'Yes',
  },
  {
    statusId: PURCHASE_ORDER_DRAFT_STATUS_ID,
    title: 'Send Purchase Order',
    confirmMessage:
      'Are you sure you want to send out the purchase order to your trade partner? The email recipient will get web link to the purchase order and be able to see, approve or reject it.',
    cancelActionText: 'Cancel',
    updateOnCancelAction: false,
    confirmActionText: 'Send',
  },
  {
    statusId: PURCHASE_ORDER_UNRELEASED_STATUS_ID,
    title: 'Send Purchase Order',
    confirmMessage:
      'Are you sure you want to send out the purchase order to sub/vendor? Your partner will get web link to the purchase order and be able to see, approve or reject it.',
    cancelActionText: 'Cancel',
    updateOnCancelAction: false,
    confirmActionText: 'Send',
  },
  {
    statusId: PURCHASE_ORDER_COMPLETE_STATUS_ID,
    title: 'Send Updated Purchase Order',
    confirmMessage:
      'Are you sure you want to send updates of purchase order to your trade partner?',
    cancelActionText: "Don't send",
    updateOnCancelAction: true,
    confirmActionText: 'Send',
  },
]
