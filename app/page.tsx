'use client'

import { useState } from 'react'
import { transcribeAudio } from './actions'
import TranscriptDisplay from './components/TranscriptDisplay'
import AudioUploader from './components/AudioUploader'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  const [transcript, setTranscript] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (formData: FormData) => {
    setIsLoading(true)
    setError(null)
    try {
      const result = await transcribeAudio(formData)
      setTranscript(result)
    } catch (err) {
      setError('An error occurred while transcribing the audio.')
      console.error(err)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center text-primary">
        Audio Transcription Pro
      </h1>
      <Card className="mb-8 bg-card">
        <CardHeader>
          <CardTitle className="text-primary">Upload Your Audio</CardTitle>
          <CardDescription>Select an audio file to transcribe</CardDescription>
        </CardHeader>
        <CardContent>
          <form action={handleSubmit}>
            <AudioUploader />
            <Button 
              type="submit" 
              disabled={isLoading}
              className="w-full mt-4 bg-primary text-primary-foreground hover:bg-primary/90"
            >
              {isLoading ? 'Transcribing...' : 'Transcribe Audio'}
            </Button>
          </form>
        </CardContent>
      </Card>
      {error && (
        <div className="text-destructive mb-4 text-center p-4 bg-destructive/10 rounded-lg">
          {error}
        </div>
      )}
      {transcript && <TranscriptDisplay transcript={transcript} />}
    </main>
  )
}

