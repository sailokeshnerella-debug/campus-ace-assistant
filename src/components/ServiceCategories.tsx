import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  BookOpen, 
  Utensils, 
  MapPin, 
  Calendar,
  FileText,
  Users,
  Clock,
  Shield
} from 'lucide-react';

interface ServiceCategory {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  services: string[];
}

const categories: ServiceCategory[] = [
  {
    id: 'academic',
    title: 'Academic Services',
    description: 'Course schedules, registration, and academic support',
    icon: <BookOpen className="w-6 h-6" />,
    color: 'from-primary to-primary/80',
    services: ['Course Registration', 'Academic Calendar', 'Tutoring Services', 'Library Resources']
  },
  {
    id: 'dining',
    title: 'Dining Services',
    description: 'Meal plans, dining locations, and menu information',
    icon: <Utensils className="w-6 h-6" />,
    color: 'from-secondary to-secondary/80',
    services: ['Dining Hall Menus', 'Meal Plan Info', 'Campus Restaurants', 'Special Diets']
  },
  {
    id: 'facilities',
    title: 'Campus Facilities',
    description: 'Building locations, hours, and facility information',
    icon: <MapPin className="w-6 h-6" />,
    color: 'from-accent to-accent/80',
    services: ['Campus Map', 'Building Hours', 'Study Spaces', 'Recreation Centers']
  },
  {
    id: 'administration',
    title: 'Administrative',
    description: 'Student services and administrative procedures',
    icon: <FileText className="w-6 h-6" />,
    color: 'from-campus-blue to-campus-teal',
    services: ['Registration', 'Financial Aid', 'Student Records', 'Graduation Requirements']
  }
];

interface ServiceCategoriesProps {
  onCategoryClick?: (category: ServiceCategory) => void;
}

export const ServiceCategories = ({ onCategoryClick }: ServiceCategoriesProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {categories.map((category) => (
        <Card
          key={category.id}
          className="group relative overflow-hidden border border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-[var(--shadow-elegant)] hover:-translate-y-1 cursor-pointer"
          onClick={() => onCategoryClick?.(category)}
        >
          {/* Gradient Background */}
          <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`} />
          
          <div className="relative p-6">
            {/* Icon */}
            <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
              {category.icon}
            </div>

            {/* Content */}
            <h3 className="text-lg font-semibold text-card-foreground mb-2 group-hover:text-primary transition-colors duration-300">
              {category.title}
            </h3>
            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
              {category.description}
            </p>

            {/* Services List */}
            <div className="space-y-2">
              {category.services.map((service, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 text-xs text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                >
                  <div className="w-1 h-1 rounded-full bg-primary opacity-60" />
                  {service}
                </div>
              ))}
            </div>

            {/* CTA */}
            <Button
              variant="ghost"
              size="sm"
              className="w-full mt-4 group-hover:bg-primary/10 transition-[var(--transition-smooth)]"
            >
              Learn More
            </Button>
          </div>
        </Card>
      ))}
    </div>
  );
};