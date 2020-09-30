import { FormErrors } from "./form-errors";
import { FormValue } from "./form-props";

export interface FormValidator {
  (value: FormValue): FormErrors
}
