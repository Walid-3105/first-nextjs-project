"use client";

const Footer = () => {
  return (
    <div>
      <footer className="mt-10 px-16 items-center p-4 shadow-xl border">
        <aside className="flex text-center items-center justify-center">
          <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
