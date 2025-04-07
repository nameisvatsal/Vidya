"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Home,
  Users,
  User,
  Download,
  Volume2,
  VolumeX,
  ChevronLeft,
  ChevronRight,
  MessageSquare,
  Bot,
  FileText,
} from "lucide-react"
import Link from "next/link"

export default function LearningModule({ params }: { params: { moduleId: string } }) {
  const [loaded, setLoaded] = useState(false)
  const [audioEnabled, setAudioEnabled] = useState(false)
  const [currentLesson, setCurrentLesson] = useState(1)

  useEffect(() => {
    setLoaded(true)
  }, [])

  // Mock module data
  const module = {
    id: params.moduleId,
    title: "Web Development Fundamentals",
    description: "Learn the basics of web development with HTML, CSS, and JavaScript.",
    totalLessons: 8,
    completedLessons: 4,
    currentLesson: {
      id: 1,
      title: "Introduction to CSS Flexbox",
      videoUrl: "/placeholder.svg?height=200&width=400",
      resources: [
        { id: 1, title: "Flexbox Cheatsheet", type: "PDF" },
        { id: 2, title: "Practice Examples", type: "ZIP" },
      ],
      exercises: [
        {
          id: 1,
          title: "Create a Flexbox Layout",
          description: "Build a simple navigation bar using flexbox properties.",
          feedback: "Good job! Your navigation bar looks great. Try adding more spacing between items.",
        },
        {
          id: 2,
          title: "Responsive Card Layout",
          description: "Create a responsive grid of cards that adapts to different screen sizes.",
          feedback: null,
        },
      ],
    },
    lessons: [
      { id: 1, title: "Introduction to CSS Flexbox", completed: true },
      { id: 2, title: "Flexbox Container Properties", completed: true },
      { id: 3, title: "Flexbox Item Properties", completed: true },
      { id: 4, title: "Building a Navigation Bar", completed: true },
      { id: 5, title: "Creating Card Layouts", completed: false },
      { id: 6, title: "Responsive Flexbox Design", completed: false },
      { id: 7, title: "Flexbox vs Grid", completed: false },
      { id: 8, title: "Advanced Flexbox Techniques", completed: false },
    ],
  }

  const handleNextLesson = () => {
    if (currentLesson < module.totalLessons) {
      setCurrentLesson(currentLesson + 1)
    }
  }

  const handlePreviousLesson = () => {
    if (currentLesson > 1) {
      setCurrentLesson(currentLesson - 1)
    }
  }

  return (
    <div className="min-h-screen bg-vidya-background pb-16">
      {/* Top Navigation */}
      <header className="sticky top-0 z-10 bg-white shadow-sm">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <Link href="/dashboard" className="flex items-center text-vidya-primary">
              <ChevronLeft className="h-5 w-5 mr-1" />
              <span className="font-medium">Back</span>
            </Link>
            <h1 className="text-lg font-bold text-vidya-primary truncate max-w-[200px]">{module.title}</h1>
            <Button variant="ghost" size="icon" className="rounded-full" onClick={() => setAudioEnabled(!audioEnabled)}>
              {audioEnabled ? (
                <Volume2 className="h-5 w-5 text-vidya-primary" />
              ) : (
                <VolumeX className="h-5 w-5 text-gray-400" />
              )}
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6">
        {/* Video Player */}
        <section
          className={`mb-6 rounded-xl overflow-hidden shadow-md transition-all duration-500 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          <div className="relative aspect-video bg-black">
            <img
              src={module.currentLesson.videoUrl || "/placeholder.svg"}
              alt="Video thumbnail"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <Button size="icon" className="h-16 w-16 rounded-full bg-vidya-primary/90 hover:bg-vidya-primary">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 3L19 12L5 21V3Z" fill="white" />
                </svg>
              </Button>
            </div>
          </div>
        </section>

        {/* Module Progress */}
        <section
          className={`mb-6 transition-all duration-500 delay-100 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          <div className="flex items-center justify-between mb-2">
            <h2 className="font-bold text-vidya-primary">
              Lesson {currentLesson} of {module.totalLessons}
            </h2>
            <span className="text-sm text-gray-600">
              {module.completedLessons}/{module.totalLessons} completed
            </span>
          </div>
          <Progress
            value={(module.completedLessons / module.totalLessons) * 100}
            className="h-2 bg-gray-200"
            indicatorClassName="bg-vidya-primary"
          />
        </section>

        {/* Lesson Navigation */}
        <section
          className={`mb-6 transition-all duration-500 delay-200 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          <div className="flex items-center justify-between">
            <Button
              variant="outline"
              className="border-vidya-accent text-vidya-primary hover:bg-vidya-accent/20"
              onClick={handlePreviousLesson}
              disabled={currentLesson === 1}
            >
              <ChevronLeft className="h-4 w-4 mr-1" /> Previous
            </Button>
            <Button
              className="bg-vidya-primary hover:bg-vidya-primary/90 text-white"
              onClick={handleNextLesson}
              disabled={currentLesson === module.totalLessons}
            >
              Next <ChevronRight className="h-4 w-4 ml-1" />
            </Button>
          </div>
        </section>

        {/* Lesson Content Tabs */}
        <section
          className={`transition-all duration-500 delay-300 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          <Tabs defaultValue="content" className="w-full">
            <TabsList className="grid w-full grid-cols-3 bg-vidya-accent/30">
              <TabsTrigger
                value="content"
                className="data-[state=active]:bg-white data-[state=active]:text-vidya-primary"
              >
                Content
              </TabsTrigger>
              <TabsTrigger
                value="resources"
                className="data-[state=active]:bg-white data-[state=active]:text-vidya-primary"
              >
                Resources
              </TabsTrigger>
              <TabsTrigger
                value="exercises"
                className="data-[state=active]:bg-white data-[state=active]:text-vidya-primary"
              >
                Exercises
              </TabsTrigger>
            </TabsList>

            <TabsContent value="content" className="mt-4 animate-fade-in">
              <Card className="border-vidya-accent">
                <CardContent className="p-4 space-y-4">
                  <h3 className="text-lg font-bold text-vidya-primary">{module.currentLesson.title}</h3>
                  <p className="text-gray-700">
                    Flexbox is a one-dimensional layout method for arranging items in rows or columns. Items flex to
                    fill additional space and shrink to fit into smaller spaces.
                  </p>
                  <p className="text-gray-700">In this lesson, you'll learn how to:</p>
                  <ul className="list-disc pl-5 text-gray-700 space-y-1">
                    <li>Create a flex container</li>
                    <li>Align items along the main and cross axis</li>
                    <li>Control spacing between flex items</li>
                    <li>Build responsive layouts with flexbox</li>
                  </ul>
                  <div className="pt-2">
                    <Button
                      variant="outline"
                      className="w-full border-vidya-accent text-vidya-primary hover:bg-vidya-accent/20"
                    >
                      <Download className="h-4 w-4 mr-2" /> Download Lesson Notes
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="resources" className="mt-4 animate-fade-in">
              <Card className="border-vidya-accent">
                <CardContent className="p-4">
                  <h3 className="text-lg font-bold text-vidya-primary mb-4">Downloadable Resources</h3>
                  <div className="space-y-3">
                    {module.currentLesson.resources.map((resource) => (
                      <div
                        key={resource.id}
                        className="flex items-center justify-between rounded-lg border border-vidya-accent p-3 hover:bg-vidya-accent/10 transition-colors"
                      >
                        <div className="flex items-center">
                          <FileText className="h-5 w-5 text-vidya-primary mr-2" />
                          <div>
                            <h4 className="font-medium text-gray-800">{resource.title}</h4>
                            <p className="text-xs text-gray-500">{resource.type} Document</p>
                          </div>
                        </div>
                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0 rounded-full hover:bg-vidya-accent/20">
                          <Download className="h-4 w-4 text-vidya-primary" />
                        </Button>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 rounded-lg border border-dashed border-vidya-accent p-4 text-center">
                    <p className="text-sm text-gray-600">All resources are available offline after downloading</p>
                    <Button className="mt-2 bg-vidya-primary hover:bg-vidya-primary/90 text-white">
                      <Download className="h-4 w-4 mr-2" /> Download All Resources
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="exercises" className="mt-4 animate-fade-in">
              <Card className="border-vidya-accent">
                <CardContent className="p-4">
                  <h3 className="text-lg font-bold text-vidya-primary mb-4">Hands-on Exercises</h3>
                  <div className="space-y-4">
                    {module.currentLesson.exercises.map((exercise) => (
                      <div key={exercise.id} className="rounded-lg border border-vidya-accent overflow-hidden">
                        <div className="bg-vidya-accent/20 p-3">
                          <h4 className="font-medium text-vidya-primary">
                            Exercise {exercise.id}: {exercise.title}
                          </h4>
                        </div>
                        <div className="p-3">
                          <p className="text-sm text-gray-700 mb-3">{exercise.description}</p>
                          {exercise.feedback ? (
                            <div className="rounded-lg bg-green-50 border border-green-200 p-3 mb-3">
                              <div className="flex items-start">
                                <Bot className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                                <div>
                                  <h5 className="text-sm font-medium text-green-800">AI Feedback</h5>
                                  <p className="text-sm text-green-700">{exercise.feedback}</p>
                                </div>
                              </div>
                            </div>
                          ) : (
                            <div className="mb-3">
                              <Button className="w-full bg-vidya-primary hover:bg-vidya-primary/90 text-white">
                                Submit Your Solution
                              </Button>
                            </div>
                          )}
                          <div className="flex items-center justify-between">
                            <Button
                              variant="outline"
                              size="sm"
                              className="text-xs border-vidya-accent text-vidya-primary hover:bg-vidya-accent/20"
                            >
                              View Hints
                            </Button>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="text-xs text-vidya-primary hover:bg-vidya-accent/20"
                            >
                              <MessageSquare className="h-3 w-3 mr-1" /> Ask for Help
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </section>
      </main>

      {/* Side Progress Bar (visible on larger screens) */}
      <div className="fixed top-16 bottom-0 right-0 w-16 hidden lg:flex flex-col items-center py-4 bg-white border-l border-gray-200">
        <div className="flex flex-col items-center space-y-2 mb-4">
          <span className="text-xs font-medium text-vidya-primary">
            {module.completedLessons}/{module.totalLessons}
          </span>
          <div className="h-40 w-1 bg-gray-200 rounded-full relative">
            <div
              className="absolute bottom-0 w-1 bg-vidya-primary rounded-full"
              style={{ height: `${(module.completedLessons / module.totalLessons) * 100}%` }}
            ></div>
          </div>
        </div>
        <div className="flex-1 overflow-y-auto w-full px-2">
          {module.lessons.map((lesson, index) => (
            <button
              key={lesson.id}
              className={`w-8 h-8 mb-2 rounded-full flex items-center justify-center text-xs ${
                currentLesson === index + 1
                  ? "bg-vidya-primary text-white"
                  : lesson.completed
                    ? "bg-vidya-accent text-vidya-primary"
                    : "bg-gray-200 text-gray-500"
              }`}
              onClick={() => setCurrentLesson(index + 1)}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white shadow-[0_-2px_10px_rgba(0,0,0,0.05)] border-t border-gray-200">
        <div className="flex items-center justify-around">
          <Link href="/dashboard" className="flex flex-1 flex-col items-center justify-center py-2 text-gray-500">
            <Home className="h-6 w-6" />
            <span className="mt-1 text-xs">Home</span>
          </Link>
          <Link href="/learn" className="flex flex-1 flex-col items-center justify-center py-2 text-vidya-primary">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M2 3H8C9.06087 3 10.0783 3.42143 10.8284 4.17157C11.5786 4.92172 12 5.93913 12 7V21C12 20.2044 11.6839 19.4413 11.1213 18.8787C10.5587 18.3161 9.79565 18 9 18H2V3Z"
                stroke="#2A6BB4"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="#2A6BB4"
              />
              <path
                d="M22 3H16C14.9391 3 13.9217 3.42143 13.1716 4.17157C12.4214 4.92172 12 5.93913 12 7V21C12 20.2044 12.3161 19.4413 12.8787 18.8787C13.4413 18.3161 14.2044 18 15 18H22V3Z"
                stroke="#2A6BB4"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="#2A6BB4"
              />
            </svg>
            <span className="mt-1 text-xs">Learn</span>
          </Link>
          <Link href="/community" className="flex flex-1 flex-col items-center justify-center py-2 text-gray-500">
            <Users className="h-6 w-6" />
            <span className="mt-1 text-xs">Community</span>
          </Link>
          <Link href="/profile" className="flex flex-1 flex-col items-center justify-center py-2 text-gray-500">
            <User className="h-6 w-6" />
            <span className="mt-1 text-xs">Profile</span>
          </Link>
        </div>
      </nav>
    </div>
  )
}

