import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Course } from './course'
import { HttpHeaders } from '@angular/common/http';
import { Schedule } from './schedule';

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

searchCourse(subject: any, course: any, component: any)
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

deleteAll(){
  return this.http.delete("http://localhost:5000/api/delete/");
}

getAllSchedules(user: any){
  return this.http.get<Schedule[]>("http://localhost:5000/api/scheduleList/"+`${user}`,this.httpOptions);
}

registerUser(Username: any, Password: any, Email: any){
  return this.http.post("http://localhost:5000/api/User/"+`${Username}`+"/"+`${Email}`+"/"+`${Password}`,this.httpOptions);
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
}