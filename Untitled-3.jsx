import UserLatestAchievement from "./user-latest-achievement"
import OtherUsersLatestAchievements from "./other-users-latest-achievements"
import RecentActivitiesFeed from "./recent-activities-feed"
import { Button } from "/components/ui/button"
import { Menu, User, Settings, Mail, Bell, Calendar, Clock, Heart, Star, Upload, Download, Trash, Edit, Plus, Minus, Check, X, ArrowRight } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "/components/ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "/components/ui/dropdown-menu"

export default function Homepage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="icon">
              <Menu className="h-4 w-4" />
            </Button>
            <h1 className="text-3xl font-bold">Achievements & Feed</h1>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="icon">
              <Mail className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon">
              <Bell className="h-4 w-4" />
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                  <User className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" /> Settings
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Logout className="mr-2 h-4 w-4" /> Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Avatar>
              <AvatarImage src="https://github.com/nutlope.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>
      <UserLatestAchievement />
      <OtherUsersLatestAchievements />
      <RecentActivitiesFeed />
    </div>
  )
}