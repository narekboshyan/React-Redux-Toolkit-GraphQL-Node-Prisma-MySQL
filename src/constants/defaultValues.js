import { QUANTITY_DEFAULT_VALUE, MARKUP_TYPES } from 'constants/common'
import { UNIT_TYPES } from 'mocks/data'

export const LINE_ITEMS_DEFAULT_VALUE_WITHOUT_MARKUP = [
  {
    costCode: null,
    internalId: '0',
    quantity: QUANTITY_DEFAULT_VALUE,
    total: '',
    unit: UNIT_TYPES[0].title,
    unitPrice: '',
  },
]

export const LINE_ITEMS_DEFAULT_VALUE_FOR_BIDS = [
  {
    costCode: null,
    internalId: '0',
    quantity: QUANTITY_DEFAULT_VALUE,
    unit: UNIT_TYPES[0].title,
    maxUnitPrice: '',
    description: null,
    notes: null,
  },
]

export const LINE_ITEMS_NONE_VALUE = [
  {
    costCode: null,
    unitPrice: '',
    unit: UNIT_TYPES[0].title,
    quantity: QUANTITY_DEFAULT_VALUE,
    builderCost: null,
    markup: MARKUP_TYPES.percent,
    markupValue: '',
    description: '',
    notes: '',
  },
]

export const MILESTONES_DEFAULT_VALUE = [{ name: '', price: '', unit: '%' }]
