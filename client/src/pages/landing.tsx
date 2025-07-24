import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useLocation } from "wouter";
import { Shield, Users, BarChart3, FileText, Activity, MessageCircle, CheckCircle, Lock, Zap } from "lucide-react";
import PedigreeChart from "@/components/pedigree-chart";

export default function Landing() {
  const [, setLocation] = useLocation();

  const features = [
    {
      icon: Users,
      title: "Interactive Family Tree",
      description: "Build a comprehensive family medical history with our intuitive drag-and-drop interface.",
      items: ["Add unlimited family members", "Track medical conditions", "Visual relationship mapping"]
    },
    {
      icon: BarChart3,
      title: "AI-Powered Risk Analysis",
      description: "Get intelligent risk assessments based on family history and lifestyle factors.",
      items: ["Real-time risk scoring", "Color-coded indicators", "Evidence-based algorithms"]
    },
    {
      icon: FileText,
      title: "Digital Health Passport",
      description: "Generate comprehensive health reports with QR codes for easy sharing with healthcare providers.",
      items: ["PDF export functionality", "QR code integration", "Secure doctor sharing"]
    },
    {
      icon: Activity,
      title: "Smart Recommendations",
      description: "Receive personalized lifestyle and screening recommendations based on your risk profile.",
      items: ["Preventive care reminders", "Lifestyle optimization tips", "Screening schedules"]
    },
    {
      icon: MessageCircle,
      title: "Family Health Timeline",
      description: "Track major health events across your family timeline for better pattern recognition.",
      items: ["Chronological health events", "Pattern identification", "Interactive timeline view"]
    },
    {
      icon: Zap,
      title: "AI Health Assistant",
      description: "Get instant answers to your health questions through our intelligent chatbot.",
      items: ["24/7 health guidance", "Symptom assessment", "Medical terminology help"]
    }
  ];

  const trustIndicators = [
    { icon: Shield, text: "HIPAA Compliant" },
    { icon: Lock, text: "End-to-End Encrypted" },
    { icon: CheckCircle, text: "AI-Powered Insights" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-bg text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                  Track Genetic Risks.<br />
                  <span className="text-emerald-200">Empower Preventive Health.</span>
                </h1>
                <p className="text-xl text-emerald-100 max-w-lg">
                  Build your family medical history, assess genetic risks using AI, and receive personalized health insights to stay ahead of potential health issues.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg"
                  className="bg-white text-emerald-600 hover:bg-slate-50 font-semibold shadow-lg"
                  onClick={() => setLocation("/profile-setup")}
                >
                  Get Started Free
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-emerald-600 font-semibold bg-transparent"
                  onClick={() => window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank")}
                >
                  Watch Demo
                </Button>
              </div>

              <div className="flex items-center space-x-6 pt-8">
                {trustIndicators.map((indicator, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <indicator.icon className="w-5 h-5 text-emerald-200" />
                    <span className="text-sm text-emerald-200">{indicator.text}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              {/* Interactive Pedigree Chart */}
              <div className="bg-white rounded-2xl shadow-2xl p-6">
                <PedigreeChart compact={true} />
              </div>
              
              <div className="absolute -top-4 -right-4 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full risk-indicator"></div>
                  <span className="text-sm font-medium text-slate-700">Low Risk</span>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center space-x-3">
                  <Users className="w-8 h-8 text-emerald-600" />
                  <div>
                    <div className="text-sm font-medium text-slate-700">Family Tree</div>
                    <div className="text-xs text-slate-500">8 members analyzed</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Comprehensive Genetic Health Tracking
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              From family tree building to AI-powered risk analysis, GeneGuard provides everything you need for proactive health management.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-slate-50 card-hover border-0">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-health-primary rounded-lg flex items-center justify-center mb-6">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">{feature.title}</h3>
                  <p className="text-slate-600 mb-4">{feature.description}</p>
                  <ul className="text-sm text-slate-500 space-y-1">
                    {feature.items.map((item, itemIndex) => (
                      <li key={itemIndex}>• {item}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Ready to Take Control of Your Health?
          </h2>
          <p className="text-xl text-slate-600 mb-8">
            Start building your family medical history and get personalized health insights today.
          </p>
          <Button 
            size="lg"
            className="bg-health-primary hover:bg-emerald-600 text-white font-semibold px-8 py-4"
            onClick={() => setLocation("/profile-setup")}
          >
            Begin Your Health Journey
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-health-primary rounded-lg flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">GeneGuard</span>
              </div>
              <p className="text-slate-400 text-sm">Empowering preventive health through genetic risk tracking and AI-powered insights.</p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Features</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">Family Tree Builder</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Risk Analysis</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Health Passport</a></li>
                <li><a href="#" className="hover:text-white transition-colors">AI Assistant</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Security</h4>
              <div className="space-y-3">
                {trustIndicators.map((indicator, index) => (
                  <div key={index} className="flex items-center space-x-2 text-sm text-slate-400">
                    <indicator.icon className="w-4 h-4 text-health-primary" />
                    <span>{indicator.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="border-t border-slate-800 mt-12 pt-8 text-center">
            <p className="text-slate-400 text-sm">&copy; 2024 GeneGuard. All rights reserved. This is a prototype for demonstration purposes.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
