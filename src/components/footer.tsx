export default function Footer() {
  const date = new Date();

  return (
    <footer className="border-primary-900 border-t">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="text-gray">© {date.getFullYear()} Eric Maicon. All rights reserved.</div>
          <div className="text-gray text-sm">Made with ❤️ using React & Tailwind CSS</div>
        </div>
      </div>
    </footer>
  );
}
