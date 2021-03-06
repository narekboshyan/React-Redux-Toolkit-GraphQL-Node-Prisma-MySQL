export const VALIDATION_MESSAGES = {
  flatRateRequired: 'Please, fill the flat rate.',
  costPlusRequired: 'Please, fill the cost plus',
  clientRequired: 'Please, select the client.',
  unitRequired: 'Please, select the unit.',
  roleTitleRequired: 'Please, enter the role title.',
  orderNameRequired: 'Please, fill in the change order name.',
  payToRequired: 'Please, select the sub/vendor.',
  purchaseOrderTitleRequired: 'Please, fill in the name for PO.',
  roleRequired: 'Please, fill in the role.',
  codeRequired: 'Please, fill in the code.',
  quantityRequired: 'Enter item quantity',
  unitCostRequired: 'Enter the unit cost',
  unitPriceRequired: 'Enter unit price',
  maxUnitPriceRequired: 'Enter max unit price',
  costCodeRequired: 'Select cost code',
  code: 'Code shall contain at least a letter or a number.',
  requiredDate: 'Please, select the date.',
  negativeDateTimeDuration: 'End date cannot be earlier than start date.',
  requiredEffectiveFor: 'Please select the effective for',
  requiredTitle: 'Please, fill in the title.',
  invalidEmail: 'Please, enter a valid email.',
  requiredEmail: 'Please, fill in the email.',
  requiredRecoveryCode: 'Please fill in the recovery code',
  requiredPassword: 'Please, fill in the password.',
  requiredOpportunity: 'Please select the opportunity',
  passwordMin4: 'Password shall contain at least 4 characters.',
  requiredField: 'This field is required',
  olderDate: 'Select a future date',
  afterStartDate: "End date can't be before start date",
  beforeEndDate: "Start date can't be after end date",
  positiveNumber: 'Please, enter a positive number.',
  integer: 'Enter integer number',
  number: 'Enter number',
  date: 'Enter date',
  requiredDueDate: 'Please, fill in the due date.',
  invalidValue: 'Enter valid value',
  invalidPhoneNumber: 'Please, enter a valid phone number.',
  requiredPhoneNumber: 'Please fill in the phone number.',
  minCountOfTeamMember: 'At least a team member shall have access to the project.',
  minCountOfUserProjects: 'At least one project should be selected',
  lessThan0: 'This field should only accept positive values',
  moreThan100: 'This field should only accept values less than 100',
  dependentFieldsInRrow: 'fill this field or remove this row',
  minChangeOrderCount: 'At least one item should be added',
  nameRequired: 'Please, fill in the name.',
  signUpEmailRequired: 'Please, fill in the email address.',
  requiredCompanyName: 'Please, fill in the company name.',
  phoneRequired: 'Please, fill in the phone number.',
  invalidCredentials: 'Please, enter valid card credentials.',
  typeRequired: 'Please, select the type',
  statusRequired: 'Please select the status.',
  addressRequired: 'Please, fill in the address.',
  selectAssignee: 'Please, select the assignee',
  minItemsCountBill: 'Please, add at least a line item to save the bill.',
  minItemsCountPO: 'Please, add at least a line item to save the purchase order.',
  minItemsCountProposal: 'Please, add at least a line item to save the proposal.',
  minItemsCountBidRequest: 'Please, add at least a line item to save the bid request.',
  minMaxConfidenceLevel: 'Confidence level can be 0-100%',
  minItemsCountSubVendors: 'Please, add at least a sub/vendor.',
  activityForRequired: 'Please, select the activity For.',
  invalidURL: 'Please, enter a valid URL.',
  requiredAssigneeWhenReminderIsSet:
    'Please choose the assignee, who will receive reminder email notifications.',
  templateNameRequired: 'Please, fill in the template name.',
  templateContractOrFileRequired:
    'Please fill in the contract body and/or select a file to save the template.',
  priceRequired: 'Please fill in the payment.',
  sumPayment: 'The sum of payment% cannot exceed 100%.',
  sumAmount: 'The max sum of payment amount shall not exceed the total price of proposal:',
  bidPackageRequiresOneValue: 'Please fill in the bid package.',
  bidOfferRequiresOneValue: 'Please fill in the bid offer.',
  maxTotalPrice:
    'The total amount offered by you exceeds the max total price suggested by contractor.',
  invalidEffectiveDate: 'Your document is expired, please update it.',
  removedConfirmedSubVendor: "You can't remove confirmed sub/vendor",
}
export const NAN_ERROR_MESSAGE = 'Argument should be number'
export const NEGATIVE_NUMBER_ERROR_MESSAGE = 'Arguments can not be negative numbers'
export const DIVIDING_BY_ZERO_ERROR_MESSAGE = 'Number can not divide by zero'

export const GLOBAL_ERROR_MESSAGES = {
  somethingWentWrong: 'Something went wrong',
  validMailErrorMessage: 'Please enter a valid email',
  networkErrorMessage: 'Please check your connection and try again',
}
// this object must be the same here and in backend *****************************************************
export const ERROR_CODES = {
  authorization: 'AUTHORIZATION',
  authentication: 'AUTHENTICATION',
  invalidData: 'INVALID_DATA',
  permissionDenied: 'PERMISSION_DENIED',
  existingCostCode: 'EXISTING_COST_CODE',
  existingPaymentSchedule: 'EXISTING_PAYMENT_SCHEDULE',
}
// this object must be the same here and in backend *****************************************************
