import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer id="footer" className="bg-black py-20 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mb-20">
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Mission</h3>
            <p className="text-slate-400 leading-relaxed mb-6">
              By combining Secant's imaging precision, Caresoft's administrative
              excellence, and Consint AI's predictive intelligence, RJRTEL
              provides a truly 'Full Circle' technology ecosystem.
            </p>
            <p className="text-blue-400 font-medium">
              We don't just move data; we ensure it is clean, secure, and
              intelligent.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-6">
              RJRTEL Lebanon
            </h3>
            <div className="space-y-4 text-slate-400">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-500 shrink-0 mt-1" />
                <p>Harel El Mir Street, Tabet Building, Beirut Lebanon</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-500 shrink-0" />
                <p>+ 961 9 213866</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-500 shrink-0" />
                <p>info@rjrtel.net</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-6">
              RJRTEL Seychelles
            </h3>
            <div className="space-y-4 text-slate-400">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-500 shrink-0 mt-1" />
                <p>Global Gateway 2243, Rue De la Perle, Providence, Mahe</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-500 shrink-0" />
                <p>+1 650 452 6051</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-500 shrink-0" />
                <p>info@rjrtel.net</p>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-600">
          <p>© {new Date().getFullYear()} RJRTEL. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-blue-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-blue-400 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
