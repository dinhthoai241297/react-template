const AppConstants = {
    apiRootUrl: process.env.REACT_APP_API,
    contentRootUrl: `${process.env.REACT_APP_API}/file`,
    langKey: 'vi',
}

// User role
export const ROLE_SUPER_USER = 'ROLE_SUPER_USER'
export const ROLE_ADMIN = 'ROLE_ADMIN'

// Pagination config
export const DEFAULT_TABLE_ITEM_SIZE = 10
export const DATE_FORMAT_DISPLAY = 'DD-MM-YYYY'
export const DATE_FORMAT_VALUE = 'YYYY-MM-DD'

// Common status
export const STATUS_INACTIVE = 0
export const STATUS_ACTIVE = 1
export const STATUS_LOCK = -1
export const STATUS_DELETE = -2

// Register form
export const REG_SOURCE_PHONE = 1
export const REG_SOURCE_FACEBOOK = 2
export const REG_SOURCE_GOOGLE = 3

// Gender

export const GENDER_MALE = 1
export const GENDER_FEMALE = 2

export { AppConstants }
