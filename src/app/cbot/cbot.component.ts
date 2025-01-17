import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cbot',
  templateUrl: './cbot.component.html',
  styleUrls: ['./cbot.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule],
})
export class CbotComponent {
  messages: { text: string; isUser: boolean }[] = [];
  userInput: string = '';

  // Predefined bot responses
  botResponses = {
    hello: 'Hi there! How can I assist you today?',
    bye: 'Goodbye! Have a great day!',
    default: 'Sorry, I didn’t understand that. Could you please rephrase?',
    who: 'I am your Chat Bot!',
    createdby: 'I was created by an awesome developer!',
    help: 'I can assist you with finding nearby services, answering questions, and more!',
    joke: 'Why did the computer go to the doctor? Because it caught a virus!',
    nearby: 'You can search for nearest Services in the Home page and book .',
    how: '1. You can select the services in any date 2. Post an Ads 3. In Home you can select nearby services and Book. '
    
  };

  sendMessage() {
    if (this.userInput.trim() === '') return;

    // Add user message
    this.messages.push({ text: this.userInput, isUser: true });

    // Generate bot response
    const botReply = this.getBotResponse(this.userInput.toLowerCase());
    setTimeout(() => {
      this.messages.push({ text: botReply, isUser: false });
    }, 500); // Simulate typing delay

    this.userInput = ''; // Clear input
  }

  getBotResponse(message: string): string {
    if (message.includes('hello') || message.includes('hi')) {
      return this.botResponses.hello;
    } else if (message.includes('bye')) {
      return this.botResponses.bye;
    }
    else if (message.includes('help')) {
      return this.botResponses.help;
    }
    else if (message.includes('who are you')) {
      return this.botResponses.who;
    }
    else if (message.includes('created by')) {
      return this.botResponses.createdby;
    }
    else if (message.includes('joke')) {
      return this.botResponses.joke;
    }
    else if (message.includes('near by')) {
      return this.botResponses.nearby;
    }
    else if (message.includes('how')) {
      return this.botResponses.how;
    }
    else {
      return this.botResponses.default;
    }
  }
}
