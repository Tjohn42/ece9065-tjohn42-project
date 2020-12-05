export class Course {
    scheduleName: string;
    subject: string;
    courseNum: string;
    days: string;
    courseComp: string;
    section: string;
    description: string;
    startTime: string;
    endTime: string;

    constructor(scheduleName: string, courseNum: string, subject: string, courseComp: string, days: string, section: string, description: string, startTime: string,endTime: string)
    {
        this.scheduleName = scheduleName;
        this.courseNum = courseNum;
        this.subject = subject;
        this.courseComp = courseComp;
        this.days = days;
        this.section = section;
        this.endTime = endTime;
        this.description = description;
        this.startTime = startTime;

    }
  }