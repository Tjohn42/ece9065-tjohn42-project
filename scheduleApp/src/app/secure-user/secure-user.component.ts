import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { DomSanitizer } from '@angular/platform-browser'
//import { HEROES } from './mock-heros';
import { rest } from '../rest.service';
import { Course } from '../course'
import { Schedule } from '../schedule'

//var schedule: any[]= [];


@Component({
  selector: 'app-secure-user',
  templateUrl: './secure-user.component.html',
  styleUrls: ['./secure-user.component.css']
})

export class SecureUserComponent implements OnInit {
  subject ="";
  course = "";
  component = "";
  scheduleName = "";
  hero: Hero = {
    id: 1,
    subject: "",
    catalog: "",
    component:"",
    scheduleName:"",
    schedule:[],
    exist: false,
    values: ""
  };
  courses : Course[] = [];
  schedule : Schedule[] = [];
   
  search(): void {

      this.rs.getCourse().subscribe
       (
         (response)=>
         {
           this.courses = response;
           console.log(response);
           
           var i = 0;
           response.forEach(element => { 
            this.courses[i].courseNum = element.courseNum;
            this.courses[i].subject = element.subject;
            this.courses[i].courseComp = element.courseComp;
            this.courses[i].days = element.days;
            this.courses[i].section = element.section;
            this.courses[i].endTime = element.endTime;
            this.courses[i].description = element.description;
            this.courses[i].startTime = element.startTime;
  
             i++;
           });
           console.log(this.courses[0]);
         },
         (error) => console.log(error)
       )
    }

    findCourse(sub: any, cor: any, com: any){  
      //console.log(this.hero.subject);
      
      console.log(sub);
      this.rs.searchCourse(sub, cor, com)?.subscribe //why error????
       (
         (response)=>
         {
           this.courses = response;
           console.log(response);
           
           var i = 0;
           response.forEach(element => { 
            this.courses[i].courseNum = element.courseNum;
            this.courses[i].subject = element.subject;
            this.courses[i].courseComp = element.courseComp;
            this.courses[i].days = element.days;
            this.courses[i].section = element.section;
            this.courses[i].endTime = element.endTime;
            this.courses[i].description = element.description;
            this.courses[i].startTime = element.startTime;
  
             i++;
           });
           console.log(this.courses[0]);
         },
         (error) => console.log(error)
       )
      

    }
    searchDB(sch: any){
      this.rs.searchDB(sch).subscribe //why error????
       (
         (response)=>
         {
           console.log(response);
           
           this.schedule = response;
           var i = 0;
           response.forEach(element => { 
             
            this.schedule[i].courseNum = element.Course;
            this.schedule[i].subject = element.Subject;
            this.schedule[i].courseComp = element.Component;
            this.schedule[i].days = element.Days;
            this.schedule[i].section = element.Section;
            this.schedule[i].endTime = element.EndTime;
            this.schedule[i].description = element.Description;
            this.schedule[i].startTime = element.StartTime;
  
             i++;
           });
         },
         (error) => console.log(error)
       )
      

    }

    saveSchedule(){
      console.log(this.schedule);
      
    }


    deleteSch(sch: any){
      this.rs.deleteSch(sch).subscribe
      (
        (response) =>{},
        (error) => console.log(error)
     )
    }

    deleteAll(){
      this.rs.deleteAll().subscribe
      (
        (response) =>{},
        (error) => console.log(error)
     )
    }
    add(course: any){
      this.schedule.push(course)

      console.log(this.schedule);
      
      
    }

  constructor(private rs : rest) { }

  ngOnInit(): void {
    
  }
  selectedHero: Hero | undefined;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  
}
