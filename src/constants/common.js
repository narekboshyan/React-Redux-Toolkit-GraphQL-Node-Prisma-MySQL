export const FIELD_TYPE = {
  text: 'text',
  search: 'search',
  select: 'select',
}

export const FIELD_SIZE = {
  xs: 'xs',
  sm: 'sm',
  md: 'md',
}

export const PICKER_TYPE = {
  dateRange: 'date-range',
  select: 'select',
}

export const FILE_FOLDER_TYPE = {
  folder: 'folder',
}

export const FILE_ROOT_TABLES = {
  file: 'file',
  commonFile: 'commonFile',
}

export const GRID_SIZE = {
  small: 'small',
  large: 'large',
}

export const ITEMS_PER_PAGE = 10
export const Z_INDEX_INCREASED_FOR_HEADER = 1
export const Z_INDEX_INCREASED_FOR_LOADER = 120
export const DELETE_LOADING_TEXT = 'Deleting...'
export const SAVE_LOADING_TEXT = 'Saving...'
export const FETCH_LOADING_TEXT = 'Loading...'
export const UPDATE_LOADING_TEXT = 'Updating...'
export const UPLOAD_LOADING_TEXT = 'Uploading...'
export const IMPORT_LOADING_TEXT = 'Importing...'
export const SIGNING_UP_LOADING_TEXT = 'Signing up...'
export const RESTORE_LOADING_TEXT = 'Restoring...'
export const RESTORE_IMPORTING_TEXT = 'Importing...'
export const SENDING_CONTACT_INFO_TEXT = 'Sending contact info...'

// Activity Status
export const ACTIVITY_STATUS_COMPLETED = 1
export const ACTIVITY_STATUS_SCHEDULED = 2
export const ACTIVITY_STATUS_CANCELLED = 3
export const ACTIVITY_STATUS_BEHIND_SCHEDULE = 4

export const LOG_ACTIVITY_TYPE_ID = 1
export const SCHEDULE_ACTIVITY_TYPE_ID = 2

export const ACTIVITY_MEETING_TYPE_ID = 1
export const ACTIVITY_ONLINE_MEETING_TYPE_ID = 2
export const ACTIVITY_PHONE_CALL_TYPE_ID = 3
export const ACTIVITY_EMAIL_TYPE_ID = 4
export const ACTIVITY_FOLLOW_UP_TYPE_ID = 5

// Bid Request statuses
export const BID_REQUEST_DRAFT_STATUS_ID = 1
export const BID_REQUEST_SENT_STATUS_ID = 2
export const BID_REQUEST_OPEN_STATUS_ID = 3
export const BID_REQUEST_CLOSED_STATUS_ID = 4

// Bid statuses
export const BID_CREATED_STATUS_ID = 1
export const BID_SENT_STATUS_ID = 2
export const BID_REJECTED_FROM_SUB_VENDOR_STATUS_ID = 3
export const BID_REJECTED_FROM_CREATOR_STATUS_ID = 4
export const BID_SUBMITTED_STATUS_ID = 5
export const BID_APPROVED_STATUS_ID = 6
export const BID_CONFIRMED_STATUS_ID = 7
export const BID_REFUSED_TO_DELIVER_ID = 8

// Quantity default
export const QUANTITY_DEFAULT_VALUE = '1'

export const SNACKBAR_TYPE = {
  success: 'success',
  error: 'error',
}

export const COMPANY_USER_STATUSES = {
  enabled: {
    value: 'enabled',
    label: 'Enabled',
    action: 'Enable',
  },
  disabled: {
    value: 'disabled',
    label: 'Disabled',
    action: 'Disable',
  },
  inactive: {
    value: 'inactive',
    label: 'Not activated',
    action: 'Not activated',
  },
}
export const GRID_WITH_TREE_LIST_MODE = 'list'
export const GRID_WITH_TREE_GANTT_CHART_MODE = 'ganttChart'
export const TOOLTIP_MESSAGES = {
  companySettingsDisabled: 'You have made no changes to save or cancel.',
  activityFor: 'You cannot modify this field, since you are creating activity for',
  opportunityClient: 'You cannot modify the client, because you are creating an opportunity for',
  projectClient:
    'You cannot modify the client field, because you are creating the project from opportunity',
  filesUploadLoad: 'Files are being uploaded. Please wait and try again',
}

export const SUCCESS_MESSAGES = {
  createAccountWithoutSubscription:
    'Your account is created. Subscribe to complete the registration.',
  createAccount: 'Your account is created.',
  changedPassword: 'Your password has been changed successfully.',
  saveChanges: 'Your changes have been successfully saved.',
  sendProposal: 'The proposal has been sent to your client/copied emails.',
  sendContactInfo: 'Your message was successfully sent to our support team.',
  costCodeCreated: 'Cost code was successfully added',
  costCategoryCreated: 'Cost category was successfully added',
  approvedBidRequest: 'You have successfully selected the winning bid package.',
  refusedBidRequest: 'You have refused the bid package.',
  refusedWinningBidRequest: 'You have refused the winning bid package.',
  fileFolderDelete:
    'The file was moved to the Deleted tab. You can restore it anytime from Deleted.',
  successfullyDeleted: (name, count) =>
    `${count} ${count > 1 ? `${name}s are` : `${name} is`} successfully deleted.`,
  successfullyAdded: (name, count) =>
    `${count} ${count > 1 ? `${name}s are` : `${name} is`} successfully added.`,

  changedPlan: (planName) =>
    `You have successfully upgraded your company account into ${planName}. `,
  resendPurchaseOrder: 'The purchase order has been resent to your sub/vendor email.',
}

