import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MessageCircle, Sparkles, Clock, Users } from 'lucide-react';
import heroImage from '@/assets/campus-hero.jpg';

interface HeroSectionProps {
  onGetStarted?: () => void;
}

export const HeroSection = ({ onGetStarted }: HeroSectionProps) => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Modern university campus with students"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/60 to-secondary/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-20 text-center">
        {/* Badge */}
        <Badge 
          variant="secondary" 
          className="mb-6 bg-white/20 text-white border-white/30 hover:bg-white/30 transition-[var(--transition-smooth)]"
        >
          <Sparkles className="w-3 h-3 mr-1" />
          AI-Powered Campus Assistant
        </Badge>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          Your Smart
          <span className="block bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
            Campus Assistant
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
          Get instant answers about academics, dining, facilities, and campus services. 
          Available 24/7 to help you navigate your university experience.
        </p>

        {/* Feature Pills */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-white/90">
            <MessageCircle className="w-4 h-4" />
            <span className="text-sm font-medium">Instant Responses</span>
          </div>
          <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-white/90">
            <Clock className="w-4 h-4" />
            <span className="text-sm font-medium">24/7 Available</span>
          </div>
          <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-white/90">
            <Users className="w-4 h-4" />
            <span className="text-sm font-medium">Campus Expert</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            onClick={onGetStarted}
            className="bg-white text-primary hover:bg-white/90 transition-[var(--transition-smooth)] shadow-lg hover:shadow-xl px-8 py-3 text-lg font-semibold"
          >
            Start Chatting
            <MessageCircle className="w-5 h-5 ml-2" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white/30 text-white hover:bg-white/10 transition-[var(--transition-smooth)] px-8 py-3 text-lg"
          >
            Learn More
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16 pt-8 border-t border-white/20">
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-1">24/7</div>
            <div className="text-white/80 text-sm">Always Available</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-1">1000+</div>
            <div className="text-white/80 text-sm">Questions Answered Daily</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-1">5sec</div>
            <div className="text-white/80 text-sm">Average Response Time</div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 border border-white/20 rounded-full animate-pulse hidden lg:block" />
      <div className="absolute bottom-32 right-16 w-16 h-16 border border-white/20 rounded-full animate-pulse delay-1000 hidden lg:block" />
    </section>
  );
};