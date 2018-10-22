import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

import { CalculatorService } from './calculator.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  constructor(private fb:FormBuilder, private service: CalculatorService) {}

  calculatorForm = this.fb.group({
    operandA: ['', Validators.required],
    operandB: ['', Validators.required],
    result: [''],
  });
  
  add() {
    if (this.calculatorForm.valid) {
      this.service.add(this.calculatorForm.value).subscribe(
        data => {
          this.calculatorForm.setValue(data)
        },
        error => {
          console.log(error)
        }
      )
    }
  }
  
}
