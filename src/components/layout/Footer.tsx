import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#1C2B3A" }} className="text-white">
      <div className="max-w-7xl mx-auto px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Newsletter */}
          <div>
            <h3 className="font-bold text-base mb-2">Stay up to date</h3>
            <p className="text-sm text-gray-300 mb-4">
              Subscribe to receive updates on new industrial drones, payloads, software solutions,
              spare parts, and operational insights.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-3 py-2 rounded text-sm text-gray-800 focus:outline-none"
                style={{ minWidth: 0 }}
              />
              <button
                className="px-4 py-2 rounded text-sm font-medium border border-white hover:bg-white hover:text-gray-900 transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </div>
          </div>

          {/* About Us */}
          <div>
            <h3 className="font-bold text-base mb-3">About Us</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              {["Leadership Team", "Why Choose Us", "Sustainability & Compliance", "Careers", "Partners & Certifications"].map(
                (item) => (
                  <li key={item}>
                    <Link href="#" className="hover:text-white hover:underline">
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-base mb-3">Services</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              {[
                "Deployment & Integration",
                "Maintenance & Repair Services",
                "Training & Certification",
                "Fleet Management Solutions",
                "Rental & Leasing",
              ].map((item) => (
                <li key={item}>
                  <Link href="#" className="hover:text-white hover:underline">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-bold text-base mb-3">Support</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              {[
                "Contact Us",
                "FAQ",
                "Technical Support",
                "Warranty & Service Plans",
                "Documentation & Manuals",
              ].map((item) => (
                <li key={item}>
                  <Link href="#" className="hover:text-white hover:underline">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Follow Us */}
        <div className="mt-10 pt-6 border-t border-gray-600">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <p className="text-sm font-semibold mb-2">Follow Us</p>
              <div className="flex gap-3">
                {["pinterest", "linkedin", "youtube", "facebook", "twitter"].map((social) => (
                  <Link
                    key={social}
                    href="#"
                    className="w-8 h-8 rounded-full flex items-center justify-center text-xs hover:bg-gray-600 transition-colors"
                    style={{ backgroundColor: "rgba(255,255,255,0.15)" }}
                  >
                    {social === "pinterest" && "P"}
                    {social === "linkedin" && "in"}
                    {social === "youtube" && "▶"}
                    {social === "facebook" && "f"}
                    {social === "twitter" && "𝕏"}
                  </Link>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-4 text-xs text-gray-400">
              <Link href="#" className="hover:text-white hover:underline">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-white hover:underline">
                Cookie Policy
              </Link>
              <Link href="#" className="hover:text-white hover:underline">
                Terms &amp; Conditions
              </Link>
              <span>© 2026 Wingspan Dynamics. All rights reserved.</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}