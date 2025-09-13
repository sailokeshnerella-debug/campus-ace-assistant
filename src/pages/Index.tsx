import { useRef } from 'react';
import { HeroSection } from '@/components/HeroSection';
import { ServiceCategories } from '@/components/ServiceCategories';
import { CampusAssistant } from '@/components/CampusAssistant';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Shield, Zap, Heart } from 'lucide-react';

const Index = () => {
  const chatRef = useRef<HTMLDivElement>(null);

  const scrollToChat = () => {
    chatRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[var(--campus-gradient-subtle)]">
      {/* Hero Section */}
      <HeroSection onGetStarted={scrollToChat} />

      {/* Service Categories */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              Campus Services
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Everything You Need to Know
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Access comprehensive information about all campus services and facilities in one place
            </p>
          </div>
          <ServiceCategories />
        </div>
      </section>

      {/* Chat Interface */}
      <section ref={chatRef} className="py-20 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">
              AI Assistant
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ask Me Anything
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get instant, accurate answers to all your campus-related questions
            </p>
          </div>
          <CampusAssistant />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              Why Choose Our Assistant
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Built for Students, by Students
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 text-center border border-border/50 hover:shadow-[var(--shadow-card)] transition-[var(--transition-smooth)]">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Lightning Fast</h3>
              <p className="text-sm text-muted-foreground">Get answers in seconds, not minutes</p>
            </Card>

            <Card className="p-6 text-center border border-border/50 hover:shadow-[var(--shadow-card)] transition-[var(--transition-smooth)]">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="font-semibold mb-2">Always Accurate</h3>
              <p className="text-sm text-muted-foreground">Updated information from official sources</p>
            </Card>

            <Card className="p-6 text-center border border-border/50 hover:shadow-[var(--shadow-card)] transition-[var(--transition-smooth)]">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-semibold mb-2">Secure & Private</h3>
              <p className="text-sm text-muted-foreground">Your conversations are kept confidential</p>
            </Card>

            <Card className="p-6 text-center border border-border/50 hover:shadow-[var(--shadow-card)] transition-[var(--transition-smooth)]">
              <div className="w-12 h-12 bg-destructive/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Heart className="w-6 h-6 text-destructive" />
              </div>
              <h3 className="font-semibold mb-2">Student-Focused</h3>
              <p className="text-sm text-muted-foreground">Designed with your needs in mind</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border/50 py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-xl font-semibold mb-4">Smart Campus Assistant</h3>
          <p className="text-muted-foreground mb-6">
            Making campus life easier, one question at a time.
          </p>
          <Button variant="outline" onClick={scrollToChat}>
            Start Your Conversation
          </Button>
        </div>
      </footer>
    </div>
  );
};

export default Index;
