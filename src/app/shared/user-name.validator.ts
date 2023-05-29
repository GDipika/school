import { AbstractControl, ValidatorFn } from "@angular/forms";

export function forbiddenNameValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
        let forbiddenNameArray = ['deepu', 'rajee', 'raji', 'cherry', 'charan', 'dipika']
        return forbiddenNameArray.includes(control.value) ? { 'NameNotAllowed': 'This name is not allowed' } : null;
    };
}