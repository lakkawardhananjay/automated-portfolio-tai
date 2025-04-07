
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Add company logo information to the experiences array
const experiences = [
  {
    role: "Test Engineer",
    company: "Sun Life Financial",
    period: "2023 - 2024",
    description: "Conducted manual testing for TCS' BANCS product at Sun Life Insurance in Canada and the UK, focusing on BFSI test cases. Executed test cases including positive and negative scenarios, and reported defects in Devplus.",
    achievements: [
      "Analyzed customer requirements and participated in requirement analysis",
      "Designed and executed test cases aligned with functional specifications",
      "Executed system test suite ensuring comprehensive testing coverage",
      "Managed defect tracking and reporting with focus on monitoring deliverables"
    ],
    tags: ["Functional Testing", "BFSI", "Defect Management", "Manual Testing"],
    logo: "https://images.unsplash.com/photo-1586396874372-2c584a53d2e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80"
  },
  {
    role: "QA Analyst",
    company: "Hitachi Energy",
    period: "2022 - 2023",
    description: "Led a scratch development project, creating a comprehensive order application with distinct user roles. Conducted thorough testing to validate each functionality of the application.",
    achievements: [
      "Developed testing framework using TestNG, Selenium, and Java",
      "Conducted integration, regression, functional, UAT, and sanity testing",
      "Created and implemented comprehensive test plans and test cases",
      "Automated applications enhancing efficiency and accuracy"
    ],
    tags: ["TestNG", "Selenium", "Java", "Automation Framework", "UAT"],
    logo: "https://images.unsplash.com/photo-1561736778-92e52a7769ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80"
  },
  {
    role: "Specialist-Test Quality Assurance",
    company: "Citi Bank",
    period: "2021 - 2022",
    description: "Worked on various functional changes for Citibank account opening application. Updated application functionality and verified changes through comprehensive testing.",
    achievements: [
      "Automated Regression Scripts using BDD Cucumber",
      "Designed and reviewed test cases for critical banking functions",
      "Performed Functionality, Sanity, UAT, and Regression Testing",
      "Collaborated with developers to address technical issues and track bugs"
    ],
    tags: ["BDD Cucumber", "Regression Testing", "UAT", "Banking Domain"],
    logo: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80"
  },
  {
    role: "Test Analyst",
    company: "Westpac",
    period: "2020 - 2021",
    description: "Collaborated with the Scrum team at this Australian multinational banking and financial services company to create detailed test plans, test sets, and execute test cases in JIRA.",
    achievements: [
      "Developed hybrid framework (keyword + data-driven) for Appian-based applications",
      "Used Bitbucket for repository management and version control of test assets",
      "Executed test scripts via command-line operations using Seleniumbox",
      "Generated test closure reports and coordinated with developers to resolve issues"
    ],
    tags: ["Appian", "JIRA", "Bitbucket", "Hybrid Framework", "Banking"],
    logo: "https://images.unsplash.com/photo-1587691592099-24045742c181?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80"
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-16">
      <div className="container mx-auto max-w-6xl px-4">
        <h2 className="section-title">Work Experience</h2>
        <p className="text-muted-foreground mb-12 max-w-3xl">
          Over the past 5 years, I've worked across various domains including Banking, Insurance, and Manufacturing,
          building extensive expertise in quality assurance and test automation.
        </p>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="animate-fadeIn" style={{ animationDelay: `${0.1 * index}s` }}>
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0 border border-muted">
                      <img 
                        src={exp.logo} 
                        alt={`${exp.company} logo`} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">{exp.role}</h3>
                      <p className="text-muted-foreground">{exp.company}</p>
                    </div>
                  </div>
                  <Badge variant="outline" className="mt-2 md:mt-0 w-fit">
                    {exp.period}
                  </Badge>
                </div>
                
                <p className="mb-4">{exp.description}</p>
                
                <div className="mb-4">
                  <h4 className="font-medium mb-2">Key Achievements:</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx} className="text-muted-foreground">
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-wrap">
                  {exp.tags.map((tag, idx) => (
                    <span key={idx} className="skill-tag">
                      {tag}
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

export default Experience;
