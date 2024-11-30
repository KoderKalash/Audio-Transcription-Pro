'use server'

import { GoogleGenerativeAI } from '@google/generative-ai'

export async function transcribeAudio(formData: FormData): Promise<string> {
  const file = formData.get('audioFile') as File
  if (!file) {
    throw new Error('No file uploaded')
  }

  const buffer = Buffer.from(await file.arrayBuffer())

  // Initialize the Gemini API client
  const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY as string)

  // Use Gemini 1.5 Pro model
  const model = genAI.getGenerativeModel({ model: 'gemini-1.5-pro' })

  try {
    const result = await model.generateContent([
      'Transcribe the following audio:',
      {
        inlineData: {
          mimeType: file.type,
          data: buffer.toString('base64')
        }
      }
    ])

    const response = await result.response
    const transcript = response.text()

    return transcript
  } catch (error) {
    console.error('Error transcribing audio:', error)
    throw new Error('Failed to transcribe audio')
  }
}

