
import { Mail, Phone, MapPin } from 'lucide-react';
const Contact = () => (
  <section className="py-24 px-8 bg-[#0a0c10]">
    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
      <div>
        <h2 className="text-4xl font-bold text-white mb-4">Let's Discuss Your Finances</h2>
        <p className="text-gray-400 mb-10">Schedule a free consultation today. We are ready to help you optimize your business.</p>
        
        <div className="space-y-6">
          {[
            { icon: <Phone />, label: "Call Us", val: "+1 (555) 123-4567" },
            { icon: <Mail />, label: "Email Us", val: "contact@finauditpro.com" },
            { icon: <MapPin />, label: "Visit Us", val: "123 Financial District, NY" }
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-4 p-4 bg-[#11141b] rounded-xl border border-white/5">
              <div className="text-blue-500">{item.icon}</div>
              <div>
                <p className="text-gray-500 text-xs">{item.label}</p>
                <p className="text-white font-medium">{item.val}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-[#11141b] p-8 rounded-2xl border border-white/5">
        <form className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <input type="text" placeholder="Name" className="bg-[#0a0c10] border border-white/10 p-3 rounded-md text-white outline-none focus:border-blue-500" />
            <input type="email" placeholder="Email" className="bg-[#0a0c10] border border-white/10 p-3 rounded-md text-white outline-none focus:border-blue-500" />
          </div>
          <select className="w-full bg-[#0a0c10] border border-white/10 p-3 rounded-md text-gray-400 outline-none">
            <option>Statutory Audit</option>
            <option>Tax Advisory</option>
          </select>
          <textarea placeholder="Tell us about your needs..." rows={4} className="w-full bg-[#0a0c10] border border-white/10 p-3 rounded-md text-white outline-none focus:border-blue-500" />
          <button className="w-full bg-blue-600 text-white font-bold py-3 rounded-md hover:bg-blue-700 transition">Send Message</button>
        </form>
      </div>
    </div>
  </section>
);

export default Contact;