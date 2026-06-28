function Footer() {
  return (
    <footer className="bg-blue-900 text-white mt-20">

      <div className="max-w-7xl mx-auto px-8 py-12">

        <h2 className="text-3xl font-bold">
          ResearchHub
        </h2>

        <p className="mt-4 text-gray-200">
          Store • Search • Share Academic Research Papers
        </p>

        <div className="flex gap-10 mt-8">

          <a href="#">About</a>

          <a href="#">Contact</a>

          <a href="#">Privacy Policy</a>

          <a href="#">Terms & Conditions</a>

        </div>

        <hr className="my-8 border-blue-900" />

        <p className="text-center">
          © 2026 ResearchHub. All Rights Reserved.
        </p>

      </div>

    </footer>
  );
}

export default Footer;