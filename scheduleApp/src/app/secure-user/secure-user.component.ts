import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { DomSanitizer } from '@angular/platform-browser'
//import { HEROES } from './mock-heros';
import { rest } from '../rest.service';
import { Course } from '../course'
import { Schedule } from '../schedule'
import { List } from '../list';

//var schedule: any[]= [];


@Component({
  selector: 'app-secure-user',
  templateUrl: './secure-user.component.html',
  styleUrls: ['./secure-user.component.css'],
})

export class SecureUserComponent implements OnInit {
  subject ="";
  course = "";
  component = "";
  scheduleName = "";
  numSch = "";
  check = 1;
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

  change(){this.check=0}
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
    
    getSchedules():  void {
      var email = localStorage.getItem('Email')
      
      this.rs.getAllSchedules(email).subscribe //CHANGE TEST
      (
        (response)=>
        {
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
                "Username":this.list[j].Username
            })
        }
          console.log(this.final);

        },
        (error) => console.log(error)
      )
     }
     review(item: Schedule,j: any){
       console.log(j);
       
      for(var i=0;i<this.final[j].NumberCourses;i++){

       this.schedule.push(this.list[i])
       this.schedule[i].courseNum = this.list[i].Course;
       this.schedule[i].subject = this.list[i].Subject;
       this.schedule[i].courseComp = this.list[i].Component;
       this.schedule[i].days = this.list[i].Days;
       this.schedule[i].section = this.list[i].Section;
       this.schedule[i].endTime = this.list[i].EndTime;
       this.schedule[i].description = this.list[i].Description;
       this.schedule[i].startTime = this.list[i].StartTime;
      //this.schedule[i].Username = this.list[i].Username;
      }
      //this.schedule.push(this.list[1])
     }
    searchDB(sch: any){
      this.rs.searchDB(sch).subscribe
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

    saveSchedule(scheduleDB: any){
      const username = localStorage.getItem('username');
      const email = localStorage.getItem('Email');
      for(var i=0;i<this.schedule.length;i++)
      {
        this.schedule[i].ScheduleName = scheduleDB;
        this.schedule[i].Username = username;
        this.schedule[i].Email = email;
        this.schedule[i].isPrivate = this.check;
      }
      
      this.rs.saveSchedule(this.schedule).subscribe
      (
        (response) =>{},
        (error) => console.log(error)
     )
      
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
