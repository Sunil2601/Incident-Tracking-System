import { Injectable } from '@angular/core';
import emailjs from '@emailjs/browser'

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {
 
  constructor() {
  }

  setNotifications(notifications: any) {
    
    localStorage.setItem("notifications", JSON.stringify(notifications))

  }

  getNotifications() {
    return JSON.parse(localStorage.getItem("notifications") || "[]")
  }

  async sendEmails() {
    let temp = JSON.parse(localStorage.getItem("notifications")||"[]")
    for (let notification of temp) {
      emailjs.init("a7HpzXld8JdqXiZWi")
      let res= await emailjs.send("service_ttok0nc", "template_406gpon", {
        message:temp.id,
        from_name: "Incident Tracking System",
        reply_to: "test@gmail.com",
        to_email: "buntymanthena2601@gmail.com",
      });
      console.log(res,notification)
    }
  }
}
