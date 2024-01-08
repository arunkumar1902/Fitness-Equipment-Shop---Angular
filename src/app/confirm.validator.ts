import { FormGroup } from "@angular/forms";

export function ConfirmedValidator(ControlName:string, matchingControlName:string){

  return (formgroup:FormGroup)=>{

    const password=formgroup.controls[ControlName];
    const cpassword=formgroup.controls[matchingControlName];

    if(password.value != cpassword.value){
      cpassword.setErrors({cpassValidator:true});
    }
    else{
      cpassword.setErrors(null);
    }

  }
}


