// will contain footer info related to the web application

export default function Footer() {
  function getCurrentYear() {
    const currentYear = new Date().getFullYear();
    return currentYear;
  }

  return (
    <footer className="font-extrabold text-2xl bg-gray-800 text-blue-200 py-3">
      <div className="text-center">Ecomm &#169; {getCurrentYear()}</div>
    </footer>
  );
}
