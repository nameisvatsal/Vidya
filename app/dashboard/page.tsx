"use client"

import { useState, useEffect } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Input } from "@/components/ui/input"
import { Search, Bell, BookOpen, Users, Briefcase, Play, Download, ChevronRight } from "lucide-react"
import Link from "next/link"

export default function Dashboard() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
  }, [])

  // Mock data
  const user = {
    name: "Rahul",
    avatar: "/placeholder.svg?height=40&width=40",
  }

  const ongoingCourses = [
    {
      id: 1,
      title: "Web Development Fundamentals",
      progress: 65,
      lastAccessed: "2 days ago",
      image: "/placeholder.svg?height=80&width=120",
    },
    {
      id: 2,
      title: "Digital Marketing Essentials",
      progress: 30,
      lastAccessed: "Yesterday",
      image: "/placeholder.svg?height=80&width=120",
    },
  ]

  const recommendedModules = [
    {
      id: 1,
      title: "UI/UX Design Basics",
      duration: "4 hours",
      level: "Beginner",
      image: "/placeholder.svg?height=120&width=200",
    },
    {
      id: 2,
      title: "Mobile App Development",
      duration: "6 hours",
      level: "Intermediate",
      image: "/placeholder.svg?height=120&width=200",
    },
    {
      id: 3,
      title: "Data Analytics Fundamentals",
      duration: "5 hours",
      level: "Beginner",
      image: "/placeholder.svg?height=120&width=200",
    },
  ]

  return (
    <div className="min-h-screen bg-vidya-background">
      {/* Top Navigation Bar */}
      <header className="sticky top-0 z-10 bg-white shadow-sm">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mr-2"
              >
                <rect width="32" height="32" rx="8" fill="#2A6BB4" />
                <path d="M8 16L16 8L24 16L16 24L8 16Z" fill="white" />
              </svg>
              <span className="text-xl font-bold text-vidya-primary">Vidya</span>
            </div>
            <div className="flex items-center space-x-3">
              <button className="relative p-1">
                <Bell className="h-6 w-6 text-gray-600" />
                <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500"></span>
              </button>
              <Avatar className="h-8 w-8 border-2 border-vidya-primary">
                <AvatarImage src={user.avatar} alt={user.name} />
                <AvatarFallback className="bg-vidya-accent text-vidya-primary">{user.name.charAt(0)}</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6">
        {/* Greeting Section */}
        <section className={`mb-6 transition-opacity duration-500 ${loaded ? "opacity-100" : "opacity-0"}`}>
          <h1 className="text-2xl font-bold text-vidya-primary">Welcome, {user.name}!</h1>
          <p className="text-gray-600">Ready to continue your learning journey?</p>
        </section>

        {/* Search Bar */}
        <section
          className={`mb-6 transition-all duration-500 ${loaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
        >
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
            <Input
              type="search"
              placeholder="Search for courses, skills, or topics..."
              className="pl-10 rounded-full border-vidya-accent bg-white py-6"
            />
          </div>
        </section>

        {/* Quick Access Buttons */}
        <section
          className={`mb-6 grid grid-cols-3 gap-3 transition-all duration-500 delay-100 ${loaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
        >
          <Button
            variant="outline"
            className="flex flex-col items-center justify-center gap-1 rounded-xl border-vidya-accent bg-white p-3 h-auto hover:bg-vidya-accent/20 hover:scale-105 transition-all"
          >
            <BookOpen className="h-6 w-6 text-vidya-primary" />
            <span className="text-xs font-medium text-gray-700">Resume</span>
          </Button>
          <Button
            variant="outline"
            className="flex flex-col items-center justify-center gap-1 rounded-xl border-vidya-accent bg-white p-3 h-auto hover:bg-vidya-accent/20 hover:scale-105 transition-all"
          >
            <Users className="h-6 w-6 text-vidya-primary" />
            <span className="text-xs font-medium text-gray-700">Community</span>
          </Button>
          <Button
            variant="outline"
            className="flex flex-col items-center justify-center gap-1 rounded-xl border-vidya-accent bg-white p-3 h-auto hover:bg-vidya-accent/20 hover:scale-105 transition-all"
          >
            <Briefcase className="h-6 w-6 text-vidya-primary" />
            <span className="text-xs font-medium text-gray-700">Jobs</span>
          </Button>
        </section>

        {/* Progress Tracker */}
        <section className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-vidya-primary">Your Progress</h2>
            <Link href="/courses" className="text-sm font-medium text-vidya-primary hover:underline flex items-center">
              View All
              <ChevronRight className="h-4 w-4 ml-1" />
            </Link>
          </div>
          <div className="space-y-4">
            {ongoingCourses.map((course, index) => (
              <Card
                key={course.id}
                className={`overflow-hidden border-vidya-accent hover:shadow-md transition-all duration-300 animate-fade-in`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-4">
                  <div className="flex gap-3">
                    <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-lg">
                      <img
                        src={course.image || "/placeholder.svg"}
                        alt={course.title}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-800">{course.title}</h3>
                      <p className="text-xs text-gray-500">Last accessed: {course.lastAccessed}</p>
                      <div className="mt-2">
                        <div className="flex items-center justify-between text-xs mb-1">
                          <span className="text-gray-600">Progress</span>
                          <span className="font-medium text-vidya-primary">{course.progress}%</span>
                        </div>
                        <Progress
                          value={course.progress}
                          className="h-2 bg-gray-200"
                          indicatorClassName="bg-vidya-primary"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mt-3 flex justify-end">
                    <Button size="sm" className="rounded-full bg-vidya-primary hover:bg-vidya-primary/90 text-white">
                      <Play className="h-4 w-4 mr-1" /> Continue
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Recommended Modules */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-vidya-primary">Recommended For You</h2>
            <Link href="/explore" className="text-sm font-medium text-vidya-primary hover:underline flex items-center">
              Explore All
              <ChevronRight className="h-4 w-4 ml-1" />
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            {recommendedModules.map((module, index) => (
              <Card
                key={module.id}
                className={`group overflow-hidden border-vidya-accent hover:shadow-md transition-all duration-300 animate-fade-in cursor-pointer`}
                style={{ animationDelay: `${(index + 3) * 150}ms` }}
              >
                <CardContent className="p-0">
                  <div className="relative">
                    <img
                      src={module.image || "/placeholder.svg"}
                      alt={module.title}
                      className="h-32 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                      <div className="flex items-center justify-between">
                        <span className="rounded-full bg-white px-2 py-0.5 text-xs font-medium text-vidya-primary">
                          {module.level}
                        </span>
                        <span className="text-xs font-medium text-white">{module.duration}</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-3">
                    <h3 className="font-medium text-gray-800 group-hover:text-vidya-primary transition-colors">
                      {module.title}
                    </h3>
                    <div className="mt-2 flex items-center justify-between">
                      <Button variant="ghost" size="sm" className="rounded-full p-0 h-8 w-8 hover:bg-vidya-accent/20">
                        <Download className="h-4 w-4 text-vidya-primary" />
                      </Button>
                      <Button size="sm" className="rounded-full bg-vidya-primary hover:bg-vidya-primary/90 text-white">
                        Start
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white shadow-[0_-2px_10px_rgba(0,0,0,0.05)] border-t border-gray-200">
        <div className="flex items-center justify-around">
          <Link href="/dashboard" className="flex flex-1 flex-col items-center justify-center py-2 text-vidya-primary">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z"
                stroke="#2A6BB4"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="#2A6BB4"
              />
            </svg>
            <span className="mt-1 text-xs">Home</span>
          </Link>
          <Link href="/learn" className="flex flex-1 flex-col items-center justify-center py-2 text-gray-500">
            <BookOpen className="h-6 w-6" />
            <span className="mt-1 text-xs">Learn</span>
          </Link>
          <Link href="/community" className="flex flex-1 flex-col items-center justify-center py-2 text-gray-500">
            <Users className="h-6 w-6" />
            <span className="mt-1 text-xs">Community</span>
          </Link>
          <Link href="/profile" className="flex flex-1 flex-col items-center justify-center py-2 text-gray-500">
            <Avatar className="h-6 w-6">
              <AvatarImage src={user.avatar} alt={user.name} />
              <AvatarFallback className="text-xs bg-vidya-accent text-vidya-primary">
                {user.name.charAt(0)}
              </AvatarFallback>
            </Avatar>
            <span className="mt-1 text-xs">Profile</span>
          </Link>
        </div>
      </nav>
    </div>
  )
}

