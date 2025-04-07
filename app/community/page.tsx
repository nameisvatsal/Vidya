import { SiteHeader } from "@/components/site-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { MapPin, Users, MessageSquare, Calendar, Search } from "lucide-react"
import Link from "next/link"

export default function CommunityPage() {
  // Mock data for Vidya Hubs
  const hubs = [
    {
      id: 1,
      name: "Jaipur Tech Hub",
      location: "Jaipur, Rajasthan",
      members: 45,
      distance: "2.5 km",
      topics: ["Web Development", "Digital Marketing"],
      nextMeeting: "Tomorrow, 5:00 PM",
      image: "/placeholder.svg?height=100&width=200",
    },
    {
      id: 2,
      name: "Bangalore Code Club",
      location: "Bangalore, Karnataka",
      members: 120,
      distance: "Online",
      topics: ["Programming", "AI/ML"],
      nextMeeting: "Saturday, 11:00 AM",
      image: "/placeholder.svg?height=100&width=200",
    },
    {
      id: 3,
      name: "Delhi Design Circle",
      location: "Delhi, NCR",
      members: 78,
      distance: "Online",
      topics: ["UI/UX Design", "Graphic Design"],
      nextMeeting: "Friday, 6:00 PM",
      image: "/placeholder.svg?height=100&width=200",
    },
    {
      id: 4,
      name: "Rural Tech Network",
      location: "Multiple Villages, Rajasthan",
      members: 65,
      distance: "15 km",
      topics: ["Basic Computing", "Digital Literacy"],
      nextMeeting: "Sunday, 10:00 AM",
      image: "/placeholder.svg?height=100&width=200",
    },
  ]

  // Mock data for forum discussions
  const discussions = [
    {
      id: 1,
      title: "How to start learning web development?",
      author: "Rahul S.",
      replies: 12,
      lastActive: "2 hours ago",
      tags: ["Beginners", "Web Dev"],
    },
    {
      id: 2,
      title: "Looking for study partners in Bangalore",
      author: "Priya M.",
      replies: 8,
      lastActive: "Yesterday",
      tags: ["Study Group", "Bangalore"],
    },
    {
      id: 3,
      title: "Resources for learning English communication",
      author: "Amit K.",
      replies: 15,
      lastActive: "3 days ago",
      tags: ["English", "Communication"],
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1 py-6">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col gap-8">
            {/* Community Header */}
            <section>
              <div className="flex flex-col gap-2">
                <h1 className="text-3xl font-bold tracking-tight">Vidya Hubs</h1>
                <p className="text-muted-foreground">Connect with local learning communities and peers</p>
              </div>
            </section>

            {/* Search and Filter */}
            <section>
              <div className="flex flex-col gap-4 sm:flex-row">
                <div className="relative flex-1">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input type="search" placeholder="Search hubs or discussions..." className="pl-8" />
                </div>
                <Button>Find Nearby Hubs</Button>
              </div>
            </section>

            {/* Community Content */}
            <section>
              <Tabs defaultValue="hubs" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="hubs" className="flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    <span>Vidya Hubs</span>
                  </TabsTrigger>
                  <TabsTrigger value="forum" className="flex items-center gap-2">
                    <MessageSquare className="h-4 w-4" />
                    <span>Forum</span>
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="hubs" className="mt-4">
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {hubs.map((hub) => (
                      <Card key={hub.id} className="overflow-hidden">
                        <div className="aspect-video w-full">
                          <img
                            src={hub.image || "/placeholder.svg"}
                            alt={hub.name}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <CardHeader className="pb-2">
                          <CardTitle>{hub.name}</CardTitle>
                          <CardDescription className="flex items-center gap-1">
                            <MapPin className="h-3 w-3" />
                            {hub.location}
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="pb-2">
                          <div className="flex flex-wrap gap-1">
                            {hub.topics.map((topic) => (
                              <Badge key={topic} variant="secondary">
                                {topic}
                              </Badge>
                            ))}
                          </div>
                          <div className="mt-3 flex items-center justify-between text-sm">
                            <div className="flex items-center gap-1">
                              <Users className="h-3 w-3" />
                              <span>{hub.members} members</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="h-3 w-3" />
                              <span>{hub.distance}</span>
                            </div>
                          </div>
                          <div className="mt-2 flex items-center gap-1 text-sm">
                            <Calendar className="h-3 w-3" />
                            <span>Next meeting: {hub.nextMeeting}</span>
                          </div>
                        </CardContent>
                        <CardFooter>
                          <Button className="w-full">Join Hub</Button>
                        </CardFooter>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="forum" className="mt-4">
                  <Card>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle>Recent Discussions</CardTitle>
                        <Button>New Topic</Button>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {discussions.map((discussion) => (
                          <div key={discussion.id} className="rounded-lg border p-4">
                            <div className="flex flex-col gap-2">
                              <div className="flex items-start justify-between">
                                <h3 className="font-medium">
                                  <Link
                                    href={`/community/discussions/${discussion.id}`}
                                    className="hover:text-primary hover:underline"
                                  >
                                    {discussion.title}
                                  </Link>
                                </h3>
                                <div className="text-sm text-muted-foreground">{discussion.lastActive}</div>
                              </div>
                              <div className="flex flex-wrap items-center gap-2">
                                <div className="text-sm">Started by {discussion.author}</div>
                                <div className="text-sm text-muted-foreground">•</div>
                                <div className="flex items-center gap-1 text-sm">
                                  <MessageSquare className="h-3 w-3" />
                                  <span>{discussion.replies} replies</span>
                                </div>
                              </div>
                              <div className="flex flex-wrap gap-1">
                                {discussion.tags.map((tag) => (
                                  <Badge key={tag} variant="outline">
                                    {tag}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-center border-t p-4">
                      <Button variant="outline">View All Discussions</Button>
                    </CardFooter>
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