export const ERROR_MESSAGES = {
  alreadyAddedEmail: 'You have already selected this email for CC.',
  matchClientEmail:
    "The proposal is automatically sent to your client email, so you can't choose client mail as CC.",
  clientEmailRemoved:
    'The proposal will automatically be sent to client email, so it was removed from CC.',
  fileUploadError: 'There was a problem uploading this file.',
  fileUploadErrorMaxSize: 'Failed to upload the file. The max size of the file is 50 MB.',
  corruptedFile:
    'There was an error with the file. Please to save it in the right format and try again.',
}

export const ATTACHMENT_STATES = {
  ok: 'ok',
  error: 'error',
  load: 'load',
}

export const ITEM_UNAVAILABLE = 'Oops, this item is unavailable'

export const GRID_ROW_BOTTOM_COMPONENT_MODES = {
  view: 'view',
  webView: 'webView',
  addEdit: 'addEdit',
}
export const BILL_STATUS_PENDING = 'pending'
export const BILL_STATUS_PAID = 'paid'
export const BILL_STATUS_OVERDUE = 'overdue'

export const BILL_TYPE_PENDING = 1
export const BILL_TYPE_PAID = 2
export const BILL_TYPE_OVERDUE = 3

export const BILLS_STATUSES = [
  { typeId: BILL_TYPE_PENDING, status: BILL_STATUS_PENDING },
  { typeId: BILL_TYPE_PAID, status: BILL_STATUS_PAID },
  { typeId: BILL_TYPE_OVERDUE, status: BILL_STATUS_OVERDUE },
]

export const UPLOADED_FILES_INFO_MESSAGE =
  'The max. Size of a file is 50 MB. You can upload the following file types:'

export const ACCEPTED_FILE_FORMATS = [
  '.mp3',
  '.mp4',
  '.aac',
  '.wma',
  '.m4a',
  '.mpg',
  '.wmv',
  '.avi',
  '.jpg',
  '.jpeg',
  '.jfif',
  '.png',
  '.ai',
  '.psd',
  '.svg',
  '.ppt',
  '.pptx',
  '.doc',
  '.docx',
  '.pdf',
  '.txt',
  '.xls',
  'xlsx',
  '.csv',
  '.xml',
  '.zip',
  '.rar',
  '.eml',
  '.msg',
  '.dwg',
  '.ifc',
  '.rvt',
  '.pln',
]

export const LOGO_SIZE_HINT =
  'The max size of the file is 50 MB. You can upload the following file types: .jpg, .png'

export const TIME_VALUES = [
  { label: 'Minute', title: 'minutes', value: 1 },
  { label: 'Hour', title: 'hours', value: 60 },
  { label: 'Day', title: 'days', value: 1440 },
  { label: 'Week', title: 'week', value: 10080 },
  { label: 'Month', title: 'month', value: 43200 },
  { label: 'Year', title: 'year', value: 525600 },
]

export const MIN_DAYS_MAX_MONTHS_TIME_VALUES = [
  { label: 'Day', title: 'days', value: 1440 },
  { label: 'Week', title: 'week', value: 10080 },
  { label: 'Month', title: 'month', value: 43200 },
]

export const SCHEDULED_ITEM_DEFAULT_DEPENDENCY = {
  scheduledItemDependsFromId: null,
  relationType: '',
  lag: '',
}

export const COST_TYPES = {
  lineItems: {
    id: 1,
    value: 'lineItems',
    title: 'Line Items',
  },
  flatRate: {
    id: 2,
    value: 'flatRate',
    title: 'Flat Rate',
  },
  costPlus: {
    id: 3,
    value: 'costPlus',
    title: 'Cost Plus',
  },
}

export const COST_CODE_TYPES = {
  costCode: 'costCode',
  category: 'category',
}

export const COST_CODE_IMPORT_EXCEL_TYPES = {
  common: 'COMMON',
  buildertrend: 'BUILDERTREND',
}

export const COMPANY_SIZES = [
  { id: 1, title: '1-10' },
  { id: 2, title: '10-50' },
  { id: 3, title: '50-100' },
  { id: 4, title: '100-250' },
  { id: 5, title: '250-1000' },
  { id: 6, title: '1000+' },
]

export const MARKUP_TYPES = {
  percent: '%',
  currency: '$',
  perUnit: '$/unit',
}
// 52428800byte  (50mb)
export const MAX_FILE_UPLOAD_SIZE = 52428800

export const IMAGE_FILE_FORMATS = ['jpeg', 'jpg', 'png']

export const BID_RESPONSE_STATUSES = [
  BID_SUBMITTED_STATUS_ID,
  BID_REJECTED_FROM_CREATOR_STATUS_ID,
  BID_REJECTED_FROM_SUB_VENDOR_STATUS_ID,
  BID_APPROVED_STATUS_ID,
  BID_CONFIRMED_STATUS_ID,
  BID_REFUSED_TO_DELIVER_ID,
]

export const MILLISECONDS_OF_A_DAY = 86400000

export const BUTTON_NAMES = {
  create: 'Create',
  send: 'Send',
  doNotSend: "Don't Send",
  update: 'Update',
  reopen: 'Reopen',
  cancel: 'Cancel',
  yes: 'Yes',
}

// Date Time format
export const DATE_FORMAT = 'MM/DD/YYYY'
export const DATE_TIME_FORMAT = 'MM/DD/YYYY HH:mm'
