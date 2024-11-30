'use client'

import { useState, useRef } from 'react'
import { Upload } from 'lucide-react'

export default function AudioUploader() {
  const [fileName, setFileName] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    setFileName(file ? file.name : null)
  }

  const handleClick = () => {
    fileInputRef.current?.click()
  }

  return (
    <div 
      onClick={handleClick}
      className="border-2 border-dashed border-primary/50 rounded-lg p-8 text-center cursor-pointer hover:border-primary transition-colors duration-300"
    >
      <input
        ref={fileInputRef}
        type="file"
        name="audioFile"
        accept="audio/*"
        onChange={handleFileChange}
        className="hidden"
      />
      <Upload className="mx-auto h-12 w-12 text-primary" />
      <p className="mt-2 text-sm text-muted-foreground">
        {fileName ? fileName : 'Click to upload or drag and drop'}
      </p>
      <p className="text-xs text-muted-foreground">MP3, WAV, M4A up to 10MB</p>
    </div>
  )
}

