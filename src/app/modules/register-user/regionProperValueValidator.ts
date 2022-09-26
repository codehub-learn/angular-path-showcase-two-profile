import {AbstractControl, ValidationErrors, ValidatorFn} from "@angular/forms";

export function regionProperValueValidator(regions: string[]): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    console.log(control);
    let selectedRegion = control.value;
    if (selectedRegion == "Choose a region...*" || !regions.includes(selectedRegion)) {
      return {regionProperValue: true};
    }
    return null;
  }
}
