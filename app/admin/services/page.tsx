"use client";

import React, { useState, useEffect } from "react";
import ImageUpload from "@/components/ui/ImageUpload";

export default function ServicesAdminPage() {
  const [services, setServices] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<any>(null);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    iconUrl: "",
    order: 0,
  });

  const fetchServices = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/admin/services");
      if (res.ok) setServices(await res.json());
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchServices();
  }, []);

  const handleOpenModal = (item: any = null) => {
    if (item) {
      setEditingItem(item);
      setFormData({ ...item });
    } else {
      setEditingItem(null);
      setFormData({ title: "", description: "", iconUrl: "", order: 0 });
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
      const url = editingItem ? `/api/admin/services/${editingItem.id}` : "/api/admin/services";
      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        fetchServices();
        handleCloseModal();
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure?")) return;
    try {
      const res = await fetch(`/api/admin/services/${id}`, { method: "DELETE" });
      if (res.ok) fetchServices();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Services Management</h1>
        <button onClick={() => handleOpenModal()} className="bg-gray-900 text-white px-4 py-2 rounded">
          Add Service
        </button>
      </div>

      {loading ? (
        <div className="text-gray-600">Loading services...</div>
      ) : (
        <div className="space-y-4">
          {services.map((service) => (
            <div key={service.id} className="border p-4 rounded-lg flex items-center justify-between bg-white shadow-sm">
              <div className="flex items-center gap-4">
                {service.iconUrl ? <img src={service.iconUrl} className="w-12 h-12 object-contain" /> : <div className="w-12 h-12 bg-gray-100 rounded"></div>}
                <div>
                  <h3 className="font-semibold text-lg">{service.title}</h3>
                  <p className="text-sm text-gray-600 line-clamp-1">{service.description}</p>
                </div>
              </div>
              <div className="flex gap-3">
                <button onClick={() => handleOpenModal(service)} className="text-gray-600">Edit</button>
                <button onClick={() => handleDelete(service.id)} className="text-red-500">Delete</button>
              </div>
            </div>
          ))}
        </div>
      )}

      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-6 w-full max-w-lg">
            <h2 className="text-2xl font-bold mb-4">{editingItem ? "Edit Service" : "Add Service"}</h2>
            <form onSubmit={handleSave} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Title</label>
                <input required type="text" name="title" value={formData.title} onChange={handleChange} className="w-full border p-2 rounded" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Icon URL</label>
                <ImageUpload onUpload={(url) => setFormData(p => ({...p, iconUrl: url}))} value={formData.iconUrl} />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Description</label>
                <textarea rows={4} required name="description" value={formData.description} onChange={handleChange} className="w-full border p-2 rounded"></textarea>
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
