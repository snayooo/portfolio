"use client";

import { useState, useEffect } from "react";
import PocketBase, { RecordModel } from "pocketbase";

const pb = new PocketBase("https://cms.snayo.net");

export default function ProjectsList() {
  const [projects, setProjects] = useState<RecordModel[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProjects() {
      try {
        if (!process.env.NEXT_PUBLIC_CMS_USER || !process.env.NEXT_PUBLIC_CMS_PASS) {
          console.error("CMS credentials not set");
          return;
        }

        await pb.admins.authWithPassword(
          process.env.NEXT_PUBLIC_CMS_USER,
          process.env.NEXT_PUBLIC_CMS_PASS
        );

        const data = await pb.collection("projects").getFullList<RecordModel>({
          sort: "-created",
        });
        setProjects(data);
      } catch (err) {
        console.error("Failed to fetch projects:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchProjects();
  }, []);

  const shimmerStyle: React.CSSProperties = {
    background: "linear-gradient(90deg, rgba(255,255,255,0.2) 25%, rgba(255,255,255,0.4) 50%, rgba(255,255,255,0.2) 75%)",
    backgroundSize: "200% 100%",
    animation: "shimmer 1.6s infinite",
  };

  return (
    <>
      <style>
        {`
          @keyframes shimmer {
            0% { background-position: -200% 0; }
            100% { background-position: 200% 0; }
          }
        `}
      </style>

      <div className="max-w-[1024px] mx-auto px-4 mt-6">
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="h-[360px] rounded-xl border border-black/10 bg-white/30"
                style={shimmerStyle}
              />
            ))}
          </div>
        ) : projects.length === 0 ? (
          <p className="text-center text-gray-500 text-base mt-6 w-full">
            No projects available
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
            {projects.map((project) => (
              <div
                key={project.id}
                className="w-full max-w-[320px] bg-white/30 rounded-xl border border-black p-4 flex flex-col justify-between shadow-lg hover:shadow-xl transition-shadow duration-300 mx-auto"
              >
                {/* Title */}
                <h3 className="text-xl font-bold text-center mb-3">{project.title}</h3>

                {/* Image */}
                {project.image && (
                  <div className="flex justify-center mb-3">
                    <img
                      src={`https://cms.snayo.net/api/files/${project.collectionId}/${project.id}/${project.image}`}
                      alt={project.title}
                      className="max-h-40 w-auto object-contain rounded-md"
                    />
                  </div>
                )}

                {/* Description */}
                <p className="text-left text-sm opacity-80 mb-4 flex-grow">{project.description}</p>

                {/* Technologies Used */}
                {project.technologies_used && (
                  <div className="flex flex-wrap gap-2 mb-2">
                    {project.technologies_used
                      .filter((tech: string) => tech.trim() !== "")
                      .map((tech: string) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs rounded-full bg-white/50 text-black/80"
                        >
                          {tech.trim()}
                        </span>
                      ))}
                  </div>
                )}

                {/* Link */}
                {project.URL && project.URL !== "N/A" ? (
                  <a
                    href={project.URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm underline opacity-70 hover:opacity-100 transition"
                  >
                    Visit →
                  </a>
                ) : null}
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
