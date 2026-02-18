import Image from "next/image";
import Link from "next/link";
function Navbar() {
  return (
    <div className="flex items-center justify-between border-b border-(--border-color)/20 pb-9">
      <div className="flex items-center gap-10.5 md:gap-20">
        <div className="md:hidden">
          <Image
            src="/assets/shared/tablet/icon-hamburger.svg"
            alt="Menu"
            width={16}
            height={15}
            priority
          />
        </div>

        <div>
          <Image
            src="/assets/shared/desktop/logo.svg"
            alt="Audiophile logo"
            width={143}
            height={25}
            priority
          />
        </div>
        <nav className="hidden md:block">
          <ul className="flex gap-8.5">
            <li>
              <Link href="/" className="text-white! uppercase">
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/products/headphones"
                className="text-white! uppercase"
              >
                Headphones
              </Link>
            </li>
            <li>
              <Link href="/products/speakers" className="text-white! uppercase">
                Speakers
              </Link>
            </li>
            <li>
              <Link
                href="/products/earphones"
                className="text-white! uppercase"
              >
                Earphones
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div>
        <Image
          src="/assets/shared/desktop/icon-cart.svg"
          alt="Cart"
          width={23}
          height={20}
          priority
        />
      </div>
    </div>
  );
}

export default Navbar;
