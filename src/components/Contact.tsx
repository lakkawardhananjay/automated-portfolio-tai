import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Send, Linkedin, Github } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import emailjs from "emailjs-com"; // Import EmailJS

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // EmailJS Service and Template IDs
    const serviceID = "your_email_service_id";
    const templateID = "your_email_template_id";
    const userID = "your_emailjs_user_id";  // You can get this from EmailJS dashboard

    // Sending Email using EmailJS
    emailjs
      .sendForm(serviceID, templateID, e.target, userID)
      .then(
        (result) => {
          console.log(result.text);
          toast({
            title: "Message Sent!",
            description: "Thank you for reaching out. I'll get back to you as soon as possible.",
          });
          // Reset form after submission
          setFormData({
            name: "",
            email: "",
            subject: "",
            message: ""
          });
        },
        (error) => {
          console.log(error.text);
          toast({
            title: "Error",
            description: "There was an error sending your message. Please try again later.",
            variant: "destructive",
          });
        }
      );
  };

  return (
    <section id="contact" className="py-16">
      <div className="container mx-auto max-w-6xl px-4">
        <h2 className="section-title">Get In Touch</h2>
        <p className="text-muted-foreground mb-12 max-w-3xl">
          Interested in working together? Fill out the form below and I'll get back to you promptly.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Your Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  placeholder="Project Discussion"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="I'm interested in discussing a testing project for my application..."
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <Button type="submit" className="w-full md:w-auto">
                Send Message <Send className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <Mail className="h-5 w-5 text-primary mr-3" />
                  <a href="mailto:payal.lakkawar5@gmail.com" className="hover:text-primary">
                    payal.lakkawar5@gmail.com
                  </a>
                </li>
                <li className="flex items-center">
                  <Phone className="h-5 w-5 text-primary mr-3" />
                  <a href="tel:+91 9518965063" className="hover:text-primary">
                    +91 9518965063
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Connect With Me</h3>
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/in/payal-lakkawar-661267178/"
                  className="h-10 w-10 flex items-center justify-center rounded-full bg-secondary hover:bg-primary hover:text-white transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Availability</h3>
              <p className="text-muted-foreground">
                I am currently open to new opportunities and collaborations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
