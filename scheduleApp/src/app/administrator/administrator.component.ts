import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { DomSanitizer } from '@angular/platform-browser'
//import { HEROES } from './mock-heros';
import { rest } from '../rest.service';
import { Course } from '../course'
import { Schedule } from '../schedule'
import { List } from '../list';
import { Review } from '../reviews';
import { User } from '../users';

//var schedule: any[]= [];


@Component({
  selector: 'app-administrator',
  templateUrl: './administrator.component.html',
  styleUrls: ['./administrator.component.css']
})

export class AdministratorComponent implements OnInit {
  subject ="";
  course = "";
  component = "";
  scheduleName = "";
  keywords="";
  numSch = "";
  check = 1;
  displaySch="";
  isReview = false;
  findSubject = "";
  findCourseNum = "";
  findComp="";
  userReview ="";
  year = "";
  showUser = localStorage.getItem('username');
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
  reviews: Review[]=[];
  users: User[]=[];

  change(){this.check=0}
  addReview(j: any){
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
    var reviewList= []
    reviewList.push(reviewInfo,username,sub,cour,com)
    console.log(reviewList);
    
    this.rs.addReview(reviewList).subscribe
    (
      (response) =>{},
      (error) => console.log(error)
   ) 
  }

  hideReview(i: any,type: any){
    if(type){this.reviews[i].hideReview = "0"}
    else{this.reviews[i].hideReview = "1"}
    this.rs.hideReview(this.reviews[i]).subscribe
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
    this.rs.getReviewsAdmin(username,sub,cour,com).subscribe
    (
      (response) =>{
        this.reviews = [];
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
         this.reviews[i].Email = element.Email;
          i++;
        });
      },
      (error) => console.log(error)
   )

  }

  findComments(i:any){
    console.log(this.users[i].Email);
    this.rs.findComments(this.users[i].Email).subscribe
    (
      (response) =>{
        this.reviews = [];
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
         this.reviews[i].Email = element.Email;
          i++;
        });
      },
      (error) => console.log(error)
   ) 
    
  }

  getUsers(){
    const email = localStorage.getItem('Email');
    
    this.rs.getUser(email).subscribe
    (
      (response) =>{
        this.users = response
        var i = 0;
        response.forEach(element => {
         this.users[i].Username = element.Username;
         this.users[i].Email = element.Email;
         this.users[i].isAdmin = element.isAdmin;
         this.users[i].activeUser = element.activeUser;
          i++;
        });

      },
      (error) => console.log(error)
   ) 
  }

  makeAdmin(i:any, type:any){
    if(type){this.users[i].isAdmin = "1"}
    else{this.users[i].isAdmin = "0"}

    console.log(this.users[i].Email);
    this.rs.makeAdmin(this.users[i]).subscribe
    (
      (response) =>{},
      (error) => console.log(error)
   ) 
    
  }
  deactivateAccount(i:any, type: any){
    if(type){this.users[i].activeUser = "1"}
    else{this.users[i].activeUser = "0"}

    console.log(this.users[i].Email);
    this.rs.deactivateAccount(this.users[i]).subscribe
    (
      (response) =>{},
      (error) => console.log(error)
   ) 
  }

  search(): void {
    
      this.rs.getCourse().subscribe
       (
         (response)=>
         {
           this.reviews = [];
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
  
             i++;
           });
           console.log(this.courses[0]);
         },
         (error) => console.log(error)
       )
    }

    findCourse(sub: any, cor: any, com: any,key:any){  
      //console.log(this.hero.subject);
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
      
      console.log(sub);
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
      this.rs.searchDB(sch,email).subscribe
       (
         (response)=>
         {
           
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
            this.schedule[i].ScheduleName = element.ScheduleName;
            this.displaySch = element.ScheduleName + " Schedule"
  
             i++;
           });
         },
         (error) => {
          console.log(error)
          this.displaySch = "Schedule Not Found"
        }
       )
      

    }

    saveSchedule(scheduleDB: any){
      const username = localStorage.getItem('username');
      const email = localStorage.getItem('Email');
      scheduleDB = scheduleDB.trim();
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
      if (confirm("Are you sure you want ALL Schedules Deleted? This action will remove ALL user schedules and is not reversble")) {
      this.rs.deleteAll().subscribe
      (
        (response) =>{},
        (error) => console.log(error)
     )
    }
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
