const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-6 py-10">
        <div className="flex flex-wrap justify-between gap-y-10">
          {/* Logo & Tagline */}
          <div>
            <img src="/images/cedur.png" alt="Cedur Logo" className="mb-4 w-32" />
            <p className="font-semibold">Outthink | Outwork | Outlast</p>
          </div>

          {/* Our Services */}
          <div>
            <h4 className="text-lg font-semibold mb-3">Our Services</h4>
            <ul className="space-y-2">
              <li>People Platform</li>
              <li>Payroll</li>
              <li>HR</li>
              <li>Time and Attendance</li>
              <li>Hiring and Onboarding</li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-3">Company</h4>
            <ul className="space-y-2">
              <li>About Us</li>
              <li>Contact Us</li>
              <li>User Policy</li>
              <li>Terms of Service</li>
              <li>FAQs</li>
            </ul>
          </div>

          {/* Education */}
          <div>
            <h4 className="text-lg font-semibold mb-3">Education</h4>
            <ul className="space-y-2">
              <li>Blog</li>
            </ul>
          </div>

          {/* Connect With Us */}
          <div>
            <h4 className="text-lg font-semibold mb-3">Connect with us</h4>
            <ul className="space-y-2">
              <li>📞 For Help: 011-4345-1244</li>
              <li>📱 For Sales: +91-85959-21201</li>
              <li>📧 info@cedurnow.com</li>
            </ul>
            <div className="flex gap-3 mt-4">
              <a
                href="https://api.whatsapp.com/send/?phone=918595921201&text&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/images/whatsapp.png" alt="WhatsApp" className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/company/cedurenterprises/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/images/linkedin.png" alt="LinkedIn" className="w-6 h-6" />
              </a>
              <a
                href="https://www.instagram.com/cedurhq/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/images/instagram.jpeg" alt="Instagram" className="w-6 h-6" />
              </a>
              <a
                href="https://www.youtube.com/channel/UClXPP-MfOO-PPzMnP6PidOw"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/images/youtube.png" alt="YouTube" className="w-6 h-6" />
              </a>
              <a
                href="https://x.com/CedurHQ"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/images/x.png" alt="X" className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 text-center text-sm text-gray-400 border-t border-gray-700 pt-5">
          © 2025, Cedur Enterprises Private Limited, All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
