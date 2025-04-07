import { SiteHeader } from "@/components/site-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Download, MessageSquare, Bot, Mic } from "lucide-react"
import { LanguageSwitcher } from "@/components/language-switcher"

export default function CoursePage({ params }: { params: { id: string } }) {
  // Mock course data
  const course = {
    id: params.id,
    title: "Web Development Fundamentals",
    category: "Technology",
    description: "Learn the basics of web development with HTML, CSS, and JavaScript.",
    videoUrl: "https://example.com/video",
    transcript: `In this lesson, we'll cover the basics of CSS Flexbox layout.
    
Flexbox is a one-dimensional layout method for arranging items in rows or columns. Items flex to fill additional space and shrink to fit into smaller spaces.

To create a flex container, you set the display property to flex:
.container {
  display: flex;
}

This allows you to use various flex properties to control the layout of child elements.`,
    questions: [
      {
        id: 1,
        question: "What is the correct CSS property to create a flex container?",
        options: ["display: flexbox;", "display: flex;", "flex: display;", "flexbox: true;"],
        correctAnswer: 1,
      },
      {
        id: 2,
        question: "Which property aligns flex items along the main axis?",
        options: ["align-items", "justify-content", "flex-align", "main-align"],
        correctAnswer: 1,
      },
    ],
  }

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1 py-6">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col gap-8">
            {/* Course Header */}
            <section>
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <h1 className="text-3xl font-bold tracking-tight">{course.title}</h1>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <span>{course.category}</span>
                    <span>•</span>
                    <span>Lesson 4: CSS Flexbox Layout</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <LanguageSwitcher />
                  <Button variant="outline" size="icon">
                    <Download className="h-4 w-4" />
                    <span className="sr-only">Download for offline</span>
                  </Button>
                </div>
              </div>
            </section>

            {/* Video Player */}
            <section>
              <div className="aspect-video w-full overflow-hidden rounded-lg bg-muted">
                <div className="flex h-full items-center justify-center">
                  <img
                    src="/placeholder.svg?height=400&width=800"
                    alt="Video thumbnail"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </section>

            {/* Course Content Tabs */}
            <section>
              <Tabs defaultValue="transcript" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="transcript" className="flex items-center gap-2">
                    <Mic className="h-4 w-4" />
                    <span className="hidden sm:inline">Transcript</span>
                  </TabsTrigger>
                  <TabsTrigger value="practice" className="flex items-center gap-2">
                    <MessageSquare className="h-4 w-4" />
                    <span className="hidden sm:inline">Practice</span>
                  </TabsTrigger>
                  <TabsTrigger value="ai-assistant" className="flex items-center gap-2">
                    <Bot className="h-4 w-4" />
                    <span className="hidden sm:inline">AI Assistant</span>
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="transcript" className="mt-4">
                  <Card>
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-semibold">Lesson Transcript</h3>
                        <div className="flex items-center gap-2">
                          <Button variant="outline" size="sm">
                            Copy
                          </Button>
                          <Button variant="outline" size="sm">
                            Download
                          </Button>
                        </div>
                      </div>
                      <div className="prose max-w-none dark:prose-invert">
                        <p>{course.transcript}</p>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="practice" className="mt-4">
                  <Card>
                    <CardContent className="p-4">
                      <h3 className="text-lg font-semibold mb-4">Practice Questions</h3>
                      <div className="space-y-6">
                        {course.questions.map((q) => (
                          <div key={q.id} className="space-y-3">
                            <h4 className="font-medium">{q.question}</h4>
                            <div className="grid gap-2">
                              {q.options.map((option, index) => (
                                <div
                                  key={index}
                                  className="flex items-center space-x-2 rounded-md border p-3 hover:bg-muted"
                                >
                                  <input
                                    type="radio"
                                    id={`q${q.id}-option${index}`}
                                    name={`question-${q.id}`}
                                    className="h-4 w-4"
                                  />
                                  <label htmlFor={`q${q.id}-option${index}`} className="flex-1 cursor-pointer">
                                    {option}
                                  </label>
                                </div>
                              ))}
                            </div>
                            <div className="flex justify-end">
                              <Button>Submit Answer</Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="ai-assistant" className="mt-4">
                  <Card>
                    <CardContent className="p-4">
                      <h3 className="text-lg font-semibold mb-4">AI Learning Assistant</h3>
                      <div className="rounded-lg border bg-muted p-4">
                        <div className="mb-4 space-y-4">
                          <div className="flex gap-3">
                            <div className="flex h-8 w-8 shrink-0 select-none items-center justify-center rounded-md bg-primary text-white">
                              <Bot className="h-4 w-4" />
                            </div>
                            <div className="flex-1 space-y-2">
                              <p className="text-sm">
                                Hi there! I'm your AI learning assistant. How can I help you with this lesson on CSS
                                Flexbox?
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <input
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            placeholder="Ask a question about this lesson..."
                          />
                          <Button size="icon" className="shrink-0">
                            <MessageSquare className="h-4 w-4" />
                            <span className="sr-only">Send message</span>
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </section>
          </div>
        </div>
      </main>
    </div>
  )
}

