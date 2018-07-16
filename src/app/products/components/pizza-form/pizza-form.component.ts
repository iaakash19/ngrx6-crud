import { map } from "rxjs/operators";
import { Pizza } from "./../../models/pizza.model";
import {
  Component,
  OnInit,
  Input,
  Output,
  OnChanges,
  SimpleChanges
} from "@angular/core";
import { Topping } from "../../models/topping.model";
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators
} from "@angular/forms";
import { EventEmitter } from "events";

@Component({
  selector: "app-pizza-form",
  templateUrl: "./pizza-form.component.html",
  styleUrls: ["./pizza-form.component.css"]
})
export class PizzaFormComponent implements OnInit, OnChanges {
  @Input() pizza: Pizza;
  @Input() toppings: Array<Topping>;

  form: FormGroup = this.fb.group({
    name: ["", Validators.required],
    toppings: [[]]
  });

  //@Output() selected = new EventEmitter<Pizza>();

  constructor(private fb: FormBuilder) {}



  get nameControl() {
    return this.form.get("name") as FormControl;
  }

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {

    if (this.pizza && this.pizza.id) {
      this.form.patchValue(this.pizza);
    }

    this.form
      .get("toppings")
      .valueChanges.pipe(map(toppings => toppings.map(topping => topping.id)))
      .subscribe(value => {
        console.log("On Selection", value);
      });
  }
}
