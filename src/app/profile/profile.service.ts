import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  //baseUrl = environment.baseUrl;

  constructor(
    private http: HttpClient
  ) { }

 
  about2 = `Devops Engineer .
  Worked with Software Development Life Cycle(SDLC) and  agile methodologies .
  Expertise in Devops , Docker, Git, Kubernetes and Ansible .
  Have good understanding of Python, Java and MYSQL`

  about = "Passionate about developing professional skills and gaining rewarding experience, I stand out for my ability to work in a team, manage time accurately and perform under pressure."
  resumeurl = "https://drive.google.com/file/d/17MdbRlUIpZQihpHJmhM7Q-nxFKRtVZXO/view"

  skillsData: any = [
    {
      'id': '1',
      'skill': 'Docker ',
      'progress': '85%'
    },
    {
      'id': '2',
      'skill': 'Kubernetes ',
      'progress': '70%'
    },
    {
      'id': '3',
      'skill': 'Python',
      'progress': '70%'
    },
    {
      'id': '4',
      'skill': 'MYSQL',
      'progress': '60%'
    },
    {
      'id': '5',
      'skill': 'Html/Css',
      'progress': '65%'
    },
    {
      'id': '6',
      'skill': 'JAVA',
      'progress': '50%'
    }
  ];
  exprienceData: any = [
    {
      id: 4,
      company: 'Spark IT',
      location: 'Sfax',
      timeline: '06/2023 to 07/2023',
      role: 'Devops Intern',
      work: `Technologies : Docker, Azure CI/CD pipelines, Kubernetes, SonarQuben .
       The creation of a portable, scalable, and consistent deployment environment`

    },
    {
      id: 3,
      company: 'PRIMATEC ENGINEERING',
      location: 'Sfax',
      timeline: '07 /2022 to 08/2022',
      role: 'Security Intern',
      work: `Technologie : Wazuh .
      
      Attack detection , Vulnerability assessment`
    },
  


  ];
  extraCircularInfo:any =[
    {
      id: 1,
      title:'Vice Chairwoman IEEE WIE Enetcom',
      img:'assets/images/275236032_1083458908882694_553243753302818027_n.png'
    },
    {
      id: 2,
      title:'Planning Manager WIE ACT',
      img:'assets/images/300642889_103869819120183_8884602817513621540_n.png'
    },
  ]
  

  skills(): Observable<any> {
    // return this.http.get(this.baseUrl + 'skills');
    return this.skillsData;
  }

  
  

  exprience(): Observable<any> {
    // return this.http.get(this.baseUrl + 'exprience');
    return this.exprienceData;
  }

  extraCircular(): Observable<any> {
    // return this.http.get(this.baseUrl + 'exprience');
    return this.extraCircularInfo;
  }
}
