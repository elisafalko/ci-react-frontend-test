import { useEffect, useState } from "react";

import Layout from "@/components/Layout/Layout";
import Hero from "@/components/Hero/Hero";
// import IronPdf from "./components/IronPdf/IronPdf";
import WhyChoose from "@/components/WhyChoose/WhyChoose";
import EarlyAccess from "./components/EarlyAccess/EarlyAccess";

export default function App() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/api/items")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Request failed: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        setItems(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading…</p>;
  if (error) return <p className="text-danger">Error: {error}</p>;

  return (
    <Layout>
      <Hero />
      {/* <IronPdf /> */}
      <WhyChoose />
      <EarlyAccess />
      <div className="container py-4">
        <h1>Frontend Test Task</h1>
        <p className="text-muted">Data source: /api/items</p>

        <ul className="list-group mt-4">
          {items.map((item) => (
            <li key={item.id} className="list-group-item">
              <h5 className="mb-1">{item.title}</h5>
              <p className="mb-0 text-muted">{item.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}
