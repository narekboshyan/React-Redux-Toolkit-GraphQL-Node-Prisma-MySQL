export const ESTIMATES_LINE_ITEM_FIELDS = {
  costCode: true,
  unitCost: true,
  quantityUnit: true,
  builderCost: true,
  unitMarkup: true,
  totalMarkup: true,
  clientPrice: true,
  note: true,
  remove: true,
  description: true,
}
export const PROPOSAL_LINE_ITEM_FIELDS = {
  costCode: true,
  unitCost: true,
  quantityUnit: true,
  builderCost: true,
  unitMarkup: true,
  totalMarkup: true,
  clientPrice: true,
  note: true,
  remove: true,
  description: true,
}
export const CHANGE_ORDER_LINE_ITEM_FIELDS = {
  costCode: true,
  unitCost: true,
  quantityUnit: true,
  builderCost: true,
  unitMarkup: true,
  totalMarkup: true,
  clientPrice: true,
  note: true,
  remove: true,
  description: true,
}
export const PURCHASE_ORDER_LINE_ITEM_FIELDS = {
  costCode: true,
  unitCost: true,
  quantityUnit: true,
  builderCost: true,
  unitMarkup: false,
  totalMarkup: false,
  clientPrice: false,
  note: true,
  remove: true,
  description: true,
}
export const BID_LINE_ITEM_FIELDS = {
  costCode: true,
  unitCost: false,
  quantityUnit: true,
  unitPrice: true,
  maxUnitPrice: true,
  maxTotalPrice: true,
  builderCost: false,
  unitMarkup: false,
  totalMarkup: false,
  clientPrice: false,
  note: true,
  remove: true,
  description: true,
}

export const BILL_LINE_ITEM_FIELDS = {
  costCode: true,
  unitCost: true,
  quantityUnit: true,
  builderCost: false,
  unitMarkup: false,
  totalMarkup: false,
  clientPrice: true,
  note: true,
  remove: true,
  description: true,
}

export const LINE_ITEM_PARENT_TYPE_ESTIMATE = 'estimate'
export const LINE_ITEM_PARENT_TYPE_PO = 'purchaseOrder'
export const LINE_ITEM_PARENT_TYPE_CO = 'changeOrder'
export const LINE_ITEM_PARENT_TYPE_PROPOSAL = 'proposal'
export const LINE_ITEM_PARENT_TYPE_BID = 'bid'
export const LINE_ITEM_PARENT_TYPE_BILL = 'bill'
