import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Course } from './course'
import { HttpHeaders } from '@angular/common/http';
import { Schedule } from './schedule';
import { Review } from './reviews';
import { User } from './users';

@Injectable({
  providedIn: 'root'
})
export class rest {

  allCourses : string = "http://localhost:5000/api/courses"
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json', Authorization: 'Bearer ' + localStorage.getItem('access_token')})
  };

  constructor(private http : HttpClient) { }

   getCourse()
{
    return this.http.get<Course[]>(this.allCourses, this.httpOptions);
}

searchCourse(subject: any, course: any, component: any,keyword:any)
{

  if (course && subject && component){
    return this.http.get<Course[]>("http://localhost:5000/api/courses/"+`${subject}`+"/"+`${course}`+"/"+`${component}`)
  }
  else if(course && subject){
    return this.http.get<Course[]>("http://localhost:5000/api/courses/"+`${subject}`+"/"+`${course}`)
  }
  else if(subject){
    return this.http.get<Course[]>(`http://localhost:5000/api/subject/${subject}`);
  }
  else if(keyword){
    return this.http.get<Course[]>(`http://localhost:5000/api/keyword/${keyword}`);
  }
  else{
    console.log("");
    
  }
 
}

searchDB(scheduleName: any,Email: any){
  return this.http.get<Schedule[]>("http://localhost:5000/api/schedules/"+`${scheduleName}`+"/"+`${Email}`, this.httpOptions)

}

deleteSch(schName: any){
  
  return this.http.delete("http://localhost:5000/api/delete/"+`${schName}`,this.httpOptions);
}

deleteAllUsers(email:any){
  return this.http.delete("http://localhost:5000/api/deleteUser/"+`${email}`,this.httpOptions);
}
deleteAll(){
  return this.http.delete("http://localhost:5000/api/delete/",this.httpOptions);
}

getAllSchedules(user: any){
  return this.http.get<Schedule[]>("http://localhost:5000/api/scheduleList/"+`${user}`,this.httpOptions);
}

registerUser(Username: any, Password: any, Email: any){
  return this.http.post("http://localhost:5000/api/User/"+`${Username}`+"/"+`${Email}`+"/"+`${Password}`,this.httpOptions);
}

registerUserGmail(Username: any, Email: any){
  return this.http.post("http://localhost:5000/api/gmailUser/"+`${Username}`+"/"+`${Email}`,this.httpOptions);
}

saveSchedule(scheduleName: any){
  const scheduleInfo = JSON.stringify(scheduleName);
  
  return this.http.post("http://localhost:5000/api/schedule/",scheduleInfo,this.httpOptions);
}
getPublic(){
  return this.http.get<Schedule[]>("http://localhost:5000/api/publicSchedule",this.httpOptions);
}
addReview(review: any){
  const reviewInfo = JSON.stringify(review);
  return this.http.post<Schedule[]>("http://localhost:5000/api/addReview/",reviewInfo,this.httpOptions);
}
getReviews(username:any,subject: any,course: any,component: any){
  //const reviewInfo = JSON.stringify(review);
 // console.log(reviewInfo);
  
  return this.http.get<Review[]>("http://localhost:5000/api/getReviews/"+`${username}`+"/"+`${subject}`+"/"+`${course}`+"/"+`${component}`, this.httpOptions);
}
getReviewsAdmin(username:any,subject: any,course: any,component: any){
  return this.http.get<Review[]>("http://localhost:5000/api/getReviewsAdmin/"+`${username}`+"/"+`${subject}`+"/"+`${course}`+"/"+`${component}`, this.httpOptions);
}
hideReview(review: Review){
  const reviewInfo = JSON.stringify(review);
 // console.log(reviewInfo);
  
  return this.http.post<Review[]>("http://localhost:5000/api/flagReview",reviewInfo, this.httpOptions);
}
getUser(email: any){
  return this.http.get<User[]>("http://localhost:5000/api/getUsersAdmin/"+`${email}`, this.httpOptions);
}
findComments(email: any){
  return this.http.get<Review[]>("http://localhost:5000/api/getUsersComments/"+`${email}`, this.httpOptions);
}
makeAdmin(email: any){
  const EmailJSON = JSON.stringify(email);
  return this.http.post<Review[]>("http://localhost:5000/api/makeAdmin",EmailJSON, this.httpOptions);
}
deactivateAccount(email: any){
  const EmailJSON = JSON.stringify(email);
  return this.http.post<Review[]>("http://localhost:5000/api/deactivateAccount",EmailJSON, this.httpOptions);
}
doesExist(email: any){
  return this.http.get<User[]>("http://localhost:5000/api/getUsers/"+`${email}`, this.httpOptions);
}
resendEmail(email: any){
  return this.http.post("http://localhost:5000/api/resendEmail/"+`${email}`, this.httpOptions);
}
updateSchedule(schedule: any){
  const scheduleINFO = JSON.stringify(schedule);
  return this.http.post<Review[]>("http://localhost:5000/api/updateSchedule",scheduleINFO, this.httpOptions);
}
}