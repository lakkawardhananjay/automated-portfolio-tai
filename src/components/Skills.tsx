
import { Card, CardContent } from "@/components/ui/card";
import { 
  Code, 
  FileText, 
  GitBranch, 
  Server, 
  Settings, 
  Workflow 
} from "lucide-react";

const skillCategories = [
  {
    icon: <FileText className="h-8 w-8 text-primary" />,
    title: "Testing Types",
    skills: [
      "Functional Testing", "Regression Testing", "API Testing", 
      "Integration Testing", "Smoke Testing", "Sanity Testing",
      "UAT", "SIT", "E2E Testing", "Ad-Hoc Testing"
    ]
  },
  {
    icon: <Code className="h-8 w-8 text-primary" />,
    title: "Automation",
    skills: [
      "Java-Selenium WebDriver", "BDD/Cucumber", "TestNG", 
      "Appian Low Touch Automation", "Maven", "Gradle"
    ]
  },
  {
    icon: <Server className="h-8 w-8 text-primary" />,
    title: "API Testing",
    skills: [
      "Postman", "REST API", "SOAP API", "API Automation"
    ]
  },
  {
    icon: <Workflow className="h-8 w-8 text-primary" />,
    title: "CI/CD & Methodologies",
    skills: [
      "Jenkins", "Agile/Scrum", "SDLC", "CI/CD Pipelines"
    ]
  },
  {
    icon: <Settings className="h-8 w-8 text-primary" />,
    title: "Tools & Platforms",
    skills: [
      "JIRA", "Confluence", "ALM", "Appian", "Salesforce"
    ]
  },
  {
    icon: <GitBranch className="h-8 w-8 text-primary" />,
    title: "Version Control",
    skills: [
      "Git", "Bitbucket", "GitHub"
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-16 bg-secondary/50">
      <div className="container mx-auto max-w-6xl px-4">
        <h2 className="section-title">Technical Skills</h2>
        <p className="text-muted-foreground mb-12 max-w-3xl">
          With 5 years of experience in QA, I've developed a diverse skillset across various testing methodologies,
          automation frameworks, and tools.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="animate-fadeIn" style={{ animationDelay: `${0.1 * index}s` }}>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {category.icon}
                  <h3 className="text-xl font-semibold ml-3">{category.title}</h3>
                </div>
                <div className="flex flex-wrap">
                  {category.skills.map((skill, idx) => (
                    <span key={idx} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
