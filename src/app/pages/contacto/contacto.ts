import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';

@Component({
  selector: 'app-contacto',
  imports: [ReactiveFormsModule, ],
  templateUrl: './contacto.html',
  styleUrl: './contacto.css',
})
export class Contacto {
  private fb = inject(FormBuilder);
  private http = inject(HttpClient);

  contactForm: FormGroup = this.fb.group({
    nombre:  ['', Validators.required],
    email:   ['', [Validators.required, Validators.email]],
    mensaje: ['', Validators.required]
  });

  enviado = false;

  onSubmit() {
    if (this.contactForm.invalid) return;

    this.http.post(
      'https://formspree.io/f/maqadyvd',
      this.contactForm.value,
      { headers: { 'Accept': 'application/json' } }
    ).subscribe({
      next: () => {
        this.enviado = true;
        this.contactForm.reset();
      },
      error: (err: any) => console.error(err)
    });
  }

}
