import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-musica',
  templateUrl: './musica.page.html',
  styleUrls: ['./musica.page.scss'],
})
export class MusicaPage implements OnInit {

  audio: any;
  isPlaying1: boolean = false;
  isPlaying2: boolean = false;
  isPlaying3: boolean = false;
  isPlaying4: boolean = false;



  constructor() { }

  ngOnInit() {
  }

  playMusic1(){
    this.audio = new Audio();
    this.audio.src='../../assets/song.mp3';
    this.audio.load();
    this.audio.play();
    this.isPlaying1 = true;

  }

  playMusic2(){
    this.audio = new Audio();
    this.audio.src='../../assets/mirrorball.mp3';
    this.audio.load();
    this.audio.play();
    this.isPlaying2 = true;

  }

  playMusic3(){
    this.audio = new Audio();
    this.audio.src='../../assets/littlefreak.mp3';
    this.audio.load();
    this.audio.play();
    this.isPlaying3 = true;

  }

  playMusic4(){
    this.audio = new Audio();
    this.audio.src='../../assets/allthistime.mp3';
    this.audio.load();
    this.audio.play();
    this.isPlaying4 = true;

  }

  pauseMusic1(){
    this.audio.pause();
    this.isPlaying1 = false;
  }
  pauseMusic2(){
    this.audio.pause();
    this.isPlaying2 = false;
  }
  pauseMusic3(){
    this.audio.pause();
    this.isPlaying3 = false;
  }
  pauseMusic4(){
    this.audio.pause();
    this.isPlaying4 = false;
  }

  

  




}
