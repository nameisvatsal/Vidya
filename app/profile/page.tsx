import { SiteHeader } from "@/components/site-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Download, Edit, FileText, Award, ChevronRight } from "lucide-react"

export default function ProfilePage() {
  // Mock profile data
  const profile = {
    name: "Priya Sharma",
    location: "Jaipur, Rajasthan",
    bio: "Aspiring web developer passionate about creating accessible websites.",
    image: "/placeholder.svg?height=100&width=100",
    skills: [
      { name: "HTML", level: 80 },
      { name: "CSS", level: 70 },
      { name: "JavaScript", level: 50 },
      { name: "Communication", level: 85 },
      { name: "Problem Solving", level: 75 },
    ],
    badges: [
      { id: 1, name: "Web Basics", issuer: "TechCorp", image: "/placeholder.svg?height=60&width=60" },
      { id: 2, name: "CSS Master", issuer: "DesignHub", image: "/placeholder.svg?height=60&width=60" },
      { id: 3, name: "Team Player", issuer: "Vidya Hub", image: "/placeholder.svg?height=60&width=60" },
    ],
    completedCourses: [
      { id: 1, title: "HTML Fundamentals", date: "March 2025" },
      { id: 2, title: "CSS Basics", date: "April 2025" },
    ],
    projects: [
      { id: 1, title: "Personal Portfolio", description: "A simple portfolio website built with HTML and CSS" },
      { id: 2, title: "Local Business Website", description: "Website for a local restaurant in my community" },
    ],
  }

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1 py-6">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col gap-8">
            {/* Profile Header */}
            <section>
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                    <div className="relative h-24 w-24 overflow-hidden rounded-full">
                      <img
                        src={profile.image || "/placeholder.svg"}
                        alt={profile.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h1 className="text-2xl font-bold">{profile.name}</h1>
                      <p className="text-muted-foreground">{profile.location}</p>
                      <p className="mt-2 max-w-md">{profile.bio}</p>
                    </div>
                    <div className="flex flex-col gap-2 sm:self-start">
                      <Button className="w-full sm:w-auto">
                        <Edit className="mr-2 h-4 w-4" />
                        Edit Profile
                      </Button>
                      <Button variant="outline" className="w-full sm:w-auto">
                        <FileText className="mr-2 h-4 w-4" />
                        View Resume
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Profile Content */}
            <section>
              <Tabs defaultValue="skills" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="skills">Skills</TabsTrigger>
                  <TabsTrigger value="credentials">Credentials</TabsTrigger>
                  <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
                </TabsList>
                <TabsContent value="skills" className="mt-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Skill Radar</CardTitle>
                      <CardDescription>Your current skill levels across different areas</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {profile.skills.map((skill) => (
                          <div key={skill.name} className="space-y-1">
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-medium">{skill.name}</span>
                              <span className="text-sm text-muted-foreground">{skill.level}%</span>
                            </div>
                            <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
                              <div className="h-full bg-primary" style={{ width: `${skill.level}%` }} />
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="credentials" className="mt-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Micro-Credentials</CardTitle>
                      <CardDescription>Badges and certificates earned from courses and employers</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
                        {profile.badges.map((badge) => (
                          <div key={badge.id} className="flex flex-col items-center rounded-lg border p-4 text-center">
                            <div className="mb-2 h-16 w-16">
                              <img
                                src={badge.image || "/placeholder.svg"}
                                alt={badge.name}
                                className="h-full w-full object-contain"
                              />
                            </div>
                            <h3 className="text-sm font-medium">{badge.name}</h3>
                            <p className="text-xs text-muted-foreground">{badge.issuer}</p>
                          </div>
                        ))}
                        <div className="flex flex-col items-center justify-center rounded-lg border border-dashed p-4 text-center">
                          <Award className="mb-2 h-8 w-8 text-muted-foreground" />
                          <p className="text-sm text-muted-foreground">Complete more courses to earn badges</p>
                        </div>
                      </div>
                      <div className="mt-6">
                        <h3 className="mb-4 text-lg font-semibold">Completed Courses</h3>
                        <div className="space-y-2">
                          {profile.completedCourses.map((course) => (
                            <div key={course.id} className="flex items-center justify-between rounded-lg border p-3">
                              <div>
                                <h4 className="font-medium">{course.title}</h4>
                                <p className="text-sm text-muted-foreground">Completed: {course.date}</p>
                              </div>
                              <Button variant="ghost" size="icon">
                                <Download className="h-4 w-4" />
                                <span className="sr-only">Download certificate</span>
                              </Button>
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="portfolio" className="mt-4">
                  <Card>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div>
                          <CardTitle>Project Portfolio</CardTitle>
                          <CardDescription>Showcase your work and projects</CardDescription>
                        </div>
                        <Button>Add Project</Button>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {profile.projects.map((project) => (
                          <div key={project.id} className="flex items-center justify-between rounded-lg border p-4">
                            <div>
                              <h3 className="font-medium">{project.title}</h3>
                              <p className="text-sm text-muted-foreground">{project.description}</p>
                            </div>
                            <Button variant="ghost" size="icon">
                              <ChevronRight className="h-4 w-4" />
                              <span className="sr-only">View project</span>
                            </Button>
                          </div>
                        ))}
                      </div>
                      <div className="mt-6">
                        <h3 className="mb-4 text-lg font-semibold">Resume Builder</h3>
                        <Card className="bg-muted/50">
                          <CardContent className="p-4">
                            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                              <div>
                                <h4 className="font-medium">Auto-generate your resume</h4>
                                <p className="text-sm text-muted-foreground">
                                  Create a professional resume based on your skills and projects
                                </p>
                              </div>
                              <Button>Build Resume</Button>
                            </div>
                          </CardContent>
                        </Card>
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

