import React from 'react';

export interface ServiceItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Testimonial {
  name: string;
  text: string;
  rating: number;
}

export enum Sender {
  User = 'user',
  Bot = 'bot'
}

export interface ChatMessage {
  id: string;
  text: string;
  sender: Sender;
  timestamp: Date;
}