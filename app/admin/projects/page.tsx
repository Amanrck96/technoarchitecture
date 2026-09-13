"use client";

import React, { useState, useEffect } from "react";
import ImageUpload from "@/components/ui/ImageUpload";

export default function ProjectsAdminPage() {
  const [projects, setProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<any>(null);
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    location: "",
    year: "",
    status: "ONGOING",
    coverImage: "",
    description: "",
    featured: false,
    order: 0,
  });

  const defaultProjects = [
    {
      id: 'placeholder-p1',
      title: 'The Residence at Elm Grove',
      slug: 'residence-elm-grove',
      location: 'Mumbai, Maharashtra',
      year: 2024,
      status: 'COMPLETED',
      coverImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80',
      description: 'A contemporary family residence that blends modernist geometry with warm natural materials.',
      featured: true,
      order: 1,
    },
    {
      id: 'placeholder-p2',
      title: 'Horizon Commercial Complex',
      slug: 'horizon-commercial-complex',
      location: 'Pune, Maharashtra',
      year: 2023,
      status: 'COMPLETED',
      coverImage: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&q=80',
      description: 'A mixed-use commercial development spanning 12,000 sqft with natural ventilation and daylighting.',
      featured: true,
      order: 2,
    },
    {
      id: 'placeholder-p3',
      title: 'The Cultural Arts Centre',
      slug: 'cultural-arts-centre',
      location: 'Bangalore, Karnataka',
      year: 2025,
      status: 'ONGOING',
      coverImage: 'https://images.unsplash.com/photo-1554366347-b8e9e1f77f6e?w=1200&q=80',
      description: 'A community-centred arts and cultural facility currently under development.',
      featured: true,
      order: 3,
    },
  ];

  const fetchProjects = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/admin/projects");
      if (res.ok) {
        const data = await res.json();
        if (Array.isArray(data) && data.length > 0) {
          setProjects(data);
        } else {
          setProjects(defaultProjects);
        }
      } else {
        setProjects(defaultProjects);
      }
    } catch (error) {
      console.error("Failed to fetch projects", error);
      setProjects(defaultProjects);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const handleOpenModal = (item: any = null) => {
    if (item) {
      setEditingItem(item);
      setFormData({ ...item });
    } else {
      setEditingItem(null);
      setFormData({
        title: "",
        slug: "",
        location: "",
        year: "",
        status: "ONGOING",
        coverImage: "",
        description: "",
        featured: false,
        order: 0,
      });
    }
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingItem(null);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      setFormData((prev) => ({ ...prev, [name]: (e.target as HTMLInputElement).checked }));
    } else if (name === "title" && !editingItem) {
      const slug = value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "");
      setFormData((prev) => ({ ...prev, [name]: value, slug }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleImageUpload = (url: string) => {
    setFormData((prev) => ({ ...prev, coverImage: url }));
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const method = editingItem ? "PUT" : "POST";
      const res = await fetch("/api/admin/projects", {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(editingItem ? { ...formData, id: editingItem.id } : formData),
      });

      if (res.ok) {
        fetchProjects();
        handleCloseModal();
      } else {
        const data = await res.json().catch(() => ({}));
        alert(data.error || "Failed to save project");
      }
    } catch (error) {
      console.error("Save error:", error);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this project?")) return;
    try {
      const res = await fetch(`/api/admin/projects?id=${id}`, { method: "DELETE" });
      if (res.ok) {
        fetchProjects();
      } else {
        const data = await res.json().catch(() => ({}));
        alert(data.error || "Failed to delete project");
      }
    } catch (error) {
      console.error("Delete error:", error);
    }
  };

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Projects Management</h1>
        <button
          onClick={() => handleOpenModal()}
          className="bg-gray-900 text-white px-4 py-2 rounded hover:bg-gray-800 transition"
        >
          Add New Project
        </button>
      </div>

      {loading ? (
        <div className="text-gray-600">Loading projects...</div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="py-4 font-semibold text-gray-600">Thumbnail</th>
                <th className="py-4 font-semibold text-gray-600">Title</th>
                <th className="py-4 font-semibold text-gray-600">Year / Location</th>
                <th className="py-4 font-semibold text-gray-600">Status</th>
                <th className="py-4 font-semibold text-gray-600">Featured</th>
                <th className="py-4 font-semibold text-gray-600 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {projects.length === 0 ? (
                <tr>
                  <td colSpan={6} className="py-4 text-gray-500 text-center">No projects found.</td>
                </tr>
              ) : (
                projects.map((project) => (
                  <tr key={project.id} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-3">
                      {project.coverImage ? (
                        <img src={project.coverImage} alt={project.title} className="w-16 h-16 object-cover rounded" />
                      ) : (
                        <div className="w-16 h-16 bg-gray-200 rounded"></div>
                      )}
                    </td>
                    <td className="py-3 font-medium">{project.title}</td>
                    <td className="py-3 text-gray-600">{project.year} • {project.location}</td>
                    <td className="py-3">
                      <span className={`px-2 py-1 text-xs rounded-full ${project.status === 'COMPLETED' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'}`}>
                        {project.status}
                      </span>
                    </td>
                    <td className="py-3">{project.featured ? "Yes" : "No"}</td>
                    <td className="py-3 text-right">
                      <button onClick={() => handleOpenModal(project)} className="text-gray-600 hover:text-gray-900 mr-4">Edit</button>
                      <button onClick={() => handleDelete(project.id)} className="text-red-500 hover:text-red-700">Delete</button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      )}

      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-xl">
            <h2 className="text-2xl font-bold mb-4">{editingItem ? "Edit Project" : "Add New Project"}</h2>
            <form onSubmit={handleSave} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                  <input required type="text" name="title" value={formData.title} onChange={handleChange} className="w-full border p-2 rounded" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Slug</label>
                  <input required type="text" name="slug" value={formData.slug} onChange={handleChange} className="w-full border p-2 rounded" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                  <input required type="text" name="location" value={formData.location} onChange={handleChange} className="w-full border p-2 rounded" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Year</label>
                  <input required type="text" name="year" value={formData.year} onChange={handleChange} className="w-full border p-2 rounded" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                  <select name="status" value={formData.status} onChange={handleChange} className="w-full border p-2 rounded">
                    <option value="ONGOING">Ongoing</option>
                    <option value="COMPLETED">Completed</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Order</label>
                  <input type="number" name="order" value={formData.order} onChange={handleChange} className="w-full border p-2 rounded" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Cover Image</label>
                <ImageUpload onUpload={handleImageUpload} value={formData.coverImage} />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                <textarea rows={4} name="description" value={formData.description} onChange={handleChange} className="w-full border p-2 rounded"></textarea>
              </div>

              <div className="flex items-center">
                <input type="checkbox" id="featured" name="featured" checked={formData.featured} onChange={handleChange} className="mr-2" />
                <label htmlFor="featured" className="text-sm text-gray-700">Featured Project</label>
              </div>

              <div className="flex justify-end gap-3 mt-6">
                <button type="button" onClick={handleCloseModal} className="px-4 py-2 border rounded text-gray-600 hover:bg-gray-50">Cancel</button>
                <button type="submit" className="px-4 py-2 bg-gray-900 text-white rounded hover:bg-gray-800">Save Project</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
