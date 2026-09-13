'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'

interface ImageUploadProps {
  value?: string
  onChange?: (url: string) => void
  onUpload?: (url: string) => void
  folder?: string
  label?: string
}

export default function ImageUpload({ value, onChange, onUpload, folder = 'general', label = 'Upload Image' }: ImageUploadProps) {
  const [uploading, setUploading] = useState(false)
  const [error, setError] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  const handleUrlChange = (url: string) => {
    if (onChange) onChange(url)
    if (onUpload) onUpload(url)
  }

  async function handleUpload(file: File) {
    setUploading(true)
    setError('')
    try {
      // Get signature
      const sigRes = await fetch(`/api/cloudinary/sign?folder=${folder}`)
      const { timestamp, signature, cloudName, apiKey } = await sigRes.json()

      // Upload to Cloudinary
      const formData = new FormData()
      formData.append('file', file)
      formData.append('timestamp', timestamp)
      formData.append('signature', signature)
      formData.append('api_key', apiKey)
      formData.append('folder', `techno-arch/${folder}`)

      const uploadRes = await fetch(
        `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
        { method: 'POST', body: formData }
      )
      const data = await uploadRes.json()
      if (data.secure_url) {
        handleUrlChange(data.secure_url)
      } else {
        setError('Upload failed')
      }
    } catch {
      setError('Upload failed')
    } finally {
      setUploading(false)
    }
  }

  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      {value && (
        <div className="relative w-full h-48 rounded-lg overflow-hidden bg-gray-100">
          <Image src={value} alt="Preview" fill className="object-cover" />
        </div>
      )}
      <div
        className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center cursor-pointer hover:border-gray-400 transition-colors"
        onClick={() => inputRef.current?.click()}
      >
        {uploading ? (
          <p className="text-sm text-gray-500">Uploading...</p>
        ) : (
          <p className="text-sm text-gray-500">Click to upload {value ? 'a new image' : 'an image'}</p>
        )}
      </div>
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={(e) => {
          const file = e.target.files?.[0]
          if (file) handleUpload(file)
        }}
      />
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  )
}
