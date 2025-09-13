import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';
import { 
  BookOpen, 
  Utensils, 
  MapPin, 
  Calendar,
  FileText,
  Send,
  MessageCircle,
  GraduationCap,
  Clock,
  Users
} from 'lucide-react';

interface Message {
  id: string;
  type: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

interface QuickQuery {
  id: string;
  text: string;
  category: string;
  icon: React.ReactNode;
}

const quickQueries: QuickQuery[] = [
  {
    id: '1',
    text: 'Library opening hours',
    category: 'Library',
    icon: <BookOpen className="w-4 h-4" />
  },
  {
    id: '2',
    text: 'Dining hall menu today',
    category: 'Dining',
    icon: <Utensils className="w-4 h-4" />
  },
  {
    id: '3',
    text: 'Academic calendar',
    category: 'Academic',
    icon: <Calendar className="w-4 h-4" />
  },
  {
    id: '4',
    text: 'Campus map and directions',
    category: 'Facilities',
    icon: <MapPin className="w-4 h-4" />
  },
  {
    id: '5',
    text: 'Registration procedures',
    category: 'Admin',
    icon: <FileText className="w-4 h-4" />
  },
  {
    id: '6',
    text: 'Student support services',
    category: 'Support',
    icon: <Users className="w-4 h-4" />
  }
];

const mockResponses: Record<string, string> = {
  'Library opening hours': 'The main library is open Monday-Thursday: 7:00 AM - 11:00 PM, Friday: 7:00 AM - 9:00 PM, Saturday: 9:00 AM - 9:00 PM, and Sunday: 10:00 AM - 11:00 PM. Study rooms are available 24/7 with student ID access.',
  'Dining hall menu today': 'Today\'s menu at the Central Dining Hall includes: Breakfast (7-10 AM): Pancakes, eggs, fresh fruit. Lunch (11 AM-3 PM): Grilled chicken, vegetarian pasta, salad bar. Dinner (5-9 PM): Beef stir-fry, tofu curry, pizza station.',
  'Academic calendar': 'Key dates this semester: Classes begin Jan 15, Spring break Mar 11-15, Final exams May 6-12, Graduation May 18. Registration for fall semester opens April 1.',
  'Campus map and directions': 'You can find interactive campus maps at all main entrances and online at campus.edu/map. The Campus Shuttle runs every 15 minutes between 7 AM - 11 PM. Need specific directions? Just ask!',
  'Registration procedures': 'Course registration opens based on your class standing. Check your registration time at portal.campus.edu. You\'ll need to meet with your academic advisor first. Drop/add period ends one week after classes begin.',
  'Student support services': 'Available services include: Academic tutoring (Learning Center), mental health counseling (Wellness Center), career services, disability support, and financial aid office. All services are free for enrolled students.'
};

export const CampusAssistant = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'assistant',
      content: 'Hi! I\'m your Smart Campus Assistant. I can help you with information about academics, dining, library services, facilities, and administrative procedures. How can I assist you today?',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const handleSendMessage = async (content: string) => {
    if (!content.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate AI response delay
    setTimeout(() => {
      const response = mockResponses[content] || 
        `I'd be happy to help you with "${content}". For specific information, please contact the relevant department or check the campus website. Is there anything else I can assist you with?`;
      
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'assistant',
        content: response,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, assistantMessage]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleQuickQuery = (query: QuickQuery) => {
    handleSendMessage(query.text);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSendMessage(inputMessage);
  };

  return (
    <div className="w-full max-w-4xl mx-auto bg-card rounded-xl shadow-[var(--shadow-card)] border border-border/50 overflow-hidden">
      {/* Chat Header */}
      <div className="bg-gradient-to-r from-primary to-secondary p-6 text-primary-foreground">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
            <MessageCircle className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl font-semibold">Smart Campus Assistant</h2>
            <p className="text-primary-foreground/80 text-sm">Your 24/7 campus information guide</p>
          </div>
        </div>
      </div>

      {/* Quick Queries */}
      <div className="p-4 border-b border-border/50 bg-muted/30">
        <p className="text-sm font-medium text-muted-foreground mb-3">Quick Questions</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
          {quickQueries.map((query) => (
            <Button
              key={query.id}
              variant="outline"
              size="sm"
              className="justify-start h-auto p-3 hover:bg-primary/5 transition-[var(--transition-smooth)]"
              onClick={() => handleQuickQuery(query)}
            >
              <div className="flex items-center gap-2">
                {query.icon}
                <span className="text-xs">{query.text}</span>
              </div>
            </Button>
          ))}
        </div>
      </div>

      {/* Chat Messages */}
      <ScrollArea className="h-[400px] p-4">
        <div className="space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] p-3 rounded-lg ${
                  message.type === 'user'
                    ? 'bg-primary text-primary-foreground ml-4'
                    : 'bg-muted text-muted-foreground mr-4'
                } shadow-[var(--chat-bubble-shadow)] transition-[var(--transition-smooth)]`}
              >
                <p className="text-sm leading-relaxed">{message.content}</p>
                <p className={`text-xs mt-2 ${
                  message.type === 'user' ? 'text-primary-foreground/70' : 'text-muted-foreground/70'
                }`}>
                  {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </p>
              </div>
            </div>
          ))}
          
          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-muted text-muted-foreground p-3 rounded-lg mr-4 shadow-[var(--chat-bubble-shadow)]">
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-current rounded-full animate-pulse"></div>
                  <div className="w-2 h-2 bg-current rounded-full animate-pulse delay-100"></div>
                  <div className="w-2 h-2 bg-current rounded-full animate-pulse delay-200"></div>
                </div>
              </div>
            </div>
          )}
        </div>
      </ScrollArea>

      {/* Input Form */}
      <div className="p-4 border-t border-border/50 bg-background">
        <form onSubmit={handleSubmit} className="flex gap-2">
          <Input
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            placeholder="Ask me anything about campus..."
            className="flex-1 transition-[var(--transition-smooth)] focus:ring-2 focus:ring-primary/20"
            disabled={isTyping}
          />
          <Button 
            type="submit" 
            disabled={!inputMessage.trim() || isTyping}
            className="px-4 bg-primary hover:bg-primary/90 transition-[var(--transition-smooth)]"
          >
            <Send className="w-4 h-4" />
          </Button>
        </form>
      </div>
    </div>
  );
};