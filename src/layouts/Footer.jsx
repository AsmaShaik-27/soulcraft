const Footer = () => {
  return (
    <footer className="bg-[#2f1f1b] text-white px-6 md:px-12 lg:px-20">
      <div
        className="max-w-7xl mx-auto
        py-8 border-t border-white/10"
      >
        {/* Bottom */}
        <div
          className="flex flex-col md:flex-row
          items-center justify-between gap-4
          text-white/60 text-sm"
          style={{ fontFamily: "Inter" }}
        >
          <p>© 2026 SoulCraft. All rights reserved.</p>

          <div className="flex gap-6">
            <p className="hover:text-white transition cursor-pointer">
              Privacy Policy
            </p>

            <p className="hover:text-white transition cursor-pointer">
              Terms & Conditions
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;