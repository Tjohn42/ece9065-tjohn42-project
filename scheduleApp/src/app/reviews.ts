export class Review {
    uReview: string;
    Subject: string;
    Course: string;
    hideReview: string;
    Component: string;
    Username: string;
    Email: string;


    constructor( Course: string, Subject: string, Component: string, hideReview: string, uReview: string, Username: string, Email: string)
    {
        this.Course = Course;
        this.Subject = Subject;
        this.Component = Component;
        this.hideReview = hideReview;
        this.uReview = uReview;
        this.Username = Username;
        this.Email = Email;
    }
  }