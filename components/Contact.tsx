import { useState } from 'react';
import { MapPin, Phone, Mail, Send, User, MessageSquare, CheckCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { ThreadPatternBackground, ThreadTexture, ThreadLines } from './ThreadElements';
import { ContactCard, StatCard } from './shared/Cards';
import { contactInfoData, contactStatsData } from './data/constants';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', phone: '', email: '', message: '' });
    }, 3000);
  };

  return (
    <>


      {/* Contact Information Section */}
      <section className="relative py-20 bg-slate-50">
        <ThreadTexture />
        
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0C1C27] mb-6">
              Get in <span className="text-[#D4AF37]">Touch</span>
            </h2>
            
            <div className="w-24 h-1 bg-[#D4AF37] mx-auto mt-6"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mb-16">
            {contactInfoData.map((info, index) => (
              <ContactCard key={index} info={info} />
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {contactStatsData.map((stat, index) => (
              <StatCard key={index} {...stat} />
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="relative py-20 bg-white overflow-hidden">
        <ThreadPatternBackground />
        
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0C1C27] mb-6">
              Our <span className="text-[#D4AF37]">Location</span>
            </h2>
            
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Visit us at our office in Pakistan for direct consultation and support.
            </p>
            
            <div className="w-24 h-1 bg-[#D4AF37] mx-auto mt-6"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="border-2 border-slate-200 bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="relative h-96 bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
                <ThreadTexture className="opacity-20" />
                
                <div className="text-center text-slate-500 relative z-10">
                  <MapPin className="w-16 h-16 mx-auto mb-4" />
                  <p className="text-lg font-medium mb-2">Interactive Map</p>
                  <p className="text-sm">Pakistan Location</p>
                </div>
                
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="relative">
                    <div className="w-8 h-8 bg-[#D4AF37] rounded-full shadow-xl animate-pulse border-4 border-white"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-[#0C1C27] rounded-full"></div>
                  </div>
                  <div className="absolute -top-12 -left-12 bg-[#0C1C27] text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap border-2 border-[#D4AF37]">
                    Pakistan Office
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-[#0C1C27]"></div>
                  </div>
                </div>
              </div>
              
              <div className="p-8 bg-[#0C1C27] text-white relative overflow-hidden">
                <ThreadTexture className="opacity-20" />
                
                <div className="text-center relative z-10">
                  <h4 className="font-bold text-xl text-[#D4AF37] mb-2">Pakistan Office</h4>
                  <p className="text-white/90">
                    Main manufacturing facility and headquarters
                  </p>
                  
                  <div className="w-32 h-1 bg-[#D4AF37] mx-auto mt-4"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="relative py-20 bg-slate-50">
        <ThreadLines />
        
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0C1C27] mb-6">
              Suggestions & <span className="text-[#D4AF37]">Recommendations</span>
            </h2>
            
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              We value your feedback and suggestions. Help us improve our services and better serve your needs.
            </p>
            
            <div className="w-24 h-1 bg-[#D4AF37] mx-auto mt-6"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="border-2 border-slate-200 bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="bg-[#0C1C27] p-8 text-white relative overflow-hidden">
                <ThreadTexture className="opacity-20" />
                
                <div className="flex items-center gap-6 mb-4 relative z-10">
                  <div className="w-16 h-16 bg-[#D4AF37] rounded-lg flex items-center justify-center shadow-xl">
                    <MessageSquare className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold mb-2">Send Us Your Message</h3>
                    <p className="text-white/80 text-lg">We'd love to hear from you</p>
                  </div>
                </div>
                
                <div className="w-full h-1 bg-[#D4AF37]"></div>
              </div>

              <div className="p-8 bg-white">
                <ThreadTexture className="opacity-5" />
                
                {isSubmitted ? (
                  <div className="text-center py-16 relative">
                    <div className="w-20 h-20 bg-[#D4AF37] rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
                      <CheckCircle className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-[#0C1C27] mb-4">Thank You!</h3>
                    <p className="text-slate-600 text-lg">Your message has been sent successfully. We'll get back to you within 24 hours.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-8 relative">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-3">
                        <Label htmlFor="name" className="flex items-center gap-3 text-[#0C1C27] font-bold text-lg">
                          <div className="w-8 h-8 bg-[#D4AF37] rounded-lg flex items-center justify-center">
                            <User className="w-5 h-5 text-white" />
                          </div>
                          Full Name *
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          placeholder="Enter your full name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="h-14 border-2 border-slate-300 focus:border-[#D4AF37] rounded-lg bg-white text-lg"
                        />
                      </div>

                      <div className="space-y-3">
                        <Label htmlFor="phone" className="flex items-center gap-3 text-[#0C1C27] font-bold text-lg">
                          <div className="w-8 h-8 bg-[#0C1C27] rounded-lg flex items-center justify-center">
                            <Phone className="w-5 h-5 text-white" />
                          </div>
                          Contact Number *
                        </Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          placeholder="Enter your phone number"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          className="h-14 border-2 border-slate-300 focus:border-[#D4AF37] rounded-lg bg-white text-lg"
                        />
                      </div>
                    </div>

                    <div className="space-y-3">
                      <Label htmlFor="email" className="flex items-center gap-3 text-[#0C1C27] font-bold text-lg">
                        <div className="w-8 h-8 bg-[#D4AF37] rounded-lg flex items-center justify-center">
                          <Mail className="w-5 h-5 text-white" />
                        </div>
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Enter your email address"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="h-14 border-2 border-slate-300 focus:border-[#D4AF37] rounded-lg bg-white text-lg"
                      />
                    </div>

                    <div className="space-y-3">
                      <Label htmlFor="message" className="flex items-center gap-3 text-[#0C1C27] font-bold text-lg">
                        <div className="w-8 h-8 bg-[#0C1C27] rounded-lg flex items-center justify-center">
                          <MessageSquare className="w-5 h-5 text-white" />
                        </div>
                        Message *
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Share your suggestions, recommendations, or any questions you might have..."
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={8}
                        className="border-2 border-slate-300 focus:border-[#D4AF37] resize-none rounded-lg bg-white text-lg"
                      />
                    </div>

                    <div className="text-center pt-6">
                      <Button
                        type="submit"
                        size="lg"
                        className="bg-[#D4AF37] hover:bg-[#B8941F] text-white px-16 py-6 text-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 rounded-lg"
                      >
                        <Send className="w-6 h-6 mr-3" />
                        Send Message
                      </Button>
                    </div>
                  </form>
                )}
              </div>
            </div>


          </div>
        </div>
      </section>
    </>
  );
}