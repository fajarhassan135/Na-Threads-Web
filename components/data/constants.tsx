import { CheckCircle, Package, Palette, Star, Scissors, Shirt, Cog, Shield, Users, MapPin, Phone, Mail, Clock, Target, Lightbulb, Heart, Globe, Award, Factory, Zap } from 'lucide-react';

// Color scheme - only gold and blue
export const colors = {
  primary: '#0C1C27', // Navy blue
  gold: '#D4AF37',    // Gold
  white: '#FFFFFF',
  slate: {
    50: '#F8FAFC',
    100: '#F1F5F9',
    200: '#E2E8F0',
    300: '#CBD5E1',
    400: '#94A3B8',
    500: '#64748B',
    600: '#475569',
    700: '#334155',
    800: '#1E293B',
    900: '#0F172A'
  }
};

// Services data - simplified colors
export const servicesData = [
  {
    icon: <Package className="w-8 h-8" />,
    title: "Thread Manufacturing",
    description: "Crafting high-quality threads from raw yarn",
    bgColor: "from-[#0C1C27] to-[#1E293B]"
  },
  {
    icon: <Cog className="w-8 h-8" />,
    title: "Doubling",
    description: "Combining multiple yarns for added strength and durability",
    bgColor: "from-[#D4AF37] to-[#B8941F]"
  },
  {
    icon: <Palette className="w-8 h-8" />,
    title: "Dyeing",
    description: "Custom color solutions to meet your brand's specifications",
    bgColor: "from-[#0C1C27] to-[#1E293B]"
  }
];

// Manufacturing divisions data
export const divisionsData = [
  {
    icon: <Package className="w-8 h-8" />,
    title: "Thread Manufacturing Division",
    description: "This core division focuses on producing high-quality threads tailored to meet the varying demands of the textile industry. Using premium raw materials and advanced machinery, we manufacture threads with superior strength, smooth texture, and consistent performance.",
    features: ["Premium Raw Materials", "Advanced Machinery", "Superior Strength & Texture"],
    bgColor: "from-[#0C1C27] to-[#1E293B]"
  },
  {
    icon: <Cog className="w-8 h-8" />,
    title: "Cone Winding Division",
    description: "Our Cone Winding Division ensures that threads are carefully wound onto cones using state-of-the-art winding machines. This process enhances usability, reduces wastage, and ensures smooth unwinding during usage.",
    features: ["State-of-the-art Winding Machines", "Various Cone Sizes", "Reduced Wastage"],
    bgColor: "from-[#D4AF37] to-[#B8941F]"
  },
  {
    icon: <Palette className="w-8 h-8" />,
    title: "Dyeing Division",
    description: "In this division, threads undergo a controlled dyeing process to achieve rich, uniform, and long-lasting colors. We use eco-friendly dyes and sustainable practices to minimize environmental impact while maintaining vibrant color quality.",
    features: ["Eco-friendly Dyes", "Sustainable Practices", "Vibrant Color Quality"],
    bgColor: "from-[#0C1C27] to-[#1E293B]"
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Doubling Division",
    description: "The Doubling Division combines two or more strands of thread to create a thicker, stronger, and more durable final product. This process enhances tensile strength and reduces breakage, making the thread ideal for heavy-duty or decorative applications.",
    features: ["Enhanced Tensile Strength", "Precision-controlled Machines", "Heavy-duty Applications"],
    bgColor: "from-[#D4AF37] to-[#B8941F]"
  }
];

// Products data
export const productsData = [
  {
    name: "Drawcords",
    image1: "https://images.unsplash.com/photo-1566479168691-9e2a5bdd1ce1?w=400&h=300&fit=crop",
    image2: "https://images.unsplash.com/photo-1597273142976-b17c1b1fe73a?w=400&h=300&fit=crop",
    description: "High-quality drawcords for clothing and accessories"
  },
  {
    name: "Zips", 
    image1: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
    image2: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&h=300&fit=crop",
    description: "Durable zippers for various textile applications"
  },
  {
    name: "VT3 Buttons",
    image1: "https://images.unsplash.com/photo-1593642532744-d377ab507dc8?w=400&h=300&fit=crop",
    image2: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
    description: "Premium VT3 buttons for professional garment finishing"
  },
  {
    name: "Sewing Threads",
    image1: "figma:asset/ac8577d12505648813cd320969a201ef101bb4f2.png",
    image2: "figma:asset/4217dd971a8f16af41d5562ad1fccd571f7e7f76.png",
    description: "High-strength sewing threads for all textile needs"
  }
];

