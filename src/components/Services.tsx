
import { Card, CardContent } from "@/components/ui/card";
import { 
  Activity, 
  Code, 
  FileText, 
  GitBranch, 
  Layers,
  PlayCircle 
} from "lucide-react";

const services = [
  {
    icon: <Code className="h-10 w-10 text-primary mb-4" />,
    title: "Test Automation",
    description: "Custom automation solutions using Java-Selenium, BDD/Cucumber, TestNG, and other frameworks to accelerate your testing process and improve coverage."
  },
  {
    icon: <Layers className="h-10 w-10 text-primary mb-4" />,
    title: "Framework Development",
    description: "Building robust, maintainable test automation frameworks tailored to your application's needs, including hybrid, data-driven, and keyword-driven approaches."
  },
  {
    icon: <FileText className="h-10 w-10 text-primary mb-4" />,
    title: "Manual Testing",
    description: "Comprehensive manual testing services including functional, regression, exploratory, and UAT testing to ensure your application meets quality standards."
  },
  {
    icon: <Activity className="h-10 w-10 text-primary mb-4" />,
    title: "API Testing",
    description: "Thorough testing of REST and SOAP APIs using Postman and automation frameworks to validate functionality, security, and performance."
  },
  {
    icon: <GitBranch className="h-10 w-10 text-primary mb-4" />,
    title: "CI/CD Integration",
    description: "Seamless integration of your testing process into CI/CD pipelines using Jenkins, ensuring continuous quality throughout your development lifecycle."
  },
  {
    icon: <PlayCircle className="h-10 w-10 text-primary mb-4" />,
    title: "Test Strategy & Planning",
    description: "Development of comprehensive test strategies, plans, and test cases aligned with your business requirements and quality objectives."
  }
];

const Services = () => {
  return (
    <section id="services" className="py-16 bg-secondary/50">
      <div className="container mx-auto max-w-6xl px-4">
        <h2 className="section-title">Services I Offer</h2>
        <p className="text-muted-foreground mb-12 max-w-3xl">
          As a freelance QA professional, I offer a range of testing services to help ensure your 
          software meets the highest quality standards.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="service-card animate-fadeIn" style={{ animationDelay: `${0.1 * index}s` }}>
              <CardContent className="p-6 flex flex-col h-full">
                {service.icon}
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
