export class List {
    ScheduleName: string;
    Subject: string;
    Course: string;
    Days: string;
    Component: string;
    Section: string;
    Description: string;
    StartTime: string;
    EndTime: string;
    Username: string;
    NumberCourses: number; 

    constructor(ScheduleName: string, Course: string, Subject: string, Component: string, Days: string, Section: string, Description: string, StartTime: string,EndTime: string, Username: string, NumberCourses: number)
    {
        this.ScheduleName = ScheduleName;
        this.Course = Course;
        this.Subject = Subject;
        this.Component = Component;
        this.Days = Days;
        this.Section = Section;
        this.EndTime = EndTime;
        this.Description = Description;
        this.StartTime = StartTime;
        this.Username = Username;
        this.NumberCourses = NumberCourses;

    }
  }