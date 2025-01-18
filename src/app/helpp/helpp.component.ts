import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-helpp',
  standalone: true,
  templateUrl: './helpp.component.html',
  imports: [CommonModule, FormsModule],
  styleUrls: ['./helpp.component.css']
})
export class HelppComponent {
  // FAQ Data
  faqs = [
    {
      id: 1,
      question: 'How do I reset my password?',
      answer: 'You can reset your password by clicking "Forgot Password" on the login page.',
      open: false
    },
    {
      id: 2,
      question: 'Where can I learn more about this platform?',
      answer: 'You can explore our tutorials, blog posts, and video guides available , and you can learn about this platform by chatbot available in home page.',
      open: false
    },
    {
      id: 3,
      question: 'How do I contact support?',
      answer: 'Reach out to us at support@example.com.',
      open: false
    }
  ];

  // Toggle FAQ
  toggleFaq(id: number): void {
    this.faqs = this.faqs.map(faq =>
      faq.id === id ? { ...faq, open: !faq.open } : { ...faq, open: false }
    );
  }
}