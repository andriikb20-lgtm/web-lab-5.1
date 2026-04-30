export default function Header() {
  return (
    <header className="mb-10">
      <h1 className="text-[#2c3e50] border-b-2 border-[#3498db] pb-3 text-4xl font-bold tracking-tight">
        Andrii Haviuk
      </h1>
      <div className="mt-6 text-lg">
        <p className="mb-2"><span className="font-bold">Email:</span> andrii.haviuk.2023@lpnu.ua</p>
        <p><span className="font-bold">Location:</span> Lviv, Ukraine</p>
      </div>
      <hr className="mt-8 border-gray-300" />
    </header>
  );
}