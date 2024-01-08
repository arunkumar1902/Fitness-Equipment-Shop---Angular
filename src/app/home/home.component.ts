import { Component, Input, OnInit } from '@angular/core';
import { UserService } from '../user.service';

interface carouselImage {
  imageSrc: string;
  imageAlt: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {

  products:any="";
  @Input() indicators = true;
  controls: boolean = true;


  constructor(private service:UserService){}

    ngOnInit(){
      this.service.homeproduct().subscribe(data=>{
        this.products=data;
      });

      setInterval(() => {
        this.selectedIndex = (this.selectedIndex + 1) % this.images.length;
      }, 4000);


    }

    // slide



    selectedIndex = 0;


    selectImage(index: number): void {
      this.selectedIndex = index;
    }

    onPrevClick(): void {
      if (this.selectedIndex === 0) {
        this.selectedIndex = this.images.length - 1;
      } else {
        this.selectedIndex--;
      }
    }

    onNextClick(): void {
      if (this.selectedIndex === this.images.length - 1) {
        this.selectedIndex = 0;
      } else {
        this.selectedIndex++;
      }
    }

    images = [
      {
        imageSrc:
          '/assets/slider/slider 3.jpg'
      },
      {
        imageSrc:
          '/assets/slider/slider 5.jpg'

      },
      {
        imageSrc:
          '/assets/slider/slider 1.jpg'
      },
      {
        imageSrc:
          '/assets/slider/slider 4.jpg'
      }
    ]
}


