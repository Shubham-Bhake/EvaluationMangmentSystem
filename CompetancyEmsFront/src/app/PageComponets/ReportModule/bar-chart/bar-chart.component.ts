import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Chart from 'chart.js/auto';
import { count } from 'console';
import { ReportFeedback } from 'src/app/model/ReportFeedback';
import { ReportSkillRating } from 'src/app/model/ReportSkillRating';
import { MasterService } from 'src/app/Services/master.service';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css'],
})
export class BarChartComponent implements OnInit {
  public chart: any;
  public feedbackId: string | undefined | null;
  public feedback: ReportFeedback | undefined;
  public feedbacks: Array<ReportFeedback> | undefined;
  public ishidden: boolean = false;
  constructor(
    private service: MasterService,
    private activateRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activateRoute.paramMap.subscribe((params) => {
      this.feedbackId = params.get('feedbackId');
      if (this.feedbackId) {
        this.service.GetFeedBack(this.feedbackId).subscribe((feedBackData) => {
          console.log(feedBackData);
          this.feedback = feedBackData;
          this.createChartForFeedBack();
        });
      } else {
        this.service.GetAllFeedBacks().subscribe((feedBackData) => {
          console.log(feedBackData);
          this.feedbacks = feedBackData;
          this.createChartForAllFeedBack();
        });
      }
    });
  }
  /**
   * This api is used to create chart for given feedback
   */
  createChartForFeedBack() {
    var tooltips = new Array<string>();
    var labels = new Array<string>();
    var ratings = new Array<string>();
    var backgroundColors = new Array<string>();

    if (this.feedback) {
      this.feedback.skillResponseList.forEach((skill) => {
        labels.push(skill.skillName);
        ratings.push(skill.ratingReceived);
        backgroundColors.push(this.getRandomColor());
        tooltips.push(skill.remarks);
      });
    }

    this.chart = new Chart('MyChart', {
      //this denotes tha type of chart
      type: 'bar',
      // type: 'radar',
      // type: 'pie',
      // type: 'line',
      data: {
        labels,
        datasets: [
          {
            label: 'Skills Raiting Received',
            data: ratings,
            borderColor: '#0C0A01',
            backgroundColor: backgroundColors,
          },
        ],
      },

      options: {
        plugins: {
          legend: {
            display: false
         },
          tooltip: {
            callbacks: {
              label: function (context) {
                console.log(tooltips[context.dataIndex]);
                return (
                  tooltips[context.dataIndex] +
                  '\t [ rating received : ' +
                  ratings[context.dataIndex] +
                  ']'
                );
              },
            },
          },
        },
        aspectRatio: 2.5,
      },
    });
  }
  /**
   * This api is used to create chart for All
   */

  createChartForAllFeedBack() {
    this.ishidden = true;
    var labels = new Array<string>();
    var ratings = new Array<string>();
    var ratingsMap = new Map<string, ReportSkillRating>();
    var backgroundColors = new Array<string>();
    if (this.feedbacks && this.feedbacks.length > 0) {
      for (let i = 0; i < this.feedbacks.length; i++) {
        //How to properly iterate here!!
        this.feedbacks[i].skillResponseList.forEach((skill) => {
          
          if (ratingsMap.has(skill.skillName)) {
            let skillRate: ReportSkillRating = ratingsMap.get(skill.skillName)!;
            skillRate.sum = skillRate.sum + (+skill.ratingReceived);
            skillRate.count = skillRate.count + 1;
            ratingsMap.set(skill.skillName, skillRate!);
          } else {
            let skillRate = new ReportSkillRating(+skill.ratingReceived, 1);
            ratingsMap.set(skill.skillName, skillRate!);
          }
        });
      }

      ratingsMap.forEach((skillAvgRating, skillName) =>{
          labels.push(skillName);
          backgroundColors.push(this.getRandomColor());
          ratings.push(skillAvgRating.sum/skillAvgRating.count + "");
         });
         
      this.chart = new Chart('MyChart', {
        //this denotes tha type of chart
        type: 'bar',
        data: {
          labels,
          datasets: [
            {
              label: 'Skills Raiting Overall',
              data: ratings,
              borderColor: '#0C0A01',
              backgroundColor: backgroundColors,
            },
          ],
        },
        options: {
          aspectRatio: 2.5,
          plugins: {
            legend: {
               display: false
            }
         }
        },
      });
    }
  }
 

  getRandomColor() {
    var color = Math.floor(0x1000000 * Math.random()).toString(16);
    return '#' + ('000000' + color).slice(-6);
  }
}
