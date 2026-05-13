import { useState } from 'react'
import { FiSend, FiCheck } from 'react-icons/fi'
import { sendContactForm } from '../services/api'

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState('idle')

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('sending')
    
    // Show success instantly, send in background
    sendContactForm(formData)
    setStatus('success')
    setFormData({ name: '', email: '', subject: '', message: '' })
    setTimeout(() => setStatus('idle'), 4000)
  }

  return (
    <section id="contact" className="py-24">
      <div className="max-w-2xl mx-auto px-6">
        <p className="text-indigo-600 font-medium text-center mb-3">Contact</p>
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-4">Get In Touch</h2>
        <p className="text-gray-500 text-center mb-12">Have a project in mind? Let's talk about it.</p>
        
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid md:grid-cols-2 gap-5">
            <input type="text" name="name" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} placeholder="Name" required className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-indigo-500 focus:bg-white transition-all" />
            <input type="email" name="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} placeholder="Email" required className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-indigo-500 focus:bg-white transition-all" />
          </div>
          <input type="text" name="subject" value={formData.subject} onChange={e => setFormData({...formData, subject: e.target.value})} placeholder="Subject" className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-indigo-500 focus:bg-white transition-all" />
          <textarea name="message" value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} placeholder="Message" required rows="5" className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-indigo-500 focus:bg-white transition-all resize-none" />
          
          <button type="submit" disabled={status === 'sending' || status === 'success'} className="w-full py-4 bg-gray-900 text-white rounded-xl font-medium hover:bg-gray-800 transition-colors disabled:opacity-70 flex items-center justify-center gap-2">
            {status === 'sending' ? (
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white" />
            ) : status === 'success' ? (
              <><FiCheck className="text-xl" /> Sent!</>
            ) : (
              <><FiSend /> Send Message</>
            )}
          </button>
          
          {status === 'success' && (
            <p className="text-green-600 text-center font-medium">Thanks! Your message has been sent.</p>
          )}
        </form>
      </div>
    </section>
  )
}

export default Contact