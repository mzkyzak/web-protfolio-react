import React, { useState } from "react";
import { motion } from "framer-motion";
import Swal from "sweetalert2";
import axios from "axios";

const listSocials = [
  { name: "LinkedIn", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg", url: "https://www.linkedin.com/in/taufiq-ikhsan-muzaky-42ab26388/" },
  { name: "WhatsApp", logo: "https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg", url: "https://wa.me/6285810192529" },
  { name: "Instagram", logo: "https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg", url: "https://www.instagram.com/mzky_zak" },
  { name: "GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", url: "https://github.com/mzkyzak" },
  { name: "TikTok", logo: "https://www.svgrepo.com/show/333611/tiktok.svg", url: "https://www.tiktok.com/@mzky896" },
  { name: "Youtube", logo: "https://upload.wikimedia.org/wikipedia/commons/0/09/YouTube_full-color_icon_%282017%29.svg", url: "https://www.youtube.com/@mzky896" },
];

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    Swal.fire({ title: "Sending...", background: '#030014', color: '#fff', allowOutsideClick: false, didOpen: () => Swal.showLoading() });
    try {
      const formSubmitUrl = 'https://formsubmit.co/ajax/taufiqikhsanmuzaky18@gmail.com';
      const payload = { ...formData, _subject: 'New Message from Portfolio: ' + formData.name, _captcha: 'false', _template: 'table' };
      const response = await axios.post(formSubmitUrl, payload);
      if (response.status === 200) {
        Swal.fire({ title: 'Berhasil!', text: 'Pesan Anda telah mendarat di inbox saya.', icon: 'success', background: '#030014', color: '#fff', confirmButtonColor: '#dc2626', timer: 3000 });
        setFormData({ name: "", email: "", message: "" });
      }
    } catch (error) {
      Swal.fire({ title: 'Gagal!', text: 'Ada kendala koneksi.', icon: 'error', background: '#030014', color: '#fff', confirmButtonColor: '#dc2626' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-6 relative z-10 overflow-hidden bg-transparent">
      <div className="absolute top-0 left-0 w-full overflow-hidden bg-red-600/5 py-4 border-y border-white/5 pointer-events-none transform-gpu">
        <motion.div animate={{ x: [0, -1000] }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="flex whitespace-nowrap gap-10 transform-gpu" style={{ willChange: 'transform' }}>
          {[...Array(10)].map((_, i) => (
            <span key={i} className="text-white/20 text-sm font-black uppercase tracking-[0.5em]">Mari • kita • Berkolaborasi • Terbuka untuk Proyek •</span>
          ))}
        </motion.div>
      </div>

      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} transition={{ duration: 0.8 }} className="max-w-5xl mx-auto bg-white/[0.02] backdrop-blur-xl p-8 md:p-16 border border-white/10 rounded-[2rem] relative transform-gpu mt-10">
        <div className="grid md:grid-cols-2 gap-12 relative z-10 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-outfit font-black uppercase tracking-tighter text-white">Hubungi kami</h2>
              <p className="text-slate-400 text-lg mt-4 max-w-sm">Ada yang ingin ditanyakan? Kirimin saya pesan dan mari Diskusi?</p>
              <p className="text-slate-400 text-lg mt-4 max-w-sm">Let's go to connect with me❤️</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {listSocials.map((social, i) => (
                <motion.a key={i} href={social.url} target="_blank" rel="noopener noreferrer" whileHover={{ y: -5 }} className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-red-600/50 transition-all group overflow-hidden relative transform-gpu">
                  <motion.div initial={{ opacity: 0, scale: 0.5 }} whileHover={{ opacity: 1, scale: 1 }} className="absolute inset-0 bg-red-600/10 blur-xl z-0 transform-gpu" />
                  <div className="w-6 h-6 relative z-10 flex items-center justify-center">
                   <motion.img src={social.logo} alt={social.name} className={`w-full h-full object-contain transition-all duration-300 transform-gpu ${social.name.toLowerCase() === 'github' || social.name.toLowerCase() === 'tiktok' ? 'brightness-0 invert' : ''}`} whileHover={{ rotate: [0, 10, -10, 10, 0], scale: 1.2, transition: { duration: 0.5, repeat: Infinity } }} loading="lazy" />
                  </div>
                  <span className="text-sm font-bold text-white group-hover:text-red-500 relative z-10 transition-colors">{social.name}</span>
                </motion.a>
              ))}
            </div>
          </div>

          <motion.form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-4">
              <input type="text" name="name" placeholder="Nama Lengkap" value={formData.name} onChange={handleChange} className="w-full p-4 bg-white/5 border border-white/10 rounded-xl text-white outline-none focus:border-red-600 transition-all placeholder:text-slate-600" required />
              <input type="email" name="email" placeholder="Alamat Email" value={formData.email} onChange={handleChange} className="w-full p-4 bg-white/5 border border-white/10 rounded-xl text-white outline-none focus:border-red-600 transition-all placeholder:text-slate-600" required />
              <textarea name="message" placeholder="Pesan Anda" value={formData.message} onChange={handleChange} className="w-full p-4 bg-white/5 border border-white/10 rounded-xl text-white h-32 outline-none focus:border-red-600 transition-all placeholder:text-slate-600 resize-none" required />
            </div>
            <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} type="submit" disabled={isSubmitting} className="w-full py-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl uppercase tracking-widest text-sm transition-all shadow-lg shadow-red-600/20 disabled:opacity-50 transform-gpu">
              {isSubmitting ? "TRANSMITTING..." : "Kirim Sekarang"}
            </motion.button>
          </motion.form>
        </div>
      </motion.div>
    </section>
  );
}