export const CHANGE_ORDER_RELEASED_STATUS_ID = 1
export const CHANGE_ORDER_APPROVED_STATUS_ID = 2
export const CHANGE_ORDER_REJECTED_STATUS_ID = 3
export const CHANGE_ORDER_DRAFT_STATUS_ID = 4
export const CHANGE_ORDER_UNRELEASED_STATUS_ID = 5

export const CHANGE_ORDER_STATUS_APPROVED = 'Approved'
export const CHANGE_ORDER_STATUS_RELEASED = 'Sent'
export const CHANGE_ORDER_STATUS_DRAFT = 'Draft'
export const CHANGE_ORDER_STATUS_REJECTED = 'Rejected'
export const CHANGE_ORDER_STATUS_UNRELEASED = 'Withdrawn'

export const CHANGE_ORDER_STATUS_INFO = {
  released: { title: CHANGE_ORDER_STATUS_RELEASED, id: CHANGE_ORDER_RELEASED_STATUS_ID },
  approved: { title: CHANGE_ORDER_STATUS_APPROVED, id: CHANGE_ORDER_APPROVED_STATUS_ID },
  rejected: { title: CHANGE_ORDER_STATUS_REJECTED, id: CHANGE_ORDER_REJECTED_STATUS_ID },
  draft: { title: CHANGE_ORDER_STATUS_DRAFT, id: CHANGE_ORDER_DRAFT_STATUS_ID },
  unreleased: { title: CHANGE_ORDER_STATUS_UNRELEASED, id: CHANGE_ORDER_UNRELEASED_STATUS_ID },
}

export const CHANGE_ORDER_CONFIRM_DIALOG_DATA = [
  {
    statusId: CHANGE_ORDER_RELEASED_STATUS_ID,
    title: 'Send Updated Change Order',
    confirmMessage: 'Would you like to send update emails to your trades?',
    cancelActionText: "Don't send",
    updateOnCancelAction: true,
    confirmActionText: 'Send',
  },
  {
    statusId: CHANGE_ORDER_APPROVED_STATUS_ID,
    title: 'Send Updated Change Order',
    confirmMessage:
      'Since the change order is approved by your client, the status will be changed to “Sent” and we will send an email notifying them about the updates. \n Are you sure you want to send out the change order?',
    cancelActionText: 'Cancel',
    updateOnCancelAction: false,
    confirmActionText: 'Yes',
  },
  {
    statusId: CHANGE_ORDER_REJECTED_STATUS_ID,
    title: 'Send Updated Change Order',
    confirmMessage:
      'Since the change order is rejected by your client, the status will be changed to “Sent” and we will send an email notifying them about the updates. \n Are you sure you want to send out the change order?',
    cancelActionText: 'Cancel',
    updateOnCancelAction: false,
    confirmActionText: 'Yes',
  },
  {
    statusId: CHANGE_ORDER_DRAFT_STATUS_ID,
    title: 'Send Change Order',
    confirmMessage:
      'Are you sure you want to send out the change order to your client? They will get web links to the change order and be able to see, approve or reject it.',
    cancelActionText: 'Cancel',
    updateOnCancelAction: false,
    confirmActionText: 'Send',
  },
  {
    statusId: CHANGE_ORDER_UNRELEASED_STATUS_ID,
    title: 'Send Change Order',
    confirmMessage:
      'Are you sure you want to send out the change order to your client? They will get web links to the change order and be able to see, approve or reject it.',
    cancelActionText: 'Cancel',
    updateOnCancelAction: false,
    confirmActionText: 'Send',
  },
]
