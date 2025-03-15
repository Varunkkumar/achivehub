import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "/components/ui/card"
import { Clock, Share2, MoreHorizontal } from "lucide-react"
import { Button } from "/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "/components/ui/dropdown-menu"

// Sample recent activities data
const recentActivities = [
  {
    id: 1,
    user: "John Doe",
    activity: "completed a task",
    date: "2023-10-02",
  },
  {
    id: 2,
    user: "Jane Smith",
    activity: "reached 10 tasks in a row",
    date: "2023-10-15",
  },
  {
    id: 3,
    user: "Alice Johnson",
    activity: "reached 100 tasks",
    date: "2023-10-25",
  },
]

export default function RecentActivitiesFeed() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activities</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {recentActivities.map((activity) => (
            <li key={activity.id} className="flex items-center space-x-2">
              <Clock className="h-4 w-4 text-gray-500" />
              <p className="text-sm text-muted-foreground">
                {activity.user} {activity.activity} on {activity.date}
              </p>
              <div className="ml-auto">
                <Button variant="outline" size="sm">
                  <Share2 className="mr-2 h-4 w-4" /> Share
                </Button>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="sm">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                    <DropdownMenuItem>
                      <Edit className="mr-2 h-4 w-4" /> Edit
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Trash className="mr-2 h-4 w-4" /> Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}