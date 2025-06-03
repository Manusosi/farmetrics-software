
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  MessageSquare, 
  Send, 
  Search, 
  Users, 
  Clock, 
  Plus,
  Filter,
  MoreVertical,
  Phone,
  Video,
  Paperclip
} from "lucide-react";

export function Messaging() {
  const conversations = [
    {
      id: 1,
      name: "Field Team Alpha",
      lastMessage: "Cocoa farm data collection completed",
      time: "2 min ago",
      unread: 3,
      type: "group",
      participants: 8
    },
    {
      id: 2,
      name: "John Doe",
      lastMessage: "Photos uploaded successfully",
      time: "15 min ago",
      unread: 0,
      type: "direct",
      status: "online"
    },
    {
      id: 3,
      name: "Regional Supervisors",
      lastMessage: "Weekly report discussion",
      time: "1 hr ago",
      unread: 1,
      type: "group",
      participants: 12
    },
    {
      id: 4,
      name: "Mary Johnson",
      lastMessage: "Need clarification on boundary mapping",
      time: "3 hrs ago",
      unread: 0,
      type: "direct",
      status: "away"
    }
  ];

  const messages = [
    {
      id: 1,
      sender: "John Doe",
      content: "I've completed the data collection for the Ashanti region farms. All photos and GPS coordinates have been uploaded.",
      time: "10:30 AM",
      isOwn: false
    },
    {
      id: 2,
      sender: "You",
      content: "Great work! How many farms were covered today?",
      time: "10:32 AM",
      isOwn: true
    },
    {
      id: 3,
      sender: "John Doe",
      content: "We covered 15 farms today. Also found 3 farms that need boundary updates.",
      time: "10:35 AM",
      isOwn: false
    },
    {
      id: 4,
      sender: "You",
      content: "Perfect. Please create a priority list for the boundary updates and we'll schedule them for next week.",
      time: "10:38 AM",
      isOwn: true
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-slate-200/50 sticky top-0 z-40">
        <div className="px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-lg">
                  <MessageSquare className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-3xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                    Team Communication
                  </h1>
                  <p className="text-slate-600 font-medium">Coordinate with field officers and supervisors</p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="outline" size="sm" className="bg-white/70 border-slate-300 hover:bg-white">
                <Users className="w-4 h-4 mr-2" />
                Manage Teams
              </Button>
              <Button size="sm" className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800">
                <Plus className="w-4 h-4 mr-2" />
                New Message
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="p-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 h-[800px]">
          {/* Conversations List */}
          <div className="lg:col-span-1">
            <Card className="bg-white/70 backdrop-blur-sm border-slate-200/50 shadow-xl h-full">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-2 text-slate-800">
                  <MessageSquare className="w-5 h-5 text-blue-600" />
                  Conversations
                </CardTitle>
                <div className="relative">
                  <Search className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
                  <Input placeholder="Search conversations..." className="pl-10" />
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <div className="space-y-2 p-4">
                  {conversations.map((conversation) => (
                    <div key={conversation.id} className="p-4 rounded-xl hover:bg-blue-50 cursor-pointer transition-colors border border-transparent hover:border-blue-200">
                      <div className="flex items-start gap-3">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-sm">
                          {conversation.type === 'group' ? 
                            <Users className="w-6 h-6 text-white" /> : 
                            <span className="text-white font-semibold">{conversation.name.split(' ').map(n => n[0]).join('')}</span>
                          }
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between mb-1">
                            <span className="font-semibold text-slate-800 truncate">{conversation.name}</span>
                            {conversation.unread > 0 && (
                              <Badge className="bg-blue-600 text-white text-xs">
                                {conversation.unread}
                              </Badge>
                            )}
                          </div>
                          <p className="text-sm text-slate-600 truncate">{conversation.lastMessage}</p>
                          <div className="flex items-center justify-between mt-1">
                            <span className="text-xs text-slate-500">{conversation.time}</span>
                            {conversation.type === 'group' && (
                              <span className="text-xs text-slate-500">{conversation.participants} members</span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Chat Interface */}
          <div className="lg:col-span-3">
            <Card className="bg-white/70 backdrop-blur-sm border-slate-200/50 shadow-xl h-full flex flex-col">
              {/* Chat Header */}
              <CardHeader className="border-b border-slate-200/50 flex-shrink-0">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-sm">
                      <span className="text-white font-semibold">JD</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800">John Doe</h3>
                      <p className="text-sm text-green-600">Online • Field Officer</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm">
                      <Phone className="w-4 h-4" />
                    </Button>
                    <Button variant="outline" size="sm">
                      <Video className="w-4 h-4" />
                    </Button>
                    <Button variant="outline" size="sm">
                      <MoreVertical className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>

              {/* Messages */}
              <CardContent className="flex-1 p-6 overflow-y-auto">
                <div className="space-y-4">
                  {messages.map((message) => (
                    <div key={message.id} className={`flex ${message.isOwn ? 'justify-end' : 'justify-start'}`}>
                      <div className={`max-w-xs lg:max-w-md px-4 py-3 rounded-2xl ${
                        message.isOwn 
                          ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white' 
                          : 'bg-white border border-slate-200 shadow-sm'
                      }`}>
                        {!message.isOwn && (
                          <p className="text-xs font-semibold text-blue-600 mb-1">{message.sender}</p>
                        )}
                        <p className={`text-sm ${message.isOwn ? 'text-white' : 'text-slate-700'}`}>
                          {message.content}
                        </p>
                        <p className={`text-xs mt-2 ${message.isOwn ? 'text-blue-100' : 'text-slate-500'}`}>
                          {message.time}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>

              {/* Message Input */}
              <div className="border-t border-slate-200/50 p-4 flex-shrink-0">
                <div className="flex items-center gap-3">
                  <Button variant="outline" size="sm">
                    <Paperclip className="w-4 h-4" />
                  </Button>
                  <div className="flex-1 relative">
                    <Textarea 
                      placeholder="Type your message..." 
                      className="resize-none pr-12"
                      rows={1}
                    />
                  </div>
                  <Button size="sm" className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800">
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
