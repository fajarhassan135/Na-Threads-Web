interface StatCardProps {
  icon: React.ReactNode;
  value: string;
  label: string;
  color: string;
}

export const StatCard = ({ icon, value, label, color }: StatCardProps) => (
  <div className="group relative text-center p-6 rounded-lg bg-white border border-slate-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
    <div className={`flex justify-center text-white mb-3 p-3 rounded-lg bg-gradient-to-r ${color} group-hover:scale-105 transition-transform duration-300`}>
      {icon}
    </div>
    <div className="text-2xl font-bold text-[#0C1C27] mb-1">{value}</div>
    <div className="text-sm text-slate-600">{label}</div>
  </div>
);

interface ServiceCardProps {
  service: {
    icon: React.ReactNode;
    title: string;
    description: string;
    bgColor: string;
  };
}

export const ServiceCard = ({ service }: ServiceCardProps) => (
  <div className="group relative bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 overflow-hidden hover:-translate-y-2">
    {/* Content */}
    <div className="p-8">
      {/* Icon */}
      <div className="relative mb-6 flex justify-center">
        <div className={`inline-flex p-4 rounded-lg bg-gradient-to-r ${service.bgColor} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
          {service.icon}
        </div>
      </div>
      
      {/* Title */}
      <h3 className="text-xl font-bold text-[#0C1C27] mb-4 text-center group-hover:text-[#D4AF37] transition-colors duration-300">
        {service.title}
      </h3>
      
      {/* Description */}
      <p className="text-slate-600 leading-relaxed text-center">
        {service.description}
      </p>
    </div>
  </div>
);

interface ContactCardProps {
  info: {
    icon: React.ReactNode;
    title: string;
    details: string[];
    color: string;
  };
}

export const ContactCard = ({ info }: ContactCardProps) => (
  <div className="group relative bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 overflow-hidden hover:-translate-y-2">
    <div className="text-center p-8">
      {/* Icon */}
      <div className="relative mb-6 flex justify-center">
        <div className={`inline-flex p-4 rounded-lg bg-gradient-to-r ${info.color} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
          {info.icon}
        </div>
      </div>
      
      {/* Title */}
      <h3 className="text-xl font-bold text-[#0C1C27] mb-4">
        {info.title}
      </h3>
      
      {/* Details */}
      <div className="space-y-2">
        {info.details.map((detail, detailIndex) => (
          <p key={detailIndex} className="text-slate-600 text-sm leading-relaxed">
            {detail}
          </p>
        ))}
      </div>
    </div>
  </div>
);