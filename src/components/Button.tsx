import { Link } from "react-router";

// type Props = {
//   content: string
// }
// export default function Button({ content }: Props) {
//   return <button className="font-bold border-1 bg-[#FFD65A] p-4 rounded-full drop-shadow-[_3px_4px_rgba(0,0,0,1)]">
//     {content}
//   </button>
// }

export default function Button({ content, to, onClick, className = "" }: { content: string; to?: string; onClick?: () => void; className?: string }) {
  const baseClasses = "font-bold border-1 bg-[#FFD65A] hover:bg-yellow-400 p-4 rounded-full drop-shadow-[_3px_4px_rgba(55,65,81,1)] transition-colors duration-200 uppercase tracking-wide text-gray-700 ";

  if (to) {
    return (
      <Link
        to={to}
        className={`${baseClasses} ${className}`}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      className={`${baseClasses} ${className}`}
      onClick={onClick}
    >
      {content}
    </button>
  );
}
