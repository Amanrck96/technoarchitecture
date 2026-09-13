"use client";

import React, { useState, useEffect } from "react";
import ImageUpload from "@/components/ui/ImageUpload";

export default function TestimonialsAdminPage() {
  const [testimonials, setTestimonials] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<any>(null);
  const [formData, setFormData] = useState({
    clientName: "",
    company: "",
    quote: "",
    photoUrl: "",
    order: 0,
  });

  const fetchTestimonials = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/admin/testimonials");
      if (res.ok) setTestimonials(await res.json());
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const handleOpenModal = (item: any = null) => {
    if (item) {
      setEditingItem(item);
      setFormData({ ...item });
    } else {
      setEditingItem(null);
      setFormData({ clientName: "", company: "", quote: "", photoUrl: "", order: 0 });
    }
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingItem(null);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const method = editingItem ? "PUT" : "POST";
      const url = editingItem ? `/api/admin/testimonials/${editingItem.id}` : "/api/admin/testimonials";
      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        fetchTestimonials();
        handleCloseModal();
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure?")) return;
    try {
      const res = await fetch(`/api/admin/testimonials/${id}`, { method: "DELETE" });
      if (res.ok) fetchTestimonials();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Testimonials</h1>
        <button onClick={() => handleOpenModal()} className="bg-gray-900 text-white px-4 py-2 rounded">
          Add Testimonial
        </button>
      </div>

      {loading ? (
        <div className="text-gray-600">Loading...</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t) => (
            <div key={t.id} className="border p-6 rounded-lg bg-white shadow-sm flex flex-col justify-between">
              <div>
                <p className="italic text-gray-700 mb-4">"{t.quote}"</p>
                <div className="flex items-center gap-3">
                  {t.photoUrl ? (
                    <img src={t.photoUrl} className="w-12 h-12 rounded-full object-cover" />
                  ) : (
                    <div className="w-12 h-12 rounded-full bg-gray-200"></div>
                  )}
                  <div>
                    <p className="font-bold text-gray-900">{t.clientName}</p>
                    <p className="text-sm text-gray-500">{t.company}</p>
                  </div>
                </div>
              </div>
              <div className="flex gap-3 mt-6 border-t pt-4">
                <button onClick={() => handleOpenModal(t)} className="text-gray-600 text-sm">Edit</button>
                <button onClick={() => handleDelete(t.id)} className="text-red-500 text-sm">Delete</button>
              </div>
            </div>
          ))}
        </div>
      )}

      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-6 w-full max-w-lg">
            <h2 className="text-2xl font-bold mb-4">{editingItem ? "Edit Testimonial" : "Add Testimonial"}</h2>
            <form onSubmit={handleSave} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Client Name</label>
                <input required type="text" name="clientName" value={formData.clientName} onChange={handleChange} className="w-full border p-2 rounded" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Company</label>
                <input type="text" name="company" value={formData.company} onChange={handleChange} className="w-full border p-2 rounded" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Client Photo</label>
                <ImageUpload onUpload={(url) => setFormData(p => ({...p, photoUrl: url}))} value={formData.photoUrl} />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Quote</label>
                <textarea rows={4} required name="quote" value={formData.quote} onChange={handleChange} className="w-full border p-2 rounded"></textarea>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Order</label>
                <input type="number" name="order" value={formData.order} onChange={handleChange} className="w-full border p-2 rounded" />
              </div>
              <div className="flex justify-end gap-3 mt-6">
                <button type="button" onClick={handleCloseModal} className="px-4 py-2 border rounded">Cancel</button>
                <button type="submit" className="px-4 py-2 bg-gray-900 text-white rounded">Save</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
