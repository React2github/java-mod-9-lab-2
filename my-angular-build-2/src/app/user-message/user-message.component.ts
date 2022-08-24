import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-message',
  templateUrl: './user-message.component.html',
  styleUrls: ['./user-message.component.css']
})
export class UserMessageComponent implements OnInit {
  @Input() message = {
    sender: { firstName: "default" },
    text: "default",
    conversationId: 0,
    sequenceNumber: 0,
  };
  constructor() { }

  ngOnInit(): void {
  }

}
