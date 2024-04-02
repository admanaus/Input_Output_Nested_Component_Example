import { Component, EventEmitter, Input, Output } from '@angular/core';
import {Hero} from '../hero';
import { FormsModule } from '@angular/forms';
import { UpperCasePipe } from '@angular/common';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero-detail',
  standalone: true,
  imports: [
    FormsModule,
    UpperCasePipe,
    CommonModule
  ],
  templateUrl: './hero-detail.component.html',
  styleUrl: './hero-detail.component.css'
})
export class HeroDetailComponent {

  @Input() hero?: Hero;
  @Output() done = new EventEmitter<string>();

  whenDone() {
    this.done.emit(this.hero.name);
  }

}
