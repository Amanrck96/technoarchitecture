"use client";

import React, { useState, useEffect } from "react";
import ImageUpload from "@/components/ui/ImageUpload";

export default function BlogAdminPage() {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<any>(null);
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    author: "",
    excerpt: "",
    content: "",
    coverImage: "",
    publishedAt: "",
  });

  const fetchPosts = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/admin/blog");
      if (res.ok) setPosts(await res.json());
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleOpenModal = (item: any = null) => {
    if (item) {
      setEditingItem(item);
      setFormData({ ...item, publishedAt: item.publishedAt ? new Date(item.publishedAt).toISOString().slice(0,10) : "" });
    } else {
      setEditingItem(null);
      setFormData({ title: "", slug: "", author: "", excerpt: "", content: "", coverImage: "", publishedAt: new Date().toISOString().slice(0,10) });
    }
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingItem(null);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (name === "title" && !editingItem) {
      const slug = value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "");
      setFormData((prev) => ({ ...prev, [name]: value, slug }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const method = editingItem ? "PUT" : "POST";
      const url = editingItem ? `/api/admin/blog/${editingItem.id}` : "/api/admin/blog";
      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        fetchPosts();
        handleCloseModal();
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure?")) return;
    try {
      const res = await fetch(`/api/admin/blog/${id}`, { method: "DELETE" });
      if (res.ok) fetchPosts();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Blog Management</h1>
        <button onClick={() => handleOpenModal()} className="bg-gray-900 text-white px-4 py-2 rounded">
          Add New Post
        </button>
      </div>

      {loading ? (
        <div className="text-gray-600">Loading posts...</div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b">
                <th className="py-4 text-gray-600">Cover</th>
                <th className="py-4 text-gray-600">Title</th>
                <th className="py-4 text-gray-600">Author</th>
                <th className="py-4 text-gray-600">Published</th>
                <th className="py-4 text-gray-600 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((post) => (
                <tr key={post.id} className="border-b hover:bg-gray-50">
                  <td className="py-3">
                    {post.coverImage ? <img src={post.coverImage} className="w-16 h-10 object-cover" /> : <div className="w-16 h-10 bg-gray-200"></div>}
                  </td>
                  <td className="py-3 font-medium">{post.title}</td>
                  <td className="py-3 text-gray-600">{post.author}</td>
                  <td className="py-3 text-gray-600">{new Date(post.publishedAt).toLocaleDateString()}</td>
                  <td className="py-3 text-right">
                    <button onClick={() => handleOpenModal(post)} className="text-gray-600 hover:text-gray-900 mr-4">Edit</button>
                    <button onClick={() => handleDelete(post.id)} className="text-red-500 hover:text-red-700">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-6 w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            <h2 className="text-2xl font-bold mb-4">{editingItem ? "Edit Post" : "Add New Post"}</h2>
            <form onSubmit={handleSave} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Title</label>
                  <input required type="text" name="title" value={formData.title} onChange={handleChange} className="w-full border p-2 rounded" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Slug</label>
                  <input required type="text" name="slug" value={formData.slug} onChange={handleChange} className="w-full border p-2 rounded" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Author</label>
                  <input required type="text" name="author" value={formData.author} onChange={handleChange} className="w-full border p-2 rounded" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Published Date</label>
                  <input required type="date" name="publishedAt" value={formData.publishedAt} onChange={handleChange} className="w-full border p-2 rounded" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Cover Image</label>
                <ImageUpload onUpload={(url) => setFormData(p => ({...p, coverImage: url}))} value={formData.coverImage} />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Excerpt</label>
                <textarea rows={2} required name="excerpt" value={formData.excerpt} onChange={handleChange} className="w-full border p-2 rounded"></textarea>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Content (Markdown)</label>
                <textarea rows={10} required name="content" value={formData.content} onChange={handleChange} className="w-full border p-2 rounded font-mono text-sm"></textarea>
              </div>

              <div className="flex justify-end gap-3 mt-6">
                <button type="button" onClick={handleCloseModal} className="px-4 py-2 border rounded">Cancel</button>
                <button type="submit" className="px-4 py-2 bg-gray-900 text-white rounded">Save Post</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
