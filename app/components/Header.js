export default function Header() {
  return (
    <header>
      <nav className="bg-slate-300 rounded-lg py-2.5 px-5">
        <ul className="flex gap-icons flex-wrap">
          <li className="py-1 px-4 bg-iconColor hover:bg-iconColorHover transition-icon rounded-lg ">
            <a href="/city/Seoul">Seoul</a>
          </li>
          <li className="py-1 px-4 bg-iconColor  hover:bg-iconColorHover transition-icon rounded-lg">
            <a href="/city/London">London</a>
          </li>
          <li className="py-1 px-4 bg-iconColor hover:bg-iconColorHover transition-icon rounded-lg">
            <a href="/city/Paris">Paris</a>
          </li>
          <li className="py-1 px-4 bg-iconColor  hover:bg-iconColorHover transition-icon rounded-lg">
            <a href="/city/Tokyo">Tokyo</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
