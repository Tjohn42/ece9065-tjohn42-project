import { Component, NgModule, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { DomSanitizer } from '@angular/platform-browser'
//import { HEROES } from './mock-heros';
import { rest } from '../rest.service';
import { Course } from '../course'
import { Schedule } from '../schedule'
import { List } from '../list';

//var schedule: any[]= [];


@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css'],

})
export class HerosComponent implements OnInit {
  subject =""; 
  course = "";
  component = "";
  keywords="";
  scheduleName = "";
  year = "";
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
  list : List[]=[];
  final: List[]=[];
  findSchedule = "";
   
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
            this.courses[i].startTime = element.startTime;
            
            this.year =   element.courseNum.toString().slice(0,1);

            switch (this.year) {
              case "0":
                this.courses[i].yearTaken = "Preliminary Course";
                break;
              case "1":
                this.courses[i].yearTaken = ("1st Year Course");
                break;
              case "2":
                this.courses[i].yearTaken = "2nd Year Course";
                break;
              case "3":
                this.courses[i].yearTaken= ("3rd Year Course");
                break;
              case "4":
                this.courses[i].yearTaken = ("4th Year Course");
                break;
              case "5":
                this.courses[i].yearTaken = ("5th Year Course");
                break;
            }
             i++;
           });
           console.log(this.courses[0]);
         },
         (error) => console.log(error)
       )
    }

    findCourse(sub: any, cor: any, com: any,key:any){  
      
      console.log(sub);
      sub = sub.trim();
      sub =sub.toUpperCase();
      cor = cor.trim();
      cor =cor.toUpperCase();
      com = com.trim();
      com =com.toUpperCase();
      key = key.trim();
      key =key.toUpperCase();

      if(key != "" && key.length < 4){
        alert("Keyword Search must contain 4 characters!")
        return
      }
      
      this.rs.searchCourse(sub, cor, com,key)?.subscribe //why error????
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
            this.year =   element.courseNum.toString().slice(0,1);

            switch (this.year) {
              case "0":
                this.courses[i].yearTaken = "Preliminary Course";
                break;
              case "1":
                this.courses[i].yearTaken = ("1st Year Course");
                break;
              case "2":
                this.courses[i].yearTaken = "2nd Year Course";
                break;
              case "3":
                this.courses[i].yearTaken= ("3rd Year Course");
                break;
              case "4":
                this.courses[i].yearTaken = ("4th Year Course");
                break;
              case "5":
                this.courses[i].yearTaken = ("5th Year Course");
                break;
            }
  
             i++;
           });
           console.log(this.courses[0]);
         },
         (error) => console.log(error)
       )
      

    }
    searchDB(sch: any){
      //@ts-ignore
      this.rs.searchDB(sch).subscribe //why error????
       (
         (response)=>
         {
           console.log(response);
           
           this.schedule = response;
           var i = 0;
           response.forEach(element => { 
             //@ts-ignore
            this.schedule[i].courseNum = element.Course;
            //@ts-ignore
            this.schedule[i].subject = element.Subject;
            //@ts-ignore
            this.schedule[i].courseComp = element.Component;
            //@ts-ignore
            this.schedule[i].days = element.Days;
            //@ts-ignore
            this.schedule[i].section = element.Section;
            //@ts-ignore
            this.schedule[i].endTime = element.EndTime;
            //@ts-ignore
            this.schedule[i].description = element.Description;
            //@ts-ignore
            this.schedule[i].startTime = element.StartTime;
  
             i++;
           });
         },
         (error) => console.log(error)
       )
      

    }

    getSchedules():  void {
      var email = localStorage.getItem('Email')
      
      this.rs.getPublic().subscribe 
      (
        (response)=>
        {
          //@ts-ignore
          this.list = response;
          var size =[],scheduleList=[], prev;
          for(var i=0; i< this.list.length;i++){
            if(this.list[i].ScheduleName !== prev)
            {
                scheduleList.push(this.list[i]);
                size.push(1);
            }else{
                size[size.length-1]++;
            }
            prev =this.list[i].ScheduleName;
        }
        for(var j=0; j<size.length;j++){
            var subDate = this.list[j].Date.slice(0,19)
            this.final.push({
                "ScheduleName": scheduleList[j].ScheduleName,
                "NumberCourses": size[j], 
                "Course":"",
                "Subject":"",
                "Component":"",
                "Days":"",
                "Section":"",
                "EndTime":"",
                "Description":"",
                "StartTime":"",
                "Username":this.list[j].Username,
                "Date":subDate
            })
        }
          console.log(this.final);

        },
        (error) => console.log(error)
      )
     }

     review(sName: any,j: any){
      this.schedule = [];
      this.findSchedule = this.final[j].ScheduleName;

      
     for(var i=0;i<this.final[j].NumberCourses;i++){
      //@ts-ignore
      this.schedule.push(this.list[i])
      //@ts-ignore
      this.schedule[i].courseNum = this.list[i].Course;
      //@ts-ignore
      this.schedule[i].subject = this.list[i].Subject;
      //@ts-ignore
      this.schedule[i].courseComp = this.list[i].Component;
      //@ts-ignore
      this.schedule[i].days = this.list[i].Days;
      //@ts-ignore
      this.schedule[i].section = this.list[i].Section;
      //@ts-ignore
      this.schedule[i].endTime = this.list[i].EndTime;
      //@ts-ignore
      this.schedule[i].description = this.list[i].Description;
      //@ts-ignore
      this.schedule[i].startTime = this.list[i].StartTime;
      this.year =   this.list[i].Course.toString().slice(0,1);
      
      switch (this.year) {
        case "0":
          this.schedule[i].yearTaken = "Preliminary Course";
          break;
        case "1":
          this.schedule[i].yearTaken = ("1st Year Course");
          break;
        case "2":
          this.schedule[i].yearTaken = "2nd Year Course";
          break;
        case "3":
          this.schedule[i].yearTaken= ("3rd Year Course");
          break;
        case "4":
          this.schedule[i].yearTaken = ("4th Year Course");
          break;
        case "5":
          this.schedule[i].yearTaken = ("5th Year Course");
          break;
      }
     }
     //this.schedule.push(this.list[1])
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
