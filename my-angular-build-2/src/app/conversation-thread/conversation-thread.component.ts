import { Component, OnInit } from '@angular/core';
import { MessagingService } from '../messaging.service';

@Component({
  selector: 'app-conversation-thread',
  templateUrl: './conversation-thread.component.html',
  styleUrls: ['./conversation-thread.component.css']
})
export class ConversationThreadComponent implements OnInit {

  senderMessages = []

  userMessages = [];

  constructor(private messagingSvce: MessagingService) { }


  ngOnInit(): void {
  this.userMessages = this.messagingSvce.getUserMessages();
  this.senderMessages = this.messagingSvce.getSenderMessages();
  this.messagingSvce.userMessagesChanged.subscribe(userMessages => this.userMessages = userMessages);
  }

}
