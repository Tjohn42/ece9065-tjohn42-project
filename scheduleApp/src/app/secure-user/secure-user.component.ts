import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { DomSanitizer } from '@angular/platform-browser'
//import { HEROES } from './mock-heros';
import { rest } from '../rest.service';
import { Course } from '../course'
import { Schedule } from '../schedule'
import { List } from '../list';
import { Review } from '../reviews';

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
  keywords = "";
  numSch = "";
  check = 1;
  year = "";
  displaySch="";
  isReview = false;
  findSubject = "";
  findCourseNum = "";
  findComp="";
  userReview ="";
  update = false;
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
  final: any[]=[];
  reviews: Review[]=[];

  change(){this.check=0}
  addReview(j: any){
    console.log(this.courses[j].subject);
    
    this.findSubject = this.courses[j].subject;
    this.findCourseNum = this.courses[j].courseNum;
    this.findComp = this.courses[j].courseComp   
  }
  submitReview(reviewInfo: any,sub: any,cour: any,com: any){
    sub = sub.trim();
    sub =sub.toUpperCase();
    cour = cour.trim();
    cour =cour.toUpperCase();
    com = com.trim();
    com =com.toUpperCase();
    const username = localStorage.getItem('username');
    const email = localStorage.getItem('Email');
    var reviewList= []
    reviewList.push(reviewInfo,username,sub,cour,com,email)
    console.log(reviewList);
    
    this.rs.addReview(reviewList).subscribe
    (
      (response) =>{},
      (error) => console.log(error)
   )

    
  }

  viewReviews(sub: any,cour: any,com: any){
    sub = sub.trim();
    sub =sub.toUpperCase();
    cour = cour.trim();
    cour =cour.toUpperCase();
    com = com.trim();
    com =com.toUpperCase();
    const username = localStorage.getItem('username');
   //const email = localStorage.getItem('Email');
    var getReviews= []
    getReviews.push(sub,cour,com)
    this.rs.getReviews(username,sub,cour,com).subscribe
    (
      (response) =>{
        this.reviews = response;
        console.log(this.reviews);
        
        var i = 0;
        response.forEach(element => { 
         this.reviews[i].uReview = element.uReview;
         this.reviews[i].hideReview = element.hideReview;
         this.reviews[i].Username = element.Username;
         this.reviews[i].Subject = element.Subject;
         this.reviews[i].Course = element.Course;
         this.reviews[i].Component = element.Component;
          i++;
        });
      },
      (error) => console.log(error)
   )

  }
  removeCourse(i: any){
    console.log(i);
    this.update = true;
    console.log(this.schedule[i]);
    this.schedule.splice(i,1);
    console.log(this.schedule);
  }
  updateSchedule(){
    console.log(this.final[0].ScheduleName);
    console.log(this.schedule);
    this.deleteSch(this.final[0].ScheduleName)
    this.rs.updateSchedule(this.schedule).subscribe
    (
      (response) =>{
        console.log(response);
        
      },
      (error) => console.log(error)
   )
    
    
  }
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
            this.year = element.courseNum.toString().slice(0,1);
      
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

    findCourse(sub: any, cor: any, com: any, key: any){  
      //console.log(this.hero.subject);
      sub = sub.trim();
      sub =sub.toUpperCase();
      cor = cor.trim();
      cor =cor.toUpperCase();
      com = com.trim();
      com =com.toUpperCase();
      key = key.trim();
      key =key.toUpperCase();
      console.log(key);
      console.log(typeof key);
      
      
      if(key != "" && key.length < 4){
        alert("Keyword Search must contain 4 characters!")
        return
      }
      
      this.rs.searchCourse(sub, cor, com, key)?.subscribe //why error????
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
    
    getSchedules():  void {
      var email = localStorage.getItem('Email')
      
      this.rs.getAllSchedules(email).subscribe //CHANGE TEST
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
      //this.schedule[i].Username = this.list[i].Username;
      }
      //this.schedule.push(this.list[1])
     }
    searchDB(sch: any){
      var email = localStorage.getItem('Email')
      console.log(sch, email);
      
      this.rs.searchDB(sch,email).subscribe
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

    saveSchedule(scheduleDB: any){
      const username = localStorage.getItem('username');
      const email = localStorage.getItem('Email');
      scheduleDB = scheduleDB.trim();
      for(var i=0;i<this.schedule.length;i++)
      {
        this.schedule[i].ScheduleName = scheduleDB;        //@ts-ignore
        this.schedule[i].Username = username;//@ts-ignore
        this.schedule[i].Email = email;//@ts-ignore
        this.schedule[i].isPrivate = this.check;
      }
      
      this.rs.saveSchedule(this.schedule).subscribe
      (
        (response) =>{alert("Schedule Savesd Succcessful!");},
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
      if (confirm("Are you sure you want all Schedules Deleted?")) {
        const username = localStorage.getItem('username');  
        this.rs.deleteAllUsers(username).subscribe
        (
          (response) =>{},
          (error) => console.log(error)
       )
      console.log();
      
      }
    }
    add(course: any){
      this.schedule.push(course)

      console.log(this.schedule);
      
      
    }

  constructor(private rs : rest) { }

  ngOnInit(): void {
    this.update=false;
  }
  selectedHero: Hero | undefined;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  
}
