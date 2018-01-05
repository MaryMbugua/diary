import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diary',
  templateUrl: './diary.component.html',
  styleUrls: ['./diary.component.css']
})
export class DiaryComponent implements OnInit {
  diaries = []




  addNewDiary(diary){
    let diaryLength = this.diaries.length;
    diary.id=diaryLength+1;
    this.diaries.push(diary)

  constructor() { }

  ngOnInit() {
  }

}
