import { Component } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";

@Component({
  selector: "app-register",
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: "./register.component.html",
  styleUrl: "./register.component.scss",
})
export class RegisterComponent {
  // Register form
  registerForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      name: ["", [Validators.required]],
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(6)]],
    });
  }

  /**
   * Submitting the form.
   */
  onSubmit(): void {
    if (this.registerForm.valid) {
      console.log("Form Submitted", this.registerForm.value);
    } else {
      this.registerForm.markAllAsTouched();
      console.log("Form Invalid");
    }
  }
}
