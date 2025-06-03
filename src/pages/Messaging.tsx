
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  MessageSquare, 
  Send, 
  Search, 
  Filter, 
  Users, 
  Bell,
  Clock,
  CheckCircle,
  AlertCircle,
  Plus,
  MoreVertical,
  Star,
  Archive
} from "lucide-react";

export function Messaging() {
  const conversations = [
    {
      id: 1,
      name: "John Doe",
      role: "Field Officer",
      region: "Ashanti",
      lastMessage: "Photos from today's farm visit uploaded successfully",
      timestamp: "2 min ago",
      unread: 2,
      status: "online",
      priority: "normal"
    },
    {
      id: 2,
      name: "Mary Johnson",
      role: "Supervisor",
      region: "Eastern",
      lastMessage: "Weekly report review completed. Need clarification on polygon boundaries.",
      timestamp: "15 min ago",
      unread: 1,
      status: "away",
      priority: "high"
    },
    {
      id: 3,
      name: "David Smith",
      role: "Field Officer",
      region: "Central",
      lastMessage: "Equipment maintenance scheduled for tomorrow",
      timestamp: "1 hr ago",
      unread: 0,
      status: "offline",
      priority: "normal"
    },
    {
      id: 4,
      name: "Sarah Wilson",
      role: "Team Lead",
      region: "Western",
      lastMessage: "Great work on the recent submissions! Keep it up.",
      timestamp: "3 hrs ago",
      unread: 0,
      status: "online",
      priority: "normal"
    }
  ];

  const messages = [
    {
      id: 1,
      sender: "John Doe",
      content: "Photos from today's farm visit uploaded successfully",
      timestamp: "2:34 PM",
      type: "received",
      attachments: ["farm_visit_photos.zip"]
    },
    {
      id: 2,
      sender: "You",
      content: "Great work! I'll review them shortly. Any issues with the GPS coordinates?",
      timestamp: "2:35 PM",
      type: "sent"
    },
    {
      id: 3,
      sender: "John Doe",
      content: "No issues with GPS. All locations were captured accurately. Also submitted polygon data for 3 new farms.",
      timestamp: "2:36 PM",
      type: "received"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <div className="bg-white/90 backdrop-blur-sm border-b border-slate-200/50 sticky top-0 z-40">
        <div className="px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center shadow-lg">
                  <MessageSquare className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-3xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                    Messaging Center
                  </h1>
                  <p className="text-slate-600 font-medium">Communicate with field teams and supervisors</p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="outline" size="sm" className="bg-white/70 border-slate-300 hover:bg-white">
                <Filter className="w-4 h-4 mr-2" />
                Filter
              </Button>
              <Button size="sm" className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700">
                <Plus className="w-4 h-4 mr-2" />
                New Message
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="p-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 h-[calc(100vh-200px)]">
          {/* Conversations List */}
          <div className="lg:col-span-1">
            <Card className="h-full bg-white/70 backdrop-blur-sm border-slate-200/50 shadow-xl">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2 text-slate-800">
                    <Users className="w-5 h-5 text-blue-600" />
                    Conversations
                  </CardTitle>
                  <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                    {conversations.filter(c => c.unread > 0).length} unread
                  </Badge>
                </div>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input 
                    placeholder="Search conversations..." 
                    className="pl-10 bg-white/50 border-slate-300"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-0 overflow-auto">
                <div className="space-y-1">
                  {conversations.map((conversation) => (
                    <div 
                      key={conversation.id}
                      className="p-4 border-b border-slate-200/50 hover:bg-white/50 cursor-pointer transition-all duration-200"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-3">
                          <div className="relative">
                            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
                              {conversation.name.split(' ').map(n => n[0]).join('')}
                            </div>
                            <div className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-white ${
                              conversation.status === 'online' ? 'bg-green-500' : 
                              conversation.status === 'away' ? 'bg-yellow-500' : 'bg-gray-400'
                            }`} />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2">
                              <h4 className="font-semibold text-slate-900 truncate">{conversation.name}</h4>
                              {conversation.priority === 'high' && (
                                <Star className="w-4 h-4 text-yellow-500 fill-current" />
                              )}
                            </div>
                            <p className="text-sm text-slate-600">{conversation.role} • {conversation.region}</p>
                            <p className="text-sm text-slate-700 truncate mt-1">{conversation.lastMessage}</p>
                          </div>
                        </div>
                        <div className="flex flex-col items-end gap-1">
                          <span className="text-xs text-slate-500">{conversation.timestamp}</span>
                          {conversation.unread > 0 && (
                            <Badge className="bg-blue-600 text-white text-xs px-2 py-1">
                              {conversation.unread}
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Chat Interface */}
          <div className="lg:col-span-2">
            <Card className="h-full bg-white/70 backdrop-blur-sm border-slate-200/50 shadow-xl flex flex-col">
              {/* Chat Header */}
              <CardHeader className="pb-4 border-b border-slate-200/50">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
                      JD
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900">John Doe</h3>
                      <p className="text-sm text-slate-600">Field Officer • Ashanti Region</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="sm">
                      <Bell className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Archive className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <MoreVertical className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>

              {/* Messages */}
              <CardContent className="flex-1 p-6 overflow-auto">
                <div className="space-y-4">
                  {messages.map((message) => (
                    <div 
                      key={message.id}
                      className={`flex ${message.type === 'sent' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div className={`max-w-xs lg:max-w-md px-4 py-3 rounded-2xl ${
                        message.type === 'sent' 
                          ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white' 
                          : 'bg-white/80 border border-slate-200 text-slate-900'
                      }`}>
                        <p className="text-sm">{message.content}</p>
                        {message.attachments && (
                          <div className="mt-2">
                            {message.attachments.map((attachment, idx) => (
                              <div key={idx} className="text-xs opacity-80 flex items-center gap-1">
                                <AlertCircle className="w-3 h-3" />
                                {attachment}
                              </div>
                            ))}
                          </div>
                        )}
                        <div className={`text-xs mt-2 flex items-center gap-1 ${
                          message.type === 'sent' ? 'text-blue-100' : 'text-slate-500'
                        }`}>
                          <Clock className="w-3 h-3" />
                          {message.timestamp}
                          {message.type === 'sent' && <CheckCircle className="w-3 h-3" />}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>

              {/* Message Input */}
              <div className="p-6 border-t border-slate-200/50">
                <div className="flex items-end gap-3">
                  <div className="flex-1">
                    <Textarea 
                      placeholder="Type your message..."
                      className="min-h-[40px] max-h-[120px] bg-white/50 border-slate-300 resize-none"
                      rows={1}
                    />
                  </div>
                  <Button 
                    size="sm" 
                    className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 px-6"
                  >
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
