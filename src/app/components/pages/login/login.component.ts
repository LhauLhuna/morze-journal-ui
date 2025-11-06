import { Component } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-public',
  standalone: true,
  imports: [
    FormsModule,
    FloatLabelModule,
    InputTextModule
  ],
  templateUrl: './login.component.html',
})

export class LoginComponent {
  value3: string = '';
}
