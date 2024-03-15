import { Time } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-obs',
  standalone: true,
  imports: [],
  templateUrl: './obs.component.html',
  styleUrl: './obs.component.css',
})
export class OBSComponent implements OnInit, OnDestroy {
  observable1: Observable<any> = new Observable();
  listener!: Subscription;
  timer: number = 0;
  ngOnInit(): void {
    setInterval(() => {
      this.timer++;
    }, 1000);
    this.observable1 = new Observable((observer) => {
      setInterval(() => {
        if (this.timer >= 10) observer.complete();
        observer.next('Hello Mate!');
      }, 3000);
    });
    this.listener = this.observable1.subscribe({
      next: (data) => {
        console.log(data);
      },
      complete: () => {
        console.log('Completed Ysta Mabrouk');
      },
    });
  }

  ngOnDestroy(): void {
    this.listener.unsubscribe();
  }
}
