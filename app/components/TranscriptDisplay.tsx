import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"

interface TranscriptDisplayProps {
  transcript: string
}

export default function TranscriptDisplay({ transcript }: TranscriptDisplayProps) {
  return (
    <Card className="bg-card">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-primary">Transcript</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[400px] rounded-md border border-primary/20 p-4">
          <p className="text-lg leading-relaxed whitespace-pre-wrap font-sans text-foreground">
            {transcript}
          </p>
        </ScrollArea>
      </CardContent>
    </Card>
  )
}

