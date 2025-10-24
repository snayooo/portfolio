"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

interface PocketbaseItem {
  id: string;
  title: string;
  year: string;
  content: string;
}

export default function Accordion() {
  const [items, setItems] = useState<PocketbaseItem[]>([]);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://cms.snayo.net/api/collections/about/records");
        const data = await res.json();
        setItems(data?.items || []);
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };
    fetchData();
  }, []);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div
      className="w-full max-w-2xl mx-auto mt-10 rounded-2xl p-4"
      style={{
        backgroundColor: "var(--background)",
        color: "var(--foreground)",
      }}
    >
      {items.map((item, index) => (
        <div key={item.id} className="border-b border-black">
          {/* Header */}
          <button
            onClick={() => toggle(index)}
            className="w-full flex justify-between items-center py-4 text-left hover:cursor-pointer"
          >
            <div>
              <h2 className="text-lg font-semibold">{item.title}</h2>
              <p className="text-sm opacity-70">{item.year}</p>
            </div>
            {openIndex === index ? (
              <FaChevronUp className="text-black transition-transform" />
            ) : (
              <FaChevronDown className="text-black transition-transform" />
            )}
          </button>

          {/* Animated Content */}
          <AnimatePresence initial={false}>
            {openIndex === index && (
              <motion.div
                key="content"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="py-2 text-base">{item.content}</div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