// Contact info data
export const contactInfoData = [
  {
    icon: <MapPin className="w-6 h-6" />,
    title: "Our Location",
    details: ["Head Office: Sattar Square Motor Market, Faisalabad"],
    color: "from-[#D4AF37] to-[#B8941F]"
  },
  {
    icon: <Phone className="w-6 h-6" />,
    title: "Phone Number",
    details: ["Pakistan: +92 300 8652405, +92 331 20714315"],
    color: "from-[#0C1C27] to-[#1E293B]"
  },
  {
    icon: <Mail className="w-6 h-6" />,
    title: "Email Address",
    details: ["natraders2011@gmail.com"],
    color: "from-[#0C1C27] to-[#1E293B]"
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Business Hours",
    details: ["Monday to Saturday: 9:00 AM - 3:00 PM"],
    color: "from-[#D4AF37] to-[#B8941F]"
  }
];

// Mission data
export const missionData = [
  {
    icon: <Target className="w-8 h-8" />,
    title: "Our Mission",
    description: "We aim to deliver high-quality, innovative, and sustainable thread solutions that support the evolving needs of the textile industry. Our focus is on excellence, customization, and dependable service to build lasting relationships with our clients.",
    color: "from-[#0C1C27] to-[#1E293B]"
  },
  {
    icon: <Lightbulb className="w-8 h-8" />,
    title: "Our Vision",
    description: "To become Pakistan's most trusted and forward-looking thread manufacturer, known for setting industry standards in quality, sustainability, and innovation.",
    color: "from-[#D4AF37] to-[#B8941F]"
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: "Our Values",
    description: "We believe in quality, integrity, and innovation. Our work is guided by a commitment to customer satisfaction, sustainable practices, and the perfect blend of traditional craftsmanship with modern technology.",
    color: "from-[#0C1C27] to-[#1E293B]"
  }
];

// Core values data
export const coreValuesData = [
  { icon: <Shield className="w-6 h-6" />, label: "Quality", color: "from-[#0C1C27] to-[#1E293B]" },
  { icon: <Users className="w-6 h-6" />, label: "Teamwork", color: "from-[#D4AF37] to-[#B8941F]" },
  { icon: <Globe className="w-6 h-6" />, label: "Sustainability", color: "from-[#0C1C27] to-[#1E293B]" },
  { icon: <Lightbulb className="w-6 h-6" />, label: "Innovation", color: "from-[#D4AF37] to-[#B8941F]" }
];

// Hero stats data
export const heroStatsData = [
  { icon: <Globe className="w-6 h-6" />, value: "2+", label: "Countries Served", color: "from-[#0C1C27] to-[#1E293B]" },
  { icon: <Users className="w-6 h-6" />, value: "500+", label: "Happy Clients", color: "from-[#D4AF37] to-[#B8941F]" },
  { icon: <Award className="w-6 h-6" />, value: "30+", label: "Years Experience", color: "from-[#0C1C27] to-[#1E293B]" },
  { icon: <Zap className="w-6 h-6" />, value: "99%", label: "Quality Rate", color: "from-[#D4AF37] to-[#B8941F]" }
];

// Manufacturing stats data
export const manufacturingStatsData = [
  { value: "1.8M+", label: "Cones/Year", icon: <Package className="w-6 h-6" />, color: "from-[#0C1C27] to-[#1E293B]" },
  { value: "99.9%", label: "Quality Rate", icon: <Shield className="w-6 h-6" />, color: "from-[#D4AF37] to-[#B8941F]" },
  { value: "24/7", label: "Operations", icon: <Cog className="w-6 h-6" />, color: "from-[#0C1C27] to-[#1E293B]" },
  { value: "ISO", label: "Certified", icon: <Award className="w-6 h-6" />, color: "from-[#D4AF37] to-[#B8941F]" }
];

// Contact stats data
export const contactStatsData = [
  { value: "24hrs", label: "Response Time", icon: <Clock className="w-5 h-5" />, color: "from-[#0C1C27] to-[#1E293B]" },
  { value: "1", label: "Office Location", icon: <MapPin className="w-5 h-5" />, color: "from-[#D4AF37] to-[#B8941F]" },
  { value: "30+", label: "Years Experience", icon: <Star className="w-5 h-5" />, color: "from-[#0C1C27] to-[#1E293B]" },
  { value: "24/7", label: "Support", icon: <Phone className="w-5 h-5" />, color: "from-[#D4AF37] to-[#B8941F]" }
];

// Footer stats data
export const footerStatsData = [
  { icon: <Factory className="w-5 h-5" />, value: "30+", label: "Years" },
  { icon: <Award className="w-5 h-5" />, value: "ISO", label: "Certified" },
  { icon: <Zap className="w-5 h-5" />, value: "24/7", label: "Production" }
];