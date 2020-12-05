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
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http : HttpClient) { }

   getCourse()
{
    return this.http.get<Course[]>(this.allCourses);
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
    console.log("hi");
    
  }
 
}

searchDB(scheduleName: any){
  return this.http.get<Schedule[]>("http://localhost:5000/api/schedules/"+`${scheduleName}`)

}

deleteSch(schName: any){
  
  return this.http.delete("http://localhost:5000/api/delete/"+`${schName}`);
}

deleteAll(){
  return this.http.delete("http://localhost:5000/api/delete/");
}

}