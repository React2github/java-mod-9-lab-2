import { Component, OnInit } from '@angular/core';
import { LoggingService } from '../logging.service';
import { Message } from '../message';
import { MessagingService } from '../messaging.service';
import { User } from "../user";

@Component({
  selector: 'app-send-message',
  templateUrl: './send-message.component.html',
  styleUrls: ['./send-message.component.css']
})
export class SendMessageComponent implements OnInit {

  messageString: string;

  constructor(private loggingSvce: LoggingService, private messagingSvce: MessagingService) {} // declare the loggingSvce variable through the component's constructor

  ngOnInit(): void {}

  onSendMessage() {
    this.messagingSvce.addUserMessage(new Message(new User("Sabrina", true), this.messageString, 1, 0));

    this.loggingSvce.log("Send following message: ");
    this.loggingSvce.log(this.messageString);
}


}