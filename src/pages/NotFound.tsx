import { Link } from "react-router-dom";
import Seo from "../components/Seo";

export default function NotFound() {
  return (
    <>
      <Seo title="Page not found" description="The page you're looking for has wandered." />
      <div className="px-6 py-32 text-center">
        <h1 className="font-serif text-5xl mb-4">A page beyond our reach</h1>
        <p className="text-charcoal/70 mb-8">The page you're looking for has wandered off.</p>
        <Link to="/" className="text-terracotta">← Return home</Link>
      </div>
    </>
  );
}
