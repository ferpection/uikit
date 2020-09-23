export interface FormErrorsData {
  [dataName: string]: boolean | number | string | symbol | null | undefined
}

export interface FormErrors {
  [errorKey: string]: boolean | FormErrorsData
}
