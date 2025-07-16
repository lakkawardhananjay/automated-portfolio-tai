
import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="py-16 md:py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fadeIn" style={{ animationDelay: "0.1s" }}>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Payal Lakkawar
              <span className="block text-2xl md:text-3xl mt-2 text-muted-foreground">
                QA Test Analyst
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Dedicated QA professional with <span className="font-bold text-primary">5 years</span> of 
              experience in Manual and Automation Testing, specializing in Java-Selenium, 
              BDD/Cucumber, and API Testing.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Button asChild>
                <a href="mailto:payal.lakkawar5@gmail.com">
                  Hire Me <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="/resume/5_payal_QA_anlayst%20(1).pdf" download>
                  Download CV <Download className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
          <div className="bg-gradient-to-br from-primary/10 to-accent/10 p-8 rounded-xl border border-border animate-fadeIn" style={{ animationDelay: "0.3s" }}>
            <h2 className="text-2xl font-bold mb-4 gradient-text">Professional Summary</h2>
            <p className="text-muted-foreground leading-relaxed">
              ISTQB-certified QA Analyst with expertise in Test Automation and Manual Testing. 
              Skilled in creating robust test frameworks using Java-Selenium, BDD/Cucumber, 
              and Appian Low Touch Automation. Experienced in CI/CD integration with Jenkins 
              and proficient in Agile methodologies. Looking to leverage my technical expertise 
              to deliver high-quality testing solutions for your next project.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
